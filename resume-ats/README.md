# ATS Resume

Both the `.docx` and `.pdf` are generated from a single source file, so they can
never drift apart.

## Layout

```
travishoki-react/
└── resume-ats/
├── build/                     tooling + content (the source of truth)
│   ├── resume.content.js      all resume copy lives here
│   ├── build-docx.js          content -> .docx
│   ├── build-html.js          content -> print-ready .html
│   ├── build.sh              build both deliverables
│   └── sync-public.sh        newest build -> site public/ dir
├── 2026-06/                   history, never edited in place
└── 2026-08-25/                each revision gets its own dated folder
```

## Setup

The builders depend on the `docx` package, and `node_modules/` is not tracked,
so install once per checkout:

```bash
npm install --prefix resume-ats/build
```

Nothing else in the repo depends on this. It is separate from the app's own
`package.json`, and the app's tooling never scans `resume-ats/`.

## Revising

Edit `build/resume.content.js`, then:

```bash
bash build/build.sh
```

That writes `travis-hoki-resume-<today>.{docx,pdf}` into `../<today>/`, creating
the folder if needed. Older dated folders are history and are never modified.
Build a specific date with `DATE=2026-09-01 bash build/build.sh`.

The intermediate `.html` is written to a temp dir, so dated folders hold only
the two deliverables.

## Publishing to the site

```bash
bash build/sync-public.sh
```

Copies the **newest** dated folder's files into the site's `public/` dir as
`travis-hoki-resume.pdf` and `travis-hoki-resume.docx`. The names are
deliberately undated so the CDN URL never changes. Older versions are ignored.

`resume-ats/` lives inside the `travishoki-react` repo, so `public/` is found
automatically. Override with `SITE=/other/checkout` if needed.

## Notes

- The `travishoki-react` repo tracks the `.docx` and `.pdf` in every dated
  folder, so each sent version stays recoverable.
- The PDF is produced by headless Chrome printing the generated HTML.
- Target length is 2 pages; the layout is tuned so it just fits.
