import hashlib,json,sys
from PIL import Image
rows=json.load(open(sys.argv[1],encoding='utf-8'))
for row in rows:
 a=Image.open(row['download']).convert('RGBA')
 b=Image.open(row['original']).convert('RGBA')
 assert a.size==b.size and a.tobytes()==b.tobytes(),row['id']+' differs visually'
 row['pixelSha256']=hashlib.sha256(a.tobytes()).hexdigest()
 row['pixelsIdentical']=True
print(json.dumps(rows))
