// Merges a cover letter PDF and a resume PDF into one file, cover letter
// first, for applications that only accept a single upload.
//
//   node merge-pdf.js <cover-letter.pdf> <resume.pdf> <out.pdf>
const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

async function main() {
	const [, , coverPath, resumePath, outPath] = process.argv;
	if (!coverPath || !resumePath || !outPath) {
		console.error('usage: node merge-pdf.js <cover-letter.pdf> <resume.pdf> <out.pdf>');
		process.exit(1);
	}

	const out = await PDFDocument.create();
	for (const src of [coverPath, resumePath]) {
		const doc = await PDFDocument.load(fs.readFileSync(path.resolve(src)));
		const pages = await out.copyPages(doc, doc.getPageIndices());
		pages.forEach((p) => out.addPage(p));
	}

	fs.writeFileSync(path.resolve(outPath), await out.save());
	console.log('wrote ' + outPath);
}

main();
