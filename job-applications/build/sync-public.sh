#!/bin/bash
# Copies the NEWEST dated resume into the portfolio site's public/ dir under
# stable, undated filenames so the CDN URL never changes.
#
#   bash sync-public.sh                       # newest dated dir -> default site path
#   SITE=/other/checkout bash sync-public.sh   # override the repo root
#
# Older dated directories are history and are deliberately never synced.
set -e
cd "$(dirname "$0")"

ROOT="$(cd .. && pwd)"
# job-applications/ lives inside the site repo, so public/ is two levels up.
SITE="${SITE:-$(cd ../.. && pwd)}"
PUBLIC="$SITE/public"

[ -d "$PUBLIC" ] || { echo "error: no public dir at $PUBLIC (set SITE=...)" >&2; exit 1; }

# Plain dated dirs are YYYY-MM or YYYY-MM-DD, so lexical sort is chronological.
# Company-tailored dirs (YYYY-MM-DD-CompanyName) are excluded on purpose so a
# one-off tailored resume never gets synced to the public site by accident.
LATEST="$(find "$ROOT" -maxdepth 1 -type d \( -name '[0-9][0-9][0-9][0-9]-[0-9][0-9]' -o -name '[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]' \) | sort | tail -1)"
[ -n "$LATEST" ] || { echo "error: no dated resume directories in $ROOT" >&2; exit 1; }

PDF="$(find "$LATEST" -maxdepth 1 -name 'travis-hoki-resume-*.pdf' | head -1)"
DOCX="$(find "$LATEST" -maxdepth 1 -name 'travis-hoki-resume-*.docx' | head -1)"
[ -n "$PDF" ]  || { echo "error: no .pdf in $LATEST" >&2; exit 1; }
[ -n "$DOCX" ] || { echo "error: no .docx in $LATEST" >&2; exit 1; }

cp "$PDF"  "$PUBLIC/travis-hoki-resume.pdf"
cp "$DOCX" "$PUBLIC/travis-hoki-resume.docx"

echo "Synced from $(basename "$LATEST"):"
echo "  $(basename "$PDF")   ->  public/travis-hoki-resume.pdf"
echo "  $(basename "$DOCX")  ->  public/travis-hoki-resume.docx"
