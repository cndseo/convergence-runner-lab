#!/usr/bin/env python3
"""CONVERGENCE: normalize clean transparent PNG sprites and build a texture atlas.

Usage:
    python build_assets.py --input source --output output
    python build_assets.py --sheet contact_sheet.png --columns 3 --rows 2 --names lyceen,genz,pompier,infirmiere,agriculteur,crs --output output

The sheet mode intentionally refuses opaque/non-separated backgrounds. This is to
avoid silently producing dark rectangles masquerading as production sprites.
"""
import argparse
import hashlib
import json
import math
from pathlib import Path
from PIL import Image

TARGET_WIDTH = 448
TARGET_HEIGHT = 640
PADDING = 24
ALPHA_THRESHOLD = 10


def validate_transparency(image: Image.Image, name: str):
    if 'A' not in image.getbands():
        raise ValueError(f'{name}: source has no alpha channel; render on a TRANSPARENT background.')
    alpha = image.getchannel('A')
    transparent_corners = sum(alpha.getpixel(pt) < 50 for pt in
        [(0,0),(image.width - 1,0),(0,image.height - 1),(image.width - 1,image.height - 1)])
    if transparent_corners < 3:
        raise ValueError(f'{name}: foreground has opaque corners; separate subject from background before using.')
    return image.convert('RGBA')


def trim_and_normalize(im: Image.Image):
    alpha = im.getchannel('A').point(lambda v: 255 if v > ALPHA_THRESHOLD else 0)
    bounds = alpha.getbbox()
    if not bounds:
        raise ValueError('No visible foreground in source.')
    cutout = im.crop(bounds)
    max_width = TARGET_WIDTH - 2 * PADDING
    max_height = TARGET_HEIGHT - 2 * PADDING
    ratio = min(max_width / cutout.width, max_height / cutout.height)
    new_size = (max(1,round(cutout.width*ratio)),max(1,round(cutout.height*ratio)))
    cutout = cutout.resize(new_size,Image.Resampling.LANCZOS)
    final = Image.new('RGBA',(TARGET_WIDTH,TARGET_HEIGHT),(0,0,0,0))
    final.alpha_composite(cutout,((TARGET_WIDTH-new_size[0])//2,TARGET_HEIGHT-PADDING-new_size[1]))
    return final,bounds


def split_sheet(path,cols,rows,names):
    source=Image.open(path)
    names=[x.strip() for x in names.split(',')]
    if len(names)!=cols*rows:
        raise ValueError('Provide exactly columns × rows names.')
    tiles=[]
    for r in range(rows):
        for c in range(cols):
            rect=(c*source.width//cols,r*source.height//rows,(c+1)*source.width//cols,(r+1)*source.height//rows)
            tiles.append((names[r*cols+c],source.crop(rect)))
    return tiles


def create_atlas(images, names, output):
    n=len(images)
    columns=min(4,max(1,math.ceil(math.sqrt(n))))
    rows=math.ceil(n/columns)
    sheet=Image.new('RGBA',(columns*TARGET_WIDTH,rows*TARGET_HEIGHT),(0,0,0,0))
    frames={}
    for i,(name,im) in enumerate(zip(names,images)):
        x=(i%columns)*TARGET_WIDTH
        y=(i//columns)*TARGET_HEIGHT
        sheet.alpha_composite(im,(x,y))
        frames[name]={
            'rect':{'x':x,'y':y,'width':TARGET_WIDTH,'height':TARGET_HEIGHT},
            'pivot':{'x':0.5,'y':0.965},
            'uv':{'u0':round(x/sheet.width,6),'v0':round(y/sheet.height,6),
                  'u1':round((x+TARGET_WIDTH)/sheet.width,6),'v1':round((y+TARGET_HEIGHT)/sheet.height,6)},
            'animation':'STILL_ONLY',
        }
    sheet.save(output/'atlas.png',optimize=True)
    sheet.save(output/'atlas.webp',lossless=True,method=6)
    (output/'atlas.json').write_text(json.dumps({
        'format':'CONVERGENCE-SPRITE-ATLAS-v1',
        'image':'atlas.webp','width':sheet.width,'height':sheet.height,
        'tile':{'width':TARGET_WIDTH,'height':TARGET_HEIGHT},'frames':frames,
    },indent=2,ensure_ascii=False),encoding='utf-8')
    return frames


def main():
    parser=argparse.ArgumentParser()
    parser.add_argument('--input',default='source')
    parser.add_argument('--output',default='output')
    parser.add_argument('--sheet',default=None)
    parser.add_argument('--columns',type=int,default=3)
    parser.add_argument('--rows',type=int,default=2)
    parser.add_argument('--names',default=None)
    args=parser.parse_args()
    dst=Path(args.output)
    dst.mkdir(parents=True,exist_ok=True)
    if args.sheet:
        if not args.names:parser.error('--names is required with --sheet')
        tiles=split_sheet(args.sheet,args.columns,args.rows,args.names)
    else:
        tiles=[(p.stem,Image.open(p)) for p in sorted(Path(args.input).glob('*.png'))]
    if not tiles:parser.error('No PNG assets found.')
    images=[];names=[];sources=[]
    for name,img in tiles:
        img=validate_transparency(img,name)
        normalized,bbox=trim_and_normalize(img)
        p=dst/f'{name}.png';normalized.save(p,optimize=True)
        normalized.save(dst/f'{name}.webp',lossless=True,method=6)
        images.append(normalized);names.append(name)
        sources.append({'name':name,'source_bounds':bbox,'asset':p.name,
                        'sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
    frames=create_atlas(images,names,dst)
    (dst/'manifest.json').write_text(json.dumps({'status':'2D_SPRITES_READY_NOT_3D',
        'needs_animation':True,'sprites':sources,'atlas':'atlas.webp',
        'count':len(frames)},indent=2,ensure_ascii=False),encoding='utf-8')
    print(f'Built {len(images)} PNG + WebP sprites and atlas {dst/"atlas.webp"}')

if __name__=='__main__':main()
