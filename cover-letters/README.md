# Cover Letters

One folder per letter, named `YYYY-MM-DD-company`. Each holds its own
`content.js`; the renderer in `build/` is shared.

```
cover-letters/
├── build/
│   ├── _template.content.js   starter, copied by new-letter.sh
│   ├── build-html.js          shared renderer
│   ├── build.sh
│   └── new-letter.sh          scaffolds a letter folder
└── 2026-08-26-class-dojo/
    ├── job-description.md     the posting this was written against
    ├── content.js             the letter
    └── dist/
        └── cover-letter-class-dojo.pdf   (generated, untracked)
```

Identity (name, title, contact) comes from `shared/profile.js`, which the
resume uses too. Change it once and both rebuild correctly.

## Writing a new one

```bash
bash cover-letters/build/new-letter.sh acme "Acme Corp"
```

That creates `<today>-acme/` with a `content.js` and an empty
`job-description.md`. Paste the posting into the latter, then either edit
`content.js` by hand or ask Claude:

> Here's the job description for <company>, in
> `cover-letters/<date>-<slug>/job-description.md`. Draft the cover letter.

Claude reads the posting, fills in `content.js` against the actual resume
content, builds it, and checks the PDF still parses cleanly. Then:

```bash
bash cover-letters/build/build.sh 2026-09-01-acme
```

Run `bash cover-letters/build/build.sh` with no argument to rebuild every letter.

The output filename comes from `slug` in `content.js`.

## Notes

- Output lands in each letter's `dist/`, covered by the repo's existing
  `dist/` ignore. `content.js` is the source of truth.
- Letters are ATS-friendly by construction: single column, no images, real
  text layer, Arial, and a header matching the resume.
- The header contact block is kept in sync with `resume/build/resume.content.js`
  by hand. If one changes, change both.
