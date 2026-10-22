#!/usr/bin/env bash
set -euo pipefail
REV=${1:?revision}; TREE=${2:?source tree}; PATCH=${3:?native Git patch}
[[ "$REV" =~ ^[0-9a-f]{40}$ && "$TREE" =~ ^[0-9a-f]{40}$ ]]
KEY=/home/olga/.ssh/olga_vps_worker
HOST=olga@72.61.167.161
scp -i "$KEY" -o IdentitiesOnly=yes -o BatchMode=yes "$PATCH" "$HOST:/tmp/tv-contract-$REV.patch"
ssh -i "$KEY" -o IdentitiesOnly=yes -o BatchMode=yes "$HOST" bash -s -- "$REV" "$TREE" <<'REMOTE'
set -euo pipefail
REV=$1; TREE=$2
SRC=/home/olga/convergence-tv-contract-${REV:0:12}
PARENT=/home/olga/convergence-tv-choice-balance-src-20261021
WEB=/home/olga/convergence-heroes-20261021/public/tv-coherentes-20261023
test ! -e "$SRC"; test ! -e "$WEB"
git clone --shared --no-checkout "$PARENT" "$SRC"
git -C "$SRC" checkout --detach 1786bbad663b432ce12b79c9454d2a4ba47ce837
git -C "$SRC" apply --index "/tmp/tv-contract-$REV.patch"
test "$(git -C "$SRC" write-tree)" = "$TREE"
cp -a "$PARENT/prototype/convergence/node_modules" "$SRC/prototype/convergence/node_modules"
for pair in '/:_tv_public' '/tv-coherentes-20261023/:_tv_preview'; do
 BASE=${pair%:*}; OUT=${pair#*:}
 docker run --rm --network none --user "$(id -u):$(id -g)" --memory 768m --cpus 1.5 \
  -v "$SRC:/work" -w /work/prototype/convergence \
  -e VITE_CONVERGENCE_API=https://api.le84500.fr/convergence \
  -e VITE_PLAYER_PREVIEW=1 -e VITE_PARIS_PREVIEW=1 node:24-alpine \
  npm run build -- --base "$BASE" --outDir "/work/$OUT"
 printf '%s\ntv_contract_exact_20261023\n' "$REV" > "$SRC/$OUT/revision.txt"
 printf '%s\n' "$TREE" > "$SRC/$OUT/source-tree.txt"
done
mkdir -p "$WEB"; cp -a "$SRC/_tv_preview/." "$WEB/"
mkdir "$SRC/payload"
cp "$SRC/_tv_public/index.html" "$SRC/_tv_public/revision.txt" "$SRC/_tv_public/source-tree.txt" "$SRC/payload/"
mkdir "$SRC/payload/assets"
find "$SRC/_tv_public/assets" -maxdepth 1 -type f \( -name '*.js' -o -name '*.css' \) -exec cp {} "$SRC/payload/assets/" \;
tar -C "$SRC/payload" -czf "$SRC/public-payload.tar.gz" .
# Keep the current API image and all its auth/payment code; replace only pure rules.
mkdir -p "$SRC/api-rules/src"
for file in tactics.mjs dailyChallenge.mjs fixedTVCatalog.mjs tvAssetHashes.mjs; do cp "$SRC/prototype/convergence/src/$file" "$SRC/api-rules/src/"; done
printf 'FROM convergence-payments-api:presence-20261022\nCOPY src/ /app/src/\n' > "$SRC/api-rules/Dockerfile"
docker build --network none -t "convergence-payments-api:tv-contract-${REV:0:12}" "$SRC/api-rules"
docker run --rm --network none "convergence-payments-api:tv-contract-${REV:0:12}" node --input-type=module -e "import {createDailyPlan,computeDailyScore} from './src/dailyChallenge.mjs';const p=createDailyPlan('2026-10-23');if(p.version!==4)throw Error('Wrong rules');console.log(JSON.stringify(computeDailyScore('2026-10-23',p.proof.winningPath)));"
sha256sum "$SRC/_tv_public/assets/accountPortal-"*.js
rm "/tmp/tv-contract-$REV.patch"
printf 'STAGED_SOURCE=%s\n' "$SRC"
REMOTE
