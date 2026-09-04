// Renders the cover letter to print-ready HTML. Styling matches the ATS resume.
const fs = require('fs');
const path = require('path');
// Content path comes from argv so one renderer serves every letter.
const C = require(path.resolve(process.argv[2]));

const esc = (s) =>
	String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Travis Hoki  –  Cover Letter  –  ${esc(C.company)}</title>
<style>
	@page { size: Letter; margin: 0.75in; }
	* { box-sizing: border-box; }
	body {
		font-family: Arial, Helvetica, sans-serif;
		font-size: 10.5pt;
		line-height: 1.42;
		color: #000;
		margin: 0;
	}
	header { text-align: center; }
	h1 { font-size: 20pt; font-weight: 700; color: #1f4e79; margin: 0 0 1pt; }
	.role { font-size: 12pt; color: #666; margin: 0 0 3pt; }
	.contact { font-size: 9pt; margin: 0 0 1pt; }
	header .contact:last-of-type { margin-bottom: 14pt; } /* letter needs more room than the resume's 8pt */
	.addressed {
		border-top: .5pt solid #1f4e79;
		border-bottom: .5pt solid #1f4e79;
		padding: 5pt 0;
		margin: 0 0 12pt;
		font-weight: 700;
	}
	.addressed .co { font-weight: 400; color: #666; }
	h2 {
		font-size: 11pt; font-weight: 700; color: #1f4e79;
		margin: 13pt 0 3pt;
	}
	p { margin: 0 0 8pt; }
	.sign { margin-top: 14pt; }
	.sign .name { font-weight: 700; }
	a { color: #1f4e79; text-decoration: none; }
</style>
</head>
<body>
<header>
	<h1>${esc(C.name)}</h1>
	<p class="role">${esc(C.title)}</p>
	${C.contact.map((parts) => `<p class="contact">${parts.map((x) => (x.href ? `<a href="${esc(x.href)}">${esc(x.text)}</a>` : esc(x.text))).join('  |  ')}</p>`).join('\n\t')}
</header>

<p class="addressed">${esc(C.role)}<span class="co">  |  ${esc(C.company)}</span></p>

<p>${esc(C.salutation)}</p>
<p>${esc(C.intro)}</p>

${C.sections.map((s) => `<h2>${esc(s.heading)}</h2>\n${(Array.isArray(s.body) ? s.body : [s.body]).map((p) => `<p>${esc(p)}</p>`).join('\n')}`).join('\n')}

<p class="sign">${esc(C.closing)}<br><span class="name">Travis Hoki</span></p>
</body>
</html>
`;

const out = path.resolve(process.argv[3]);
fs.writeFileSync(out, html);

