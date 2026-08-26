#!/bin/bash
# Build the current cover letter.
#
#   bash cover-letters/build/build.sh
#
# Reads ../content.js and writes ../dist/travis-hoki-cover-letter-<slug>.pdf
set -e
cd "$(dirname "$0")"
ROOT="$(cd .. && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

[ -f "$ROOT/content.js" ] || { echo "error: no content.js in $ROOT" >&2; exit 1; }

if ! SLUG="$(node -p "require('$ROOT/content.js').slug" 2>/dev/null)" || [ -z "$SLUG" ]; then
	echo "error: job-description.md is not filled in yet." >&2
	echo "       Put the company under '# Company Name' and the title under '## Role'." >&2
	exit 1
fi
COMPANY="$(node -p "require('$ROOT/content.js').company")"
BASE="travis-hoki-cover-letter-${SLUG}"
mkdir -p "$ROOT/dist"

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

node build-html.js "$ROOT/content.js" "$TMP/$BASE.html"
"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
	--print-to-pdf="$ROOT/dist/$BASE.pdf" "file://$TMP/$BASE.html" 2>/dev/null

if command -v exiftool >/dev/null 2>&1; then
	exiftool -overwrite_original -q \
		-Title="Travis Hoki - Cover Letter - $COMPANY" \
		-Author="Travis Hoki" "$ROOT/dist/$BASE.pdf"
fi

echo "Built dist/$BASE.pdf  ($COMPANY)"
