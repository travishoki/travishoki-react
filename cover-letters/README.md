# Cover Letters

One working letter at a time. Paste a job posting, have Claude draft it,
build the PDF.

```
cover-letters/
├── build/
│   ├── _template.content.js   starter content
│   ├── build-html.js          renderer
│   ├── build.sh               content.js -> dist/<slug>-cover-letter.pdf
│   ├── job-description.js     parses company and role out of the posting
│   └── reset.sh               clear the desk for the next application
├── job-description.md         paste the posting here      (gitignored)
├── content.js                 the letter                  (gitignored)
└── dist/
    └── class-dojo-cover-letter.pdf                        (gitignored)
```

Only `build/` and this README are versioned. Each letter is a one-off for a
single application.

## Writing one

```bash
bash cover-letters/build/reset.sh
```

Paste the posting into `job-description.md`, then ask Claude:

> Draft the cover letter from `cover-letters/job-description.md`.

Claude reads the posting, writes `content.js` against the real resume
content in `resume/build/resume.content.js`, builds it, and confirms the
PDF still parses cleanly for ATS.

```bash
bash cover-letters/build/build.sh
```

The output filename comes from the company name in `job-description.md`.

## Notes

- Identity (name, title, contact) comes from `shared/profile.js`, which the
  resume uses too. Change it once and both rebuild correctly.
- Company and role are read from `job-description.md`: the `# Company Name`
  and `## Role` headings. They are never typed into `content.js`, and the
  output filename follows from the company (ClassDojo -> class-dojo).
- Section headings interpolate `company`, so "Why I think X is awesome!"
  fills itself in.
- Letters are ATS-friendly by construction: single column, no images, real
  text layer, Arial, and a header matching the resume.
- Finished PDFs accumulate in `dist/`. Move any you want to keep long-term
  somewhere outside the repo.
