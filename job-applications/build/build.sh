#!/bin/bash
# Regenerate the ATS resume (.docx + .pdf) from resume.content.js
#
#   bash build.sh                                    -> writes ../master/<today>/travis-hoki-resume-<today>.{docx,pdf}
#   DATE=2026-09-01 bash build.sh                     -> writes ../2026-09-01/...
#   NAME=2026-09-01-Acme CONTENT_FILE=../applications/2026-09-01-Acme/resume.content.acme.js bash build.sh
#                                                      -> writes ../applications/2026-09-01-Acme/travis-hoki-resume-2026-09-01-Acme.{docx,pdf}
#                                                         from a tailored content file instead of the master
#
# NAME overrides DATE for the output folder/filename (for company-tailored
# one-off builds; prefix it with the date so it still sorts chronologically).
# A NAME that is just a date (YYYY-MM or YYYY-MM-DD) is a master version and
# is written to ../master/<NAME>/, which is versioned. Any NAME with a company suffix
# is written to ../applications/<NAME>/, which is local only (gitignored).
# CONTENT_FILE overrides which content module the builders read from, relative
# to this build/ folder; the master resume.content.js is left untouched.
#
# The intermediate .html is built in a temp dir so only the two deliverables
# land in the output directory.
set -e
cd "$(dirname "$0")"

NAME="${NAME:-${DATE:-$(date +%F)}}"
if [[ "$NAME" =~ ^[0-9]{4}-[0-9]{2}(-[0-9]{2})?$ ]]; then
	OUT_DIR="$(cd .. && pwd)/master/$NAME"
else
	OUT_DIR="$(cd .. && pwd)/applications/$NAME"
fi
BASE="travis-hoki-resume-${NAME}"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
CONTENT_FILE="${CONTENT_FILE:-./resume.content.js}"

mkdir -p "$OUT_DIR"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

CONTENT_FILE="$CONTENT_FILE" node build-docx.js "$OUT_DIR/$BASE.docx"
CONTENT_FILE="$CONTENT_FILE" node build-html.js "$TMP/$BASE.html"

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
