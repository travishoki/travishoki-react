export const ROUTES = {
	ABOUT: '/about',
	CONTACT: '/contact',
	EDUCATION: '/education',
	FIGHT_FOR_YOUR_DREAMS: '/passion/fight-for-your-dreams',
	HOKI_SKATEBOARDS: '/passion/hoki-skateboards',
	HOME: '/',
	PROJECT: '/project',
	PROJECTS: '/projects',
	RESUME: '/resume',
} as const;

export const ROUTE_PATTERNS = {
	...ROUTES,
	PROJECT: `${ROUTES.PROJECT}/:paramItemKey`,
	PROJECTS: `${ROUTES.PROJECTS}/:paramFilter?/:paramSearch?`,
} as const;
