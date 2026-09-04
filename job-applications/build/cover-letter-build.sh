#!/bin/bash
# Build the current cover letter, and merge it with the tailored resume for
# the same application if one is already sitting in the same dated folder.
#
#   bash build/cover-letter-build.sh                    -> writes ../<today>/travis-hoki-cover-letter-<today>.pdf
#   NAME=2026-09-01-Acme bash build/cover-letter-build.sh -> writes ../2026-09-01-Acme/travis-hoki-cover-letter-2026-09-01-Acme.pdf
#
# NAME should match the NAME used for the resume build (build.sh) for this
# same application, so both land in the same dated folder alongside each
# other. Reads ../content.js.
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

NAME="${NAME:-$(date +%F)}"
OUT_DIR="$ROOT/$NAME"
BASE="travis-hoki-cover-letter-${NAME}"
mkdir -p "$OUT_DIR"

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

node cover-letter-build-html.js "$ROOT/content.js" "$TMP/$BASE.html"
"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
	--print-to-pdf="$OUT_DIR/$BASE.pdf" "file://$TMP/$BASE.html" 2>/dev/null

if command -v exiftool >/dev/null 2>&1; then
	exiftool -overwrite_original -q \
		-Title="Travis Hoki - Cover Letter - $COMPANY" \
		-Author="Travis Hoki" "$OUT_DIR/$BASE.pdf"
fi

echo "Built $NAME/$BASE.pdf  ($COMPANY)"

# If exactly one resume PDF already sits in the same folder, merge cover
# letter + resume into one combined application PDF automatically.
shopt -s nullglob
RESUME_PDFS=("$OUT_DIR"/travis-hoki-resume-*.pdf)
shopt -u nullglob
if [ "${#RESUME_PDFS[@]}" -eq 1 ]; then
	APP="$OUT_DIR/travis-hoki-application-${NAME}.pdf"
	node merge-pdf.js "$OUT_DIR/$BASE.pdf" "${RESUME_PDFS[0]}" "$APP"
	echo "Built $NAME/$(basename "$APP")"
elif [ "${#RESUME_PDFS[@]}" -eq 0 ]; then
	echo "note: no resume PDF found in $NAME/ yet, skipped the combined application PDF." >&2
else
	echo "note: multiple resume PDFs found in $NAME/, skipped the combined application PDF (ambiguous which to use)." >&2
fi
