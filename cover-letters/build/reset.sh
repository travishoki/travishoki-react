#!/bin/bash
# Start a new letter: blank the job description and reset content.js from the
# template. Previous PDFs in dist/ are left alone.
set -e
cd "$(dirname "$0")"
ROOT="$(cd .. && pwd)"

cp _template.content.js "$ROOT/content.js"
cp _job-description.md "$ROOT/job-description.md"
echo "Reset content.js and job-description.md. Paste the posting, then ask Claude to draft it."
