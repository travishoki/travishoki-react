#!/bin/bash
# Scaffold a new cover letter folder.
#
#   bash cover-letters/build/new-letter.sh class-dojo "ClassDojo"
#   bash cover-letters/build/new-letter.sh acme "Acme" 2026-09-01
#
# Creates <date>-<slug>/ with content.js from the template and an empty
# job-description.md to paste the posting into.
set -e
cd "$(dirname "$0")"
ROOT="$(cd .. && pwd)"

SLUG="$1"; COMPANY="$2"; DATE="${3:-$(date +%F)}"
[ -n "$SLUG" ] && [ -n "$COMPANY" ] || { echo "usage: new-letter.sh <slug> <company> [YYYY-MM-DD]" >&2; exit 1; }

DIR="$ROOT/$DATE-$SLUG"
[ -e "$DIR" ] && { echo "error: $DIR already exists" >&2; exit 1; }

mkdir -p "$DIR"
sed -e "s/slug: 'company-name'/slug: '$SLUG'/" \
    -e "s/company: 'Company Name'/company: '$COMPANY'/" \
    _template.content.js > "$DIR/content.js"

cat > "$DIR/job-description.md" <<EOF
# $COMPANY

Paste the job posting below. Keeping it here records what the letter was
written against, which is useful when preparing for the interview.

## Role

## Posting

EOF

echo "Created $DATE-$SLUG/"
echo "  content.js           edit this, or paste the posting and ask Claude to draft it"
echo "  job-description.md   paste the posting here"
echo
echo "Then: bash cover-letters/build/build.sh $DATE-$SLUG"
