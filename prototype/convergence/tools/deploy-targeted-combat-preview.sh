#!/usr/bin/env bash
# Exact-tree deployment through existing Docker preview, without GitHub Actions.
# Export with native Git: git diff --binary 1786bbad663b432ce12b79c9454d2a4ba47ce837 HEAD
# Arguments: commit SHA, WSL patch path, git rev-parse HEAD^{tree}.
set -euo pipefail
REV=${1:?commit SHA required}
PATCH=${2:?patch path required}
TREE=${3:?tree SHA required}
[[ "$REV" =~ ^[0-9a-f]{40}$ && "$TREE" =~ ^[0-9a-f]{40}$ ]]
KEY=/home/olga/.ssh/olga_vps_worker
HOST=olga@72.61.167.161
scp -i "$KEY" -o IdentitiesOnly=yes -o BatchMode=yes "$PATCH" "$HOST:/tmp/convergence-targeted-combat-$REV.patch"
ssh -i "$KEY" -o IdentitiesOnly=yes -o BatchMode=yes "$HOST" bash -s -- "$REV" "$TREE" <<'REMOTE'
set -euo pipefail
REV=$1
TREE=$2
SRC=/home/olga/convergence-targeted-combat-src-${REV:0:12}-tree
PARENT=/home/olga/convergence-tv-choice-balance-src-20261021
WEB=/home/olga/convergence-heroes-20261021/public/combat-cible-20261022
test ! -e "$SRC"
test ! -e "$WEB"
git clone --shared --no-checkout "$PARENT" "$SRC"
git -C "$SRC" checkout --detach 1786bbad663b432ce12b79c9454d2a4ba47ce837
git -C "$SRC" apply --index "/tmp/convergence-targeted-combat-$REV.patch"
# Missing history on the VPS cannot hide a missing or altered source file.
test "$(git -C "$SRC" write-tree)" = "$TREE"
cp -a "$PARENT/prototype/convergence/node_modules" "$SRC/prototype/convergence/node_modules"
docker run --rm --network none --user "$(id -u):$(id -g)" --memory 768m --cpus 1.5 \
 -v "$SRC:/work" -w /work/prototype/convergence \
 -e VITE_PLAYER_PREVIEW=1 -e VITE_PARIS_PREVIEW=1 node:24-alpine \
 npm run build -- --base /combat-cible-20261022/ --outDir /work/_targeted_combat_preview
mkdir -p "$WEB"
cp -a "$SRC/_targeted_combat_preview/." "$WEB/"
printf '%s\n' "$REV" > "$WEB/revision.txt"
printf '%s\n' "$TREE" > "$WEB/source-tree.txt"
curl --fail --silent --show-error https://heros-convergence.72-61-167-161.sslip.io/combat-cible-20261022/revision.txt
rm "/tmp/convergence-targeted-combat-$REV.patch"
REMOTE
