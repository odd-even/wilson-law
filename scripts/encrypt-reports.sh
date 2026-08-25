#!/usr/bin/env bash
# Encrypt shareable HTML for GitHub Pages (StatiCrypt).
# Usage: STATICRYPT_PASSWORD='…' ./scripts/encrypt-reports.sh
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ -z "${STATICRYPT_PASSWORD:-}" ]]; then
  echo "Set STATICRYPT_PASSWORD before running." >&2
  exit 1
fi

mkdir -p reports/src reports/encrypted
# Keep editable plaintext in reports/src/ — encrypt from there.
npx --yes staticrypt \
  reports/src/2026-08-digital-presence.html \
  reports/src/dashboard.html \
  reports/src/index.html \
  -p "$STATICRYPT_PASSWORD" \
  -d reports/encrypted \
  --remember 30 \
  --short \
  --template reports/gate-template.html \
  --template-title "Wilson Law · August Report" \
  --template-instructions "Password-protected client report. Enter the password from ODD + EVEN to continue." \
  --template-button "Open report" \
  --template-placeholder "Password" \
  --template-remember "Remember on this device" \
  --template-error "Incorrect password" \
  --template-color-primary "#54abe5" \
  --template-color-secondary "#000000"

cp reports/encrypted/2026-08-digital-presence.html reports/2026-08-digital-presence.html
cp reports/encrypted/dashboard.html reports/dashboard.html
cp reports/encrypted/index.html index.html

echo "Encrypted pages written to reports/ and index.html"
