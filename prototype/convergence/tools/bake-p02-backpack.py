"""Bake the approved P02 backpack detail as a reusable texture for native Walk rigs.
The approved reference image is read-only and not modified.
"""
from pathlib import Path
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
root=Path(__file__).resolve().parents[1]
source=Image.open(root/'public/assets/approved/P02.webp').convert('RGBA')
assert source.size==(448,640)
bounds=(231,239,351,361)
crop=source.crop(bounds)
mask=Image.new('L',crop.size,0)
outline=[(259,250),(277,242),(305,243),(327,254),(339,274),(345,322),(329,351),(250,352),(237,333),(237,278)]
ImageDraw.Draw(mask).polygon([(x-bounds[0],y-bounds[1]) for x,y in outline],fill=255)
mask=mask.filter(ImageFilter.GaussianBlur(1.5))
alpha=np.asarray(crop.getchannel('A'),dtype=np.float32)
shape=np.asarray(mask,dtype=np.float32)
crop.putalpha(Image.fromarray((alpha*shape/255).astype(np.uint8)))
out=root/'public/assets/crowd/p02-backpack-detail.webp'
crop.save(out,quality=91,method=6)
print(f'Baked P02 backpack detail: {out} ({out.stat().st_size} bytes)')
# Back of the reflective vest, including natural folds and reflective bands.
vest_bounds=(185,211,413,416)
vest=source.crop(vest_bounds)
vest_mask=Image.new('L',vest.size,0)
vest_outline=[(222,236),(247,216),(330,216),(388,250),(405,305),(394,397),(360,410),(200,410),(189,368),(194,291)]
ImageDraw.Draw(vest_mask).polygon([(x-vest_bounds[0],y-vest_bounds[1]) for x,y in vest_outline],fill=255)
vest_mask=vest_mask.filter(ImageFilter.GaussianBlur(1.0))
vest_alpha=np.asarray(vest.getchannel('A'),dtype=np.float32)
vest.putalpha(Image.fromarray((vest_alpha*np.asarray(vest_mask,dtype=np.float32)/255).astype(np.uint8)))
vest_out=root/'public/assets/crowd/p02-vest-detail.webp'
vest.save(vest_out,quality=91,method=6)
print(f'Baked P02 vest detail: {vest_out} ({vest_out.stat().st_size} bytes)')
