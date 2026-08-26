#!/bin/bash
# Regenerate the ATS resume (.docx + .pdf) from resume.content.js
#
#   bash build.sh                 -> writes ../<today>/travis-hoki-resume-<today>.{docx,pdf}
#   DATE=2026-09-01 bash build.sh -> writes ../2026-09-01/...
#
# The intermediate .html is built in a temp dir so only the two deliverables
# land in the dated output directory.
set -e
cd "$(dirname "$0")"

DATE="${DATE:-$(date +%F)}"
OUT_DIR="$(cd .. && pwd)/$DATE"
BASE="travis-hoki-resume-${DATE}"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

mkdir -p "$OUT_DIR"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

node build-docx.js "$OUT_DIR/$BASE.docx"
node build-html.js "$TMP/$BASE.html"

"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
	--print-to-pdf="$OUT_DIR/$BASE.pdf" \
	"file://$TMP/$BASE.html" 2>/dev/null

echo "Done:"
ls -1 "$OUT_DIR/$BASE".{docx,pdf}
