// Seconds between each button scaling in, so they animate left to right.
export const STAGGER_SECONDS = 0.15;

export const HERO_DOWNLOAD = {
	caption: '(The one I like)',
	href: '/travis-hoki-resume-creative.pdf',
	icon: 'faLink' as const,
	linkTitle: 'Travis Hoki Resume Creative (pdf)',
	text: 'Creative .pdf',
};

export const SECONDARY_DOWNLOADS = [
	{
		caption: '(The one I have to use)',
		href: '/travis-hoki-resume.pdf',
		icon: 'faLink' as const,
		linkTitle: 'Travis Hoki Resume (pdf)',
		text: '.pdf',
	},
	{
		caption: '(The one that may be required)',
		href: '/travis-hoki-resume.docx',
		icon: 'faDownload' as const,
		linkTitle: 'Travis Hoki Resume (docx)',
		text: '.docx',
	},
];
