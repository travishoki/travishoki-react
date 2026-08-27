# ATS Resume

Both the `.docx` and `.pdf` are generated from a single source file, so they can
never drift apart.

## Layout

```
travishoki-react/
└── resume/
├── build/                     tooling + content (the source of truth)
│   ├── resume.content.js      all resume copy lives here
│   ├── build-docx.js          content -> .docx
│   ├── build-html.js          content -> print-ready .html
│   ├── build.sh              build both deliverables
│   └── sync-public.sh        newest build -> site public/ dir
├── 2026-06-25/                history, never edited in place
├── 2026-08-25/                each revision gets its own dated folder
└── 2026-08-27-Acme/           company-tailored one-offs: date + company name
```

## Setup

The builders depend on the `docx` package, and `node_modules/` is not tracked,
so install once per checkout:

```bash
npm install --prefix resume/build
```

Nothing else in the repo depends on this. It is separate from the app's own
`package.json`, and the app's tooling never scans `resume/`.

## Revising

Edit `build/resume.content.js`, then:

```bash
bash build/build.sh
```

That writes `travis-hoki-resume-<today>.{docx,pdf}` into `../<today>/`, creating
the folder if needed. Older dated folders are history and are never modified.
Build a specific date with `DATE=2026-09-01 bash build/build.sh`.

For a resume tailored to one job application, use `NAME` (which overrides
`DATE`) together with `CONTENT_FILE` pointing at a per-company content module
that overrides fields from `resume.content.js`, e.g. `resume.content.acme.js`:

```bash
NAME=2026-08-27-Acme CONTENT_FILE=./resume.content.acme.js bash build/build.sh
```

Prefix `NAME` with the date (`YYYY-MM-DD-CompanyName`) so tailored builds
still sort chronologically alongside the plain dated folders. `sync-public.sh`
only matches plain `YYYY-MM-DD`/`YYYY-MM` folders, so a tailored build never
gets picked up as the site's public resume.

The intermediate `.html` is written to a temp dir, so dated folders hold only
the two deliverables.

## Publishing to the site

```bash
bash build/sync-public.sh
```

Copies the **newest** dated folder's files into the site's `public/` dir as
`travis-hoki-resume.pdf` and `travis-hoki-resume.docx`. The names are
deliberately undated so the CDN URL never changes. Older versions are ignored.

`resume/` lives inside the `travishoki-react` repo, so `public/` is found
automatically. Override with `SITE=/other/checkout` if needed.

`yarn build` runs this automatically, before Vite, so `public/` and `dist/`
always ship the newest resume. Run it on its own with `yarn resume:sync`.

## Notes

- The `travishoki-react` repo tracks the `.docx` and `.pdf` in every dated
  folder, so each sent version stays recoverable.
- The PDF is produced by headless Chrome printing the generated HTML.
- Target length is 2 pages; the layout is tuned so it just fits.
