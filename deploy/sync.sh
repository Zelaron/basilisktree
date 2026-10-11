#!/usr/bin/env bash
# Runs every minute from cron on the web server. GitHub Actions rebuilds the "live" branch on
# every merge to main; this publishes that branch into the web root whenever it has changed.
# Installed at /var/www/techtree.earth/bin/sync.sh; crontab line:
#   * * * * * flock -n /tmp/techtree-sync.lock /var/www/techtree.earth/bin/sync.sh >> /var/www/techtree.earth/sync.log 2>&1
set -euo pipefail

REPO="https://github.com/Zelaron/techtree.git"
BASE="/var/www/techtree.earth"
CHECKOUT="$BASE/live"
ROOT="$BASE/public_html"

changed=0
if [ ! -d "$CHECKOUT/.git" ]; then
  git clone --quiet --branch live --single-branch "$REPO" "$CHECKOUT"
  changed=1
else
  git -C "$CHECKOUT" fetch --quiet origin live
  if [ "$(git -C "$CHECKOUT" rev-parse HEAD)" != "$(git -C "$CHECKOUT" rev-parse FETCH_HEAD)" ]; then
    git -C "$CHECKOUT" reset --quiet --hard FETCH_HEAD
    changed=1
  fi
fi

if [ "$changed" = 1 ] || [ ! -f "$ROOT/index.html" ]; then
  rsync -a --delete --exclude .git "$CHECKOUT/" "$ROOT/"
  echo "$(date -Is) published $(git -C "$CHECKOUT" rev-parse --short HEAD)"
fi
