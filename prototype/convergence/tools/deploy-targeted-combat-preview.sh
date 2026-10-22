#!/usr/bin/env bash
# Run inside WSL from this independent Git worktree. No Actions or public routes.
set -euo pipefail
# Prepare the bundle with native Git (Windows worktree metadata is not readable
# by WSL Git): git bundle create targeted-combat.bundle HEAD ^1786bbad663b432ce12b79c9454d2a4ba47ce837
# Arguments: exact commit SHA and WSL-readable path to that incremental bundle.
REV=${1:?exact commit SHA required}
BUNDLE=${2:?bundle path required}
[[ "$REV" =~ ^[0-9a-f]{40}$ ]]
KEY=/home/olga/.ssh/olga_vps_worker
HOST=olga@72.61.167.161
scp -i "$KEY" -o IdentitiesOnly=yes -o BatchMode=yes "$BUNDLE" "$HOST:/tmp/convergence-targeted-combat-$REV.bundle"
ssh -i "$KEY" -o IdentitiesOnly=yes -o BatchMode=yes "$HOST" bash -s -- "$REV" <<'REMOTE'
set -euo pipefail
REV=$1
SRC=/home/olga/convergence-targeted-combat-src-${REV:0:12}
PARENT=/home/olga/convergence-tv-choice-balance-src-20261021
WEB=/home/olga/convergence-heroes-20261021/public/combat-cible-20261022
# Existing previews are preserved; a deployment never overwrites an existing URL.
test ! -e "$SRC"
test ! -e "$WEB"
git clone --shared --no-checkout "$PARENT" "$SRC"
git -C "$SRC" fetch "/tmp/convergence-targeted-combat-$REV.bundle" HEAD
git -C "$SRC" checkout --detach FETCH_HEAD
test "$(git -C "$SRC" rev-parse HEAD)" = "$REV"
cp -a "$PARENT/prototype/convergence/node_modules" "$SRC/prototype/convergence/node_modules"
docker run --rm --network none --user "$(id -u):$(id -g)" --memory 768m --cpus 1.5 \
 -v "$SRC:/work" -w /work/prototype/convergence \
 -e VITE_PLAYER_PREVIEW=1 -e VITE_PARIS_PREVIEW=1 node:24-alpine \
 npm run build -- --base /combat-cible-20261022/ --outDir /work/_targeted_combat_preview
mkdir -p "$WEB"
cp -a "$SRC/_targeted_combat_preview/." "$WEB/"
printf '%s\n' "$REV" > "$WEB/revision.txt"
curl --fail --silent --show-error https://heros-convergence.72-61-167-161.sslip.io/combat-cible-20261022/revision.txt
rm "/tmp/convergence-targeted-combat-$REV.bundle"
REMOTE
