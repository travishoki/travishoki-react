#!/bin/bash
# Start a new letter: blank the job description and reset content.js from the
# template. Previous PDFs in dist/ are left alone.
set -e
cd "$(dirname "$0")"
ROOT="$(cd .. && pwd)"

cp _template.content.js "$ROOT/content.js"
cat > "$ROOT/job-description.md" <<'EOF'
# Company Name

## Hiring Manager

## Role

## Posting

EOF
echo "Reset content.js and job-description.md. Paste the posting, then ask Claude to draft it."
