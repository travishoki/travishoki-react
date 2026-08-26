// Reads the company and role out of job-description.md so they are stated once,
// in the posting itself, rather than duplicated into content.js by hand.
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'job-description.md');

const md = fs.existsSync(FILE) ? fs.readFileSync(FILE, 'utf8') : '';

// First non-empty line under a heading, e.g. "# Company Name" -> "ClassDojo".
const field = (heading) => {
	const re = new RegExp(`^#{1,6}\\s*${heading}\\s*$([\\s\\S]*?)(?=^#{1,6}\\s|$(?![\\s\\S]))`, 'im');
	const m = md.match(re);
	if (!m) return '';
	const line = m[1].split('\n').map((l) => l.trim()).find(Boolean);
	return line || '';
};

const company = field('Company Name');
const role = field('Role');

// Optional. Falls back to the generic greeting when the posting does not name
// anyone, which is the common case.
const hiringManager = field('Hiring Manager');
const salutation = hiringManager ? `Dear ${hiringManager},` : 'Dear Hiring Manager,';

// "ClassDojo" -> "class-dojo", "Acme Corp" -> "acme-corp"
const slug = company
	.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
	.toLowerCase()
	.replace(/[^a-z0-9]+/g, '-')
	.replace(/^-|-$/g, '');

if (!company) {
	throw new Error(`No "Company Name" heading with a value in ${FILE}`);
}
if (!role) {
	throw new Error(`No "Role" heading with a value in ${FILE}`);
}

module.exports = { company, hiringManager, role, salutation, slug };
