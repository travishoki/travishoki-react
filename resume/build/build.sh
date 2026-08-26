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

# Chrome leaves /Title and /Author empty. Some ATS and every file manager
# read them, so stamp them. /Creator and /Producer are baked in by Chrome
# and cannot be overwritten this way; they are cosmetic and no ATS uses them.
if command -v exiftool >/dev/null 2>&1; then
	exiftool -overwrite_original -q \
		-Title="Travis Hoki - Senior Software Engineer Resume" \
		-Author="Travis Hoki" \
		"$OUT_DIR/$BASE.pdf"
fi

echo "Done:"
ls -1 "$OUT_DIR/$BASE".{docx,pdf}
