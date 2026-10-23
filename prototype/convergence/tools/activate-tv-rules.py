#!/usr/bin/env python3
"""Replace only the image's pure TV/Daily rules; preserve all runtime configuration."""
import copy, hashlib, http.client, json, os, socket, subprocess, sys, time
name='convergence-payments-api-presence'
revision=sys.argv[1]
image='convergence-payments-api:tv-contract-'+revision[:12]
folder='/home/olga/convergence-tv-contract-'+revision[:12]
backup='convergence-payments-api-tv-before-'+revision[:12]
def inspect(n): return json.loads(subprocess.check_output(['docker','inspect',n]))[0]
def run(*args): return subprocess.check_output(list(args),stderr=subprocess.STDOUT).decode().strip()
def hashes(n):
 return run('docker','exec',n,'sha256sum','/app/server/server.mjs','/app/server/account.mjs','/app/server/identity.mjs')
class DockerHTTP(http.client.HTTPConnection):
 def connect(self):
  self.sock=socket.socket(socket.AF_UNIX,socket.SOCK_STREAM);self.sock.connect('/var/run/docker.sock')
def request(method,path,body=None):
 c=DockerHTTP('localhost');c.request(method,path,json.dumps(body) if body is not None else None,{'Content-Type':'application/json'})
 r=c.getresponse();data=r.read();c.close()
 if r.status>=400: raise RuntimeError('Docker API operation failed: '+str(r.status))
 return json.loads(data) if data else {}
original=inspect(name)
assert original['Config']['Image']=='convergence-payments-api:presence-20261022','API changed concurrently'
original_hashes=hashes(name)
private_path=folder+'/runtime-before.private.json'
fd=os.open(private_path,os.O_WRONLY|os.O_CREAT|os.O_EXCL,0o600)
with os.fdopen(fd,'w') as f:json.dump(original,f)
payload=copy.deepcopy(original['Config']);payload['Image']=image
payload['HostConfig']=copy.deepcopy(original['HostConfig'])
payload['NetworkingConfig']={'EndpointsConfig':{net:{'Aliases':v.get('Aliases') or []} for net,v in original['NetworkSettings']['Networks'].items()}}
created=False
try:
 run('docker','stop','-t','10',name);run('docker','rename',name,backup)
 result=request('POST','/containers/create?name='+name,payload);created=True
 run('docker','start',name)
 ready=False
 for attempt in range(40):
  try:
   raw=run('docker','exec',name,'node','--input-type=module','-e',
    "const r=await fetch('http://127.0.0.1:'+(process.env.PORT||4319)+'/api/v1/health');if(!r.ok)process.exit(1);console.log(await r.text());")
   health=json.loads(raw);ready=True;break
  except Exception:time.sleep(.25)
 assert ready,'Updated API health failed'
 current=inspect(name)
 assert sorted(current['Config']['Env'])==sorted(original['Config']['Env']),'Runtime environment changed'
 assert current['HostConfig'].get('Binds')==original['HostConfig'].get('Binds'),'Secret/data mounts changed'
 assert hashes(name)==original_hashes,'Account/payment code changed'
 rules=run('docker','exec',name,'node','--input-type=module','-e',
  "import{createDailyPlan,computeDailyScore}from './src/dailyChallenge.mjs';const p=createDailyPlan('2026-10-23');if(p.version!==4)process.exit(1);console.log(JSON.stringify(computeDailyScore('2026-10-23',p.proof.winningPath)));")
 report={'revision':revision,'imageBefore':original['Config']['Image'],'imageAfter':image,'rollbackContainer':backup,
  'environmentPreserved':True,'mountsPreserved':True,'protectedServerHashes':original_hashes.splitlines(),'health':health,'daily':json.loads(rules)}
 with open(folder+'/api-rollout.json','w') as f:json.dump(report,f,indent=2)
 print(json.dumps({'api':'healthy','dailyVersion':4,'protectedCodeUnchanged':True,'environmentPreserved':True}))
except Exception:
 if created:
  subprocess.run(['docker','rm','-f',name],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
 subprocess.run(['docker','rename',backup,name],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
 subprocess.run(['docker','start',name],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
 raise
