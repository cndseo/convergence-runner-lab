"""Build six CC0 Quaternius character palette variants without Blender."""
from pathlib import Path
import json
import struct
from io import BytesIO
from PIL import Image

ASSETS = Path(__file__).resolve().parents[1] / 'public' / 'assets' / 'quaternius'
source = (ASSETS / 'animated-human.glb').read_bytes()
json_length = struct.unpack_from('<I', source, 12)[0]
document = json.loads(source[20:20 + json_length])
binary_chunk = 20 + json_length
binary_chunk += (-binary_chunk) % 4
assert source[binary_chunk + 4:binary_chunk + 8] == b'BIN\x00'
image_view = document['bufferViews'][document['images'][0]['bufferView']]
offset = binary_chunk + 8 + image_view.get('byteOffset', 0)
image_bytes = source[offset:offset + image_view['byteLength']]
base = Image.open(BytesIO(image_bytes)).convert('RGB')

SHIRT = (115, 167, 196)
TROUSERS = (21, 96, 189)
HAIR = (124, 88, 35)
variants = {
    'gilets': ((246, 203, 36), (45, 76, 117), (83, 57, 36)),
    'genz': ((108, 65, 158), (47, 61, 93), (61, 41, 29)),
    'lyceens': ((64, 113, 167), (55, 67, 89), (83, 57, 36)),
    'pompiers': ((216, 46, 37), (109, 40, 36), (83, 57, 36)),
    'infirmieres': ((239, 240, 230), (223, 229, 237), (85, 60, 44)),
    'agriculteurs': ((89, 118, 68), (85, 72, 52), (86, 59, 36)),
}
for name, (shirt, trousers, hair) in variants.items():
    colors = {SHIRT: shirt, TROUSERS: trousers, HAIR: hair}
    target = Image.new('RGB', base.size)
    target.putdata([colors.get(p, p) for p in base.getdata()])
    filename = ASSETS / ('palette-' + name + '.png')
    target.save(filename, optimize=True)
    print(name, filename.stat().st_size, 'bytes')
