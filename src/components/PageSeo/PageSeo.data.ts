import { ROUTES } from '~const/Routes.const';

import { SeoData } from './PageSeo';

export const PAGE_SEO: Record<string, SeoData> = {
	[ROUTES.ABOUT]: {
		title: 'About Me',
		canonical: ROUTES.ABOUT,
		description:
			'Learn more about Travis Hoki, his background, interests, and what drives him as a web developer.',
	},
	[ROUTES.CONTACT]: {
		title: 'Contact',
		canonical: ROUTES.CONTACT,
		description:
			'Get in touch with Travis Hoki, a Senior Software Development Engineer available for new opportunities.',
	},
	[ROUTES.EDUCATION]: {
		title: 'Education',
		canonical: ROUTES.EDUCATION,
		description:
			"Travis Hoki's educational background including UVU, Salesforce Trailhead, and more.",
	},
	[ROUTES.FIGHT_FOR_YOUR_DREAMS]: {
		title: 'Fight For Your Dreams',
		canonical: ROUTES.FIGHT_FOR_YOUR_DREAMS,
		description:
			"Fight For Your Dreams is a children's book written and published by Travis Hoki, available on Amazon.",
	},
	[ROUTES.HOKI_SKATEBOARDS]: {
		title: 'Hoki Skateboards',
		canonical: ROUTES.HOKI_SKATEBOARDS,
		description:
			"Hoki Skateboards is Travis Hoki's passion project making and selling skateboards, writing a children's book, and building an app.",
	},
	[ROUTES.HOME]: {
		title: 'Web Dev Portfolio',
		canonical: ROUTES.HOME,
		description:
			'Travis Hoki is a Senior Software Development Engineer specializing in React and TypeScript. View my portfolio, projects, and resume.',
	},
	[ROUTES.HOW_ITS_MADE]: {
		title: 'How This Site Was Made',
		canonical: ROUTES.HOW_ITS_MADE,
		description:
			'A breakdown of the tools, libraries, and technologies used to build travishoki.com.',
	},
	[ROUTES.MOBILE_APP]: {
		title: 'Mobile App',
		canonical: ROUTES.MOBILE_APP,
		description:
			"Hoki Skateboards mobile app built with React Native and Firebase. A kid's skateboarding game available on iOS and Android.",
	},
	[ROUTES.PROJECTS]: {
		title: 'Projects',
		canonical: ROUTES.PROJECTS,
		description:
			"Browse Travis Hoki's web development projects built with React, TypeScript, Firebase, and more.",
	},
	[ROUTES.RESUME]: {
		title: 'Resume',
		canonical: ROUTES.RESUME,
		description:
			"Travis Hoki's resume as a Senior Software Development Engineer with experience in React, TypeScript, and modern UI development.",
	},
};
