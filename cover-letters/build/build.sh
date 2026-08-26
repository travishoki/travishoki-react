#!/bin/bash
# Build one cover letter PDF.
#
#   bash build/build.sh 2026-08-26-class-dojo
#   bash build/build.sh                        # builds every letter folder
#
# Each letter folder holds its own content.js; the renderer here is shared.
set -e
cd "$(dirname "$0")"
ROOT="$(cd .. && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

build_one() {
	local dir="$1"
	[ -f "$dir/content.js" ] || { echo "error: no content.js in $dir" >&2; return 1; }
	local slug base tmp out
	slug="$(node -p "require('$dir/content.js').slug")"
	base="cover-letter-${slug}"
	tmp="$(mktemp -d)"
	out="$dir/dist"
	mkdir -p "$out"

	node build-html.js "$dir/content.js" "$tmp/$base.html"
	"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
		--print-to-pdf="$out/$base.pdf" "file://$tmp/$base.html" 2>/dev/null

	if command -v exiftool >/dev/null 2>&1; then
		exiftool -overwrite_original -q \
			-Title="Travis Hoki - Cover Letter - $(node -p "require('$dir/content.js').company")" \
			-Author="Travis Hoki" "$out/$base.pdf"
	fi
	rm -rf "$tmp"
	echo "  $(basename "$dir")/dist/$base.pdf"
}

echo "Built:"
if [ -n "$1" ]; then
	build_one "$ROOT/${1%/}"
else
	for d in "$ROOT"/*/; do
		[ "$(basename "$d")" = "build" ] && continue
		[ -f "$d/content.js" ] && build_one "${d%/}"
	done
fi
