// Isolated read-only delivery of the locally compiled CONVERGENCE build.
import {createServer} from 'node:http';
import {createReadStream} from 'node:fs';
import {stat} from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('C:/CITYOS/convergence-tv-complete/docs/convergence');
const base='/convergence-runner-lab/convergence/';
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.webp':'image/webp','.glb':'model/gltf-binary','.png':'image/png','.m4a':'audio/mp4','.mp3':'audio/mpeg','.wav':'audio/wav','.ogg':'audio/ogg','.svg':'image/svg+xml'};
createServer(async(req,res)=>{
 if(!['GET','HEAD'].includes(req.method)){res.writeHead(405);return res.end();}
 try{
  const url=new URL(req.url,'http://localhost');
  if(url.pathname==='/'){res.writeHead(302,{Location:base});return res.end();}
  if(!url.pathname.startsWith(base)){res.writeHead(404);return res.end();}
  const relative=decodeURIComponent(url.pathname.slice(base.length))||'index.html';
  const file=path.resolve(root,relative);
  if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end();}
  const st=await stat(file);if(!st.isFile())throw Error('not a file');
  res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Content-Length':st.size,'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});
  if(req.method==='HEAD')return res.end();
  createReadStream(file).pipe(res);
 }catch{res.writeHead(404);res.end();}
}).listen(4582,'127.0.0.1',()=>console.log('TV HD compiled preview ready on 4582'));
