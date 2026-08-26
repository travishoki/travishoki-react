// Builds the ATS .docx from resume.content.js
// Typography matches the original 2026-06 resume: Helvetica Neue, 9.5pt body,
// #1f4e79 navy headings with a hairline rule, #666666 secondary text.
const fs = require('fs');
const path = require('path');
const {
	Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle,
	LevelFormat, convertInchesToTwip, ExternalHyperlink,
} = require('docx');

const C = require('./resume.content.js');

// A bare domain/path in `meta` gets linked; descriptive text does not.
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

const FONT = 'Arial';
const NAVY = '1F4E79';
const GRAY = '666666';

// half-points
const BODY = 19;    // 9.5pt
const NAME = 40;    // 20pt
const SUB = 24;     // 12pt
const CONTACT = 18; // 9pt
const HEAD = 22;    // 11pt

const LINE = 264; // matches original line spacing (1.1)

const t = (text, opts = {}) => new TextRun({ text, font: FONT, size: BODY, ...opts });

// Clickable but visually identical to surrounding text: no blue, no underline.
const link = (text, href, opts = {}) => {
	if (!href) return new TextRun({ text, font: FONT, size: BODY, ...opts });
	const run = new TextRun({ text, font: FONT, size: BODY, ...opts, color: NAVY });
	return new ExternalHyperlink({ children: [run], link: href });
};

const heading = (text) =>
	new Paragraph({
		spacing: { before: 160, after: 60, line: LINE, lineRule: 'auto' },
		border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: NAVY, space: 0 } },
		children: [new TextRun({ text: text.toUpperCase(), font: FONT, size: HEAD, color: NAVY, bold: true })],
	});

const bullet = (text) =>
	new Paragraph({
		numbering: { reference: 'resume-bullets', level: 0 },
		spacing: { after: 40, line: LINE, lineRule: 'auto' },
		children: [t(text)],
	});

const body = (text, links) =>
	new Paragraph({
		spacing: { before: 20, after: 80, line: LINE, lineRule: 'auto' },
		children: segments(text, links).map((s) => link(s.text, s.href)),
	});

const doc = new Document({
	creator: 'Travis Hoki',
	title: 'Travis Hoki  –  Senior Software Engineer Resume',
	numbering: {
		config: [{
			reference: 'resume-bullets',
			levels: [{
				level: 0,
				format: LevelFormat.BULLET,
				text: '•',
				alignment: AlignmentType.LEFT,
				style: { paragraph: { indent: { left: 216, hanging: 216 } } },
			}],
		}],
	},
	sections: [{
		properties: {
			page: {
				size: { width: 12240, height: 15840 }, // US Letter
				margin: { top: 720, right: 720, bottom: 720, left: 720 },
			},
		},
		children: [
			new Paragraph({
				alignment: AlignmentType.CENTER,
				spacing: { after: 20, line: LINE, lineRule: 'auto' },
				children: [new TextRun({ text: C.name, font: FONT, size: NAME, color: NAVY, bold: true })],
			}),
			new Paragraph({
				alignment: AlignmentType.CENTER,
				spacing: { after: 60, line: LINE, lineRule: 'auto' },
				children: [new TextRun({ text: C.title, font: FONT, size: SUB, color: GRAY })],
			}),
			...C.contact.map((parts, i) =>
				new Paragraph({
					alignment: AlignmentType.CENTER,
					spacing: { after: i === C.contact.length - 1 ? 160 : 20, line: LINE, lineRule: 'auto' },
					children: parts.flatMap((part, j) => [
						...(j ? [new TextRun({ text: '  |  ', font: FONT, size: CONTACT })] : []),
						link(part.text, part.href, { size: CONTACT }),
					]),
				})),

			heading('Professional Summary'),
			body(C.summary),

			heading('Tools & Stacks'),
			...C.skills.map(([label, rest]) =>
				new Paragraph({
					numbering: { reference: 'resume-bullets', level: 0 },
					spacing: { after: 40, line: LINE, lineRule: 'auto' },
					children: [
						new TextRun({ text: `${label}: `, font: FONT, size: BODY, bold: true }),
						t(rest),
					],
				})),

			heading('Work History'),
			...C.jobs.flatMap((j) => [
				new Paragraph({
					spacing: { before: 140, after: 20, line: LINE, lineRule: 'auto' },
					children: [
						new TextRun({ text: j.position, font: FONT, size: BODY, bold: true, color: NAVY }),
						new TextRun({ text: '  –  ', font: FONT, size: BODY }),
						new TextRun({ text: j.company, font: FONT, size: BODY, italics: true, bold: true }),
						...(j.companyNote
							? [new TextRun({ text: `, ${j.companyNote}`, font: FONT, size: BODY, italics: true, color: GRAY })]
							: []),
						new TextRun({ text: `  (${j.dates})`, font: FONT, size: BODY, color: GRAY }),
					],
				}),
				...(j.note
					? [new Paragraph({
						spacing: { after: 50, line: LINE, lineRule: 'auto' },
						children: [new TextRun({ text: j.note, font: FONT, size: BODY, italics: true, color: GRAY })],
					})]
					: []),
				...j.bullets.map(bullet),
			]),

			heading('Passion Projects'),
			...C.projects.flatMap((p) => [
				new Paragraph({
					spacing: { before: 120, after: 20, line: LINE, lineRule: 'auto' },
					children: [
						link(p.name, p.href, { bold: true, color: NAVY }),
						new TextRun({ text: `  –  ${p.stack}`, font: FONT, size: BODY, italics: true, color: GRAY }),
						new TextRun({ text: '  |  ', font: FONT, size: BODY, color: GRAY }),
						isUrl(p.meta)
							? link(p.meta, p.href, { color: GRAY })
							: new TextRun({ text: p.meta, font: FONT, size: BODY, color: GRAY }),
					],
				}),
				body(p.desc, p.descLinks),
			]),

			heading('Education'),
			...C.education.map(([degree, rest]) =>
				new Paragraph({
					spacing: { before: 20, after: 40, line: LINE, lineRule: 'auto' },
					children: [new TextRun({ text: degree, font: FONT, size: BODY, bold: true }), t(rest)],
				})),

			heading('Beyond Engineering'),
			body(C.beyond),

			heading('Portfolio'),
			new Paragraph({
				spacing: { before: 120, after: 20, line: LINE, lineRule: 'auto' },
				children: [
					link(C.portfolio.name, C.portfolio.href, { bold: true, color: NAVY }),
					new TextRun({ text: `  –  ${C.portfolio.stack}`, font: FONT, size: BODY, italics: true, color: GRAY }),
					new TextRun({ text: '  |  ', font: FONT, size: BODY, color: GRAY }),
					link(C.portfolio.meta, C.portfolio.href, { color: GRAY }),
				],
			}),
			body(C.portfolio.desc),
		],
	}],
});

const out = path.resolve(process.argv[2] || 'travis-hoki-resume.docx');
Packer.toBuffer(doc).then((buf) => {
	fs.writeFileSync(out, buf);
	console.log('wrote ' + out);
});
