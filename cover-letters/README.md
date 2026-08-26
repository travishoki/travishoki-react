# Cover Letters

One folder per letter, named `YYYY-MM-DD-company`. Each holds its own
`content.js`; the renderer in `build/` is shared.

```
cover-letters/
├── build/
│   ├── _template.content.js   starter to copy
│   ├── build-html.js          shared renderer
│   └── build.sh
└── 2026-08-26-class-dojo/
    ├── content.js             the letter
    └── dist/
        └── cover-letter-class-dojo.pdf   (generated, untracked)
```

## Writing a new one

```bash
mkdir cover-letters/2026-09-01-acme
cp cover-letters/build/_template.content.js cover-letters/2026-09-01-acme/content.js
# edit content.js, then:
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
