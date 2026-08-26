// Builds a print-ready HTML mirror of the resume from resume.content.js
// Usage: node build-html.js ../travis-hoki-resume.html
const fs = require('fs');
const path = require('path');
const C = require('./resume.content.js');

// Split a string into [{text}, {text, href}, ...] around any linked phrases.
const segments = (text, links = []) => {
	let parts = [{ text }];
	for (const { phrase, href } of links) {
		const next = [];
		for (const part of parts) {
			const i = part.href ? -1 : part.text.indexOf(phrase);
			if (i < 0) { next.push(part); continue; }
			if (i > 0) next.push({ text: part.text.slice(0, i) });
			next.push({ text: phrase, href });
			const rest = part.text.slice(i + phrase.length);
			if (rest) next.push({ text: rest });
		}
		parts = next;
	}
	return parts;
};

const isUrl = (v) => /^[^\s]+\.[^\s]+$/.test(v);
const rich = (text, links) =>
	segments(text, links)
		.map((s) => (s.href ? `<a href="${esc(s.href)}">${esc(s.text)}</a>` : esc(s.text)))
		.join('');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Travis Hoki  –  Senior Software Engineer Resume</title>
<style>
	@page { size: Letter; margin: 0.5in; }
	* { box-sizing: border-box; }
	body {
		font-family: Arial, Helvetica, sans-serif;
		font-size: 9.5pt;
		line-height: 1.14;
		color: #000;
		margin: 0;
	}
	header { text-align: center; }
	h1 { font-size: 20pt; font-weight: 700; color: #1f4e79; margin: 0 0 1pt; }
	.role { font-size: 12pt; color: #666; margin: 0 0 3pt; }
	.contact { font-size: 9pt; margin: 0 0 1pt; }
	header .contact:last-of-type { margin-bottom: 8pt; }
	h2 {
		font-size: 11pt; font-weight: 700; text-transform: uppercase; color: #1f4e79;
		margin: 8pt 0 3pt; padding-bottom: 1pt; border-bottom: .5pt solid #1f4e79;
	}
	p { margin: 0 0 2pt; }
	ul { margin: 0; padding-left: 10.8pt; }
	li { margin: 0 0 2pt; }
	.jobhead { font-weight: 400; margin: 7pt 0 1pt; }
	.jobhead .title { font-weight: 700; color: #1f4e79; }
	.jobhead .cname { font-style: italic; font-weight: 700; }
	.jobhead .cnote { font-style: italic; color: #666; }
	.jobhead .dates { color: #666; }
	.note { font-style: italic; color: #666; margin: 0 0 2.5pt; }
	.projhead { font-weight: 700; color: #1f4e79; margin: 6pt 0 1pt; }
	.projhead .stackinline { font-weight: 400; font-style: italic; color: #666; }
	.projhead .meta { font-weight: 400; color: #666; }
	.beyond { margin-top: 5pt; }
	a { color: #1f4e79; text-decoration: none; }
	li, p, .jobhead, .projhead { break-inside: avoid; }
	.jobhead, .projhead, h2 { break-after: avoid; }
</style>
</head>
<body>
<header>
	<h1>${esc(C.name)}</h1>
	<p class="role">${esc(C.title)}</p>
	${C.contact.map((parts) => `<p class="contact">${parts.map((p) => p.href ? `<a href="${esc(p.href)}">${esc(p.text)}</a>` : esc(p.text)).join('  |  ')}</p>`).join('\n\t')}
</header>

<h2>Professional Summary</h2>
<p>${esc(C.summary)}</p>

<h2>Skills &amp; Tools</h2>
<ul>
${C.skills.map(([l, r]) => `<li><strong>${esc(l)}:</strong> ${esc(r)}</li>`).join('\n')}
</ul>

<h2>Work History</h2>
${C.jobs.map((j) => `<p class="jobhead"><span class="title">${esc(j.position)}</span>  –  <span class="cname">${esc(j.company)}</span>${j.companyNote ? `<span class="cnote">, ${esc(j.companyNote)}</span>` : ''}<span class="dates">  (${esc(j.dates)})</span></p>
${j.note ? `<p class="note">${esc(j.note)}</p>` : ''}
<ul>
${j.bullets.map((b) => `\t<li>${esc(b)}</li>`).join('\n')}
</ul>`).join('\n')}

<h2>Passion Projects</h2>
${C.projects.map((p) => `<p class="projhead">${p.href ? `<a href="${esc(p.href)}">${esc(p.name)}</a>` : esc(p.name)}<span class="stackinline">  –  ${esc(p.stack)}</span><span class="meta">  |  ${p.href && isUrl(p.meta) ? `<a href="${esc(p.href)}">${esc(p.meta)}</a>` : esc(p.meta)}</span></p>
<p>${rich(p.desc, p.descLinks)}</p>`).join('\n')}

<h2>Education</h2>
${C.education.map(([d, r]) => `<p><strong>${esc(d)}</strong>${esc(r)}</p>`).join('\n')}

<h2>Beyond Engineering</h2>
<p>${esc(C.beyond)}</p>

<h2>Portfolio</h2>
<p class="projhead"><a href="${esc(C.portfolio.href)}">${esc(C.portfolio.name)}</a><span class="stackinline">  –  ${esc(C.portfolio.stack)}</span><span class="meta">  |  <a href="${esc(C.portfolio.href)}">${esc(C.portfolio.meta)}</a></span></p>
<p>${esc(C.portfolio.desc)}</p>
</body>
</html>
`;

const out = path.resolve(process.argv[2] || 'travis-hoki-resume.html');
fs.writeFileSync(out, html);
console.log('wrote ' + out);
