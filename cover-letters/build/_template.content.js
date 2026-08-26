// Starter for a new cover letter. Copy into a folder named
// YYYY-MM-DD-company/content.js and edit.
module.exports = {
	slug: 'company-name',
	company: 'Company Name',
	role: 'Senior Software Engineer',

	name: 'TRAVIS HOKI',
	title: 'Senior Software Engineer',
	// Kept identical to resume/build/resume.content.js so both documents
	// present the same header.
	contact: [
		[{ text: 'Pleasant Grove, Utah' }, { text: '801-691-2373', href: 'tel:+18016912373' }, { text: 'travis.hoki@gmail.com', href: 'mailto:travis.hoki@gmail.com' }],
		[{ text: 'TravisHoki.com', href: 'https://travishoki.com' }, { text: 'linkedin.com/in/travishoki', href: 'https://www.linkedin.com/in/travishoki' }, { text: 'github.com/travishoki', href: 'https://github.com/travishoki' }],
	],

	salutation: 'Dear Hiring Manager,',

	intro:
		'I have spent fourteen years building web applications, and most of what I build outside of work is for children: two children’s books I illustrated and self-published, a mobile game I designed and shipped to the App Store, and a food catalog I built for my son. ClassDojo is a product where those two halves of my work overlap, which is why I am writing.',

	sections: [
		{
			heading: 'Why I think you are awesome!',
			body: 'ClassDojo reaches teachers, students, and families every day, and it has to work for all three without any of them being technical. That is a hard product problem and a hard engineering problem, and getting it right has real consequences in a classroom. My first engineering job was building eLearning software, a learning management system with course authoring and user progress tracking, so I have some sense of how much care that audience deserves.',
		},
		{
			heading: 'Why you should think I am awesome!',
			body: 'For more than 14 years I have built modern web applications with a focus on maintainable, scalable frontend architecture. I have led React migrations, raised code quality through TypeScript, ESLint, and automated testing, and built the internationalization infrastructure that launched a product into new markets. I mentor through pair programming, which is the part of the job I enjoy most. I also ship mobile: a React Native game running on iOS and Android from a single codebase.',
		},
		{
			heading: 'Why we would be awesome together!',
			body: 'ClassDojo needs engineers who can move a product forward while keeping a growing codebase healthy. That has been my work at Spiff and through its acquisition by Salesforce, where I helped raise a startup codebase to enterprise standards while continuing to ship features. I would like to bring that to software my own kids might one day use.',
		},
	],

	closing: 'Sincerely,',
};
