#!/bin/bash
# Build the cover letter PDF from cover-letter.content.js
# Output: ../dist/cover-letter-<slug>.pdf
set -e
cd "$(dirname "$0")"

OUT_DIR="$(cd ../dist && pwd)"
SLUG="$(node -p "require('./cover-letter.content.js').slug")"
BASE="cover-letter-${SLUG}"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

node build-html.js "$TMP/$BASE.html"

"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
	--print-to-pdf="$OUT_DIR/$BASE.pdf" "file://$TMP/$BASE.html" 2>/dev/null

if command -v exiftool >/dev/null 2>&1; then
	COMPANY="$(node -p "require('./cover-letter.content.js').company")"
	exiftool -overwrite_original -q \
		-Title="Travis Hoki - Cover Letter - $COMPANY" \
		-Author="Travis Hoki" "$OUT_DIR/$BASE.pdf"
fi

echo "Done: $OUT_DIR/$BASE.pdf"
