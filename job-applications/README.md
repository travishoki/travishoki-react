# Job Applications

Resume and cover letter, generated from content files so the `.docx` and
`.pdf` can never drift apart, packaged one dated folder per application.

## Layout

```
travishoki-react/
└── job-applications/
    ├── build/                          tooling + content (the source of truth)
    │   ├── resume.content.js           master resume copy
    │   ├── resume.content.<company>.js tailored resume copy for one application
    │   ├── build-docx.js               resume content -> .docx
    │   ├── build-html.js               resume content -> print-ready .html
    │   ├── build.sh                    build the resume .docx + .pdf
    │   ├── sync-public.sh              newest plain-dated resume -> site public/ dir
    │   ├── cover-letter-build-html.js  cover letter content -> print-ready .html
    │   ├── cover-letter-build.sh       build the cover letter .pdf (+ combined PDF)
    │   ├── merge-pdf.js                concatenate cover letter + resume into one PDF
    │   ├── job-description.js          parses job-description.md
    │   ├── reset.sh                    clear the desk for the next cover letter
    │   ├── _template.content.js        starter cover-letter content
    │   └── _job-description.md         the blank job-description.md form
    ├── shared/
    │   └── profile.js                  identity (name, contact) shared by both
    ├── content.js                      the working cover letter    (gitignored)
    ├── job-description.md              paste the posting here      (gitignored)
    ├── 2026-06-25/                     plain dated resume, history, never edited in place
    └── 2026-08-27-Acme/                one job application: resume + cover letter + combined
        ├── travis-hoki-resume-2026-08-27-Acme.docx
        ├── travis-hoki-resume-2026-08-27-Acme.pdf
        ├── travis-hoki-cover-letter-2026-08-27-Acme.pdf
        └── travis-hoki-application-2026-08-27-Acme.pdf   (cover letter + resume, one PDF)
```

## Setup

The builders depend on `docx` (resume) and `pdf-lib` (merging), and
`node_modules/` is not tracked, so install once per checkout:

```bash
npm install --prefix job-applications/build
```

Nothing else in the repo depends on this. It is separate from the app's own
`package.json`, and the app's tooling never scans `job-applications/`.

## Revising the master resume

Edit `build/resume.content.js`, then:

```bash
bash build/build.sh
```

That writes `travis-hoki-resume-<today>.{docx,pdf}` into `../<today>/`,
creating the folder if needed. Older dated folders are history and are
never modified. Build a specific date with `DATE=2026-09-01 bash build/build.sh`.

## Building one job application (resume + cover letter)

1. **Tailor the resume.** Copy `build/resume.content.js` to
   `build/resume.content.<company>.js` (never edit the master), and make
   minimal, honest edits, usually just the summary, sometimes a skills line
   or a project reorder. Re-read the current `resume.content.js` fresh
   before branching; don't reuse an old copy, since the master may have
   been edited directly since the last tailored file was made.

2. **Build the resume** with `NAME` (prefixed with the date, so it still
   sorts chronologically) and `CONTENT_FILE` pointing at the tailored module:

   ```bash
   NAME=2026-09-01-Acme CONTENT_FILE=./resume.content.acme.js bash build/build.sh
   ```

3. **Write the cover letter.** Fill in `job-description.md` (`# Company
   Name`, `## Role`, `## Hiring Manager`, `## Posting`, `reset.sh` drops a
   blank copy) and write `content.js` (`intro`, `sections` of
   `{heading, body}`, `closing`) against the real resume content.

4. **Build the cover letter with the same `NAME`** used for the resume, so
   both land in the same folder:

   ```bash
   NAME=2026-09-01-Acme bash build/cover-letter-build.sh
   ```

   This also **automatically produces the combined application PDF**
   (`travis-hoki-application-<NAME>.pdf`, cover letter first, then resume)
   whenever exactly one resume PDF is already sitting in that folder. Always
   deliver all three files (resume, cover letter, combined) for a job
   application, most application forms only accept one upload and have no
   separate cover-letter field.

Both the cover letter and the combined PDF are named `travis-hoki-cover-letter-<NAME>.pdf`
and `travis-hoki-application-<NAME>.pdf`, the same `NAME` as the resume, so
all three files in a folder sort and pair together at a glance. The company
slug parsed from `job-description.md` is only used for the PDF's internal
title metadata and the `${company}` interpolation in section headings, not
for filenames.

## Publishing the resume to the site

```bash
bash build/sync-public.sh
```

Copies the **newest plain-dated** folder's resume files into the site's
`public/` dir as `travis-hoki-resume.pdf` and `travis-hoki-resume.docx`. The
names are deliberately undated so the CDN URL never changes. Company-tailored
folders (`YYYY-MM-DD-CompanyName`) are excluded on purpose, so a one-off
tailored resume never gets synced to the public site by accident.

`job-applications/` lives inside the `travishoki-react` repo, so `public/` is
found automatically. Override with `SITE=/other/checkout` if needed.

`yarn build` runs this automatically, before Vite, so `public/` and `dist/`
always ship the newest resume. Run it on its own with `yarn resume:sync`.

## Notes

- The `travishoki-react` repo tracks the `.docx` and `.pdf` (and any cover
  letter/combined PDFs) in every dated folder, so each sent application
  stays recoverable.
- The PDF is produced by headless Chrome printing the generated HTML.
- Target resume length is 2 pages; the layout is tuned so it just fits.
  Adding ~4 lines of content tips it to 3.
- `cover-letter-build-html.js` supports a section's `body` as either a
  string or an array of paragraphs, for a second paragraph (e.g. a
  location/logistics note) without paying for a new heading's vertical space.
- Identity (name, title, contact) comes from `shared/profile.js`, shared by
  the resume and every cover letter. Change it once and both rebuild correctly.
- Section headings in the cover letter interpolate `company`, so "Why I
  think X is awesome!" fills itself in from `job-description.md`.
- Letters are ATS-friendly by construction: single column, no images, real
  text layer, Arial, and a header matching the resume.
- `job-applications/` (this whole directory) is in `.eslintignore`: it's
  standalone Node build tooling, not application source, and the docx
  builders' option objects read better in semantic order than the app's
  `sort-keys` convention would allow.
