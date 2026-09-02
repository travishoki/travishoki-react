// Tailored ATS resume content for the SalesDraft Senior Software Engineer
// application. One minimal, honest edit on top of the master
// resume.content.js: the summary leads with the Node.js/React/TypeScript +
// daily AI-tooling combination this posting names directly, and with the
// sales-tech SaaS domain experience (Spiff, XANT) that's a direct match for
// a company building recruiting software for sales teams. Job history,
// bullets, projects, skills, and education are unchanged from the master.

const profile = require('../../shared/profile.js');

module.exports = {
	...profile,

	summary:
		'Senior Software Engineer with 14+ years of experience building, scaling, and modernizing web applications. Frontend specialist in React and TypeScript with real production experience in Node.js and Express, and genuine day-to-day use of AI coding tools: Claude Code and Cursor AI in production work, plus a shipped product integrating the Anthropic Claude API with real prompt engineering. I have the startup pattern this role is asking for: joined Spiff as an early engineer building platform infrastructure from scratch, and stayed through its acquisition by Salesforce, shipping a multi-tenant B2B SaaS product for enterprise accounts throughout. My background also includes sales-tech SaaS specifically, commission software at Spiff and sales-acceleration tooling at XANT, formerly InsideSales.com.',

	skills: [
		[
			'AI-Assisted Development',
			'Claude Code, Cursor AI, AI-assisted production development',
		],
		[
			'Languages',
			'TypeScript, JavaScript (ES6+), HTML5, CSS3, Sass/SCSS, Less, PHP, Python, SQL, Ruby',
		],
		[
			'Frontend',
			'React, React Native, Redux, AngularJS, jQuery, Handlebars, Lexical, Storybook, Server-Side Rendering (SSR), Responsive UI, Internationalization (i18n/l10n), Accessibility',
		],
		[
			'Backend & Data',
			'Node.js, Express, Django, PostgreSQL, MySQL, Firebase/Firestore, GraphQL, REST APIs and API integration, Stripe',
		],
		[
			'Testing & Code Quality',
			'Jest, Vitest, React Testing Library, Cypress, TDD, ESLint (custom rule sets), Prettier, Stylelint, Husky pre-commit hooks, coverage enforcement',
		],
		[
			'Build & Platform',
			'Webpack, Vite, Git/GitHub, CI automation, AWS S3, WordPress/WooCommerce',
		],
	],

	jobs: [
		{
			position: 'Senior Member of the Technical Staff',
			company: 'Salesforce',
			dates: 'Mar. 2024 – May 2026',
			note: 'Stayed on for two years after Salesforce acquired Spiff in March 2024, scaling the product for enterprise accounts.',
			bullets: [
				'Raised the frontend codebase to Salesforce’s post-acquisition quality standards, expanding Jest coverage and establishing strict ESLint rule sets. That work drove company-wide TypeScript adoption.',
				'Adopted Claude Code and Cursor AI into daily development, pair programming with them on refactors, debugging, and test-coverage work.',
				'Shipped a document composer on the Lexical editor framework after evaluating several WYSIWYG options, customizing it heavily for document workflows. Added a Handlebars-style merge-field system that resolves placeholders to live profile values at render time. Extended the server-side Ruby layer to customize PDF output.',
			],
		},
		{
			position: 'Frontend Engineer',
			company: 'Spiff',
			companyNote: 'acquired by Salesforce',
			dates: 'Aug. 2021 – Mar. 2024',
			note: 'Built core platform infrastructure at the startup, through to acquisition.',
			bullets: [
				'Architected the frontend internationalization infrastructure from the ground up and migrated thousands of hardcoded strings across the application. Launched the product in Japanese, Spanish, and additional locales, supporting a major expansion priority for Spiff and Salesforce.',
				'Created a pseudo-localization tool that became the team’s standard pre-merge check for untranslated UI. It renders every translated string as X’s, letting any engineer spot gaps in seconds.',
				'Wrote custom automated tooling scripts (dead-code detection, unused-export pruning, lint enforcement) that systematically drove down technical debt across the repository.',
				'Designed a recursive component tree that renders company org hierarchies at any depth, powering team-based commission structures for enterprise accounts.',
				'Developed features against GraphQL APIs and practiced TDD, writing Jest and React Testing Library specs before implementation.',
			],
		},
		{
			position: 'Senior Software Engineer',
			company: 'XANT',
			companyNote: 'formerly InsideSales.com',
			dates: 'Dec. 2020 – Aug. 2021',
			bullets: [
				'Authored the frontend architectural standards adopted across the engineering organization, defining code conventions, lint rules, and component structure.',
				'Mentored mid-level and junior developers through pair programming, working alongside them on their own projects to unblock delivery and grow their skills.',
				'Modernized legacy frontend architecture and JavaScript patterns, improving runtime performance and reducing ongoing maintenance burden.',
			],
		},
		{
			position: 'Web Developer',
			company: 'Chatbooks',
			dates: 'Mar. 2019 – Aug. 2020',
			bullets: [
				'Rebuilt the book creation flow, one of the company’s core revenue paths, in React. Unlocked Premium Layflat book creation on desktop, giving customers a far better large-format editing experience.',
				'Executed a progressive, zero-downtime migration from legacy AngularJS to React across the customer-facing site, preserving production stability throughout.',
				'Built Cards taxonomy pages with category browsing and search filters using Node.js server-side rendering, accelerating page loads and improving SEO discoverability.',
				'Implemented Branch deep links and platform-specific quick-flow screens routing customers from Instagram’s storefront into the iOS and Android apps.',
			],
		},
		{
			position: 'Front-End Developer',
			company: 'Overstock.com',
			companyNote: 'now Bed Bath & Beyond',
			dates: 'Sept. 2015 – Mar. 2019',
			bullets: [
				'Owned the frontend for all User Generated Content on a high-traffic national e-commerce site: ratings, reviews, customer photos, and Q&A. Brought these templates into ADA accessibility compliance.',
				'Launched customer review images end to end, validating and formatting uploads client-side before pushing to AWS S3. Real customer photos let shoppers see products in use before buying.',
				'Led the site-wide migration of star ratings behind feature flags, coordinating simultaneous multi-department deploys. Introduced rating-only reviews, measurably increasing review volume.',
				'Rebuilt the responsive See All Reviews page and embedded a reusable React Add To Cart module into the mobile review flow. A two-week A/B test showed conversion lift.',
				'Delivered an internal SEO admin portal (React, Redux, Node.js, Express) letting business users manage SEO titles and taxonomy display names.',
				'Ported featured-product logic into an AMP search page using amp-bind, optimizing CSS to meet strict AMP size limits. Rearchitected a WordPress plugin into the embeddable affiliate-links widget that launched the affiliate program.',
			],
		},
		{
			position: 'Full Stack Developer',
			company: 'Room Choice',
			dates: 'Dec. 2014 – Aug. 2015',
			bullets: [
				'Developed full-stack features for student-housing management software using AngularJS/CoffeeScript on the frontend and Python/Django with PostgreSQL on the backend.',
				'Optimized queries, reporting, and application performance as the platform scaled to a rapidly growing number of students and institutional accounts.',
				'Designed and integrated the RESTful APIs between frontend and backend layers, collaborating with an international, distributed engineering team.',
			],
		},
		{
			position: 'Custom Developer',
			company: 'Enspark',
			dates: 'Nov. 2011 – Dec. 2014',
			bullets: [
				'Rebuilt the company’s Learning Management System in PHP, MySQL, JavaScript, and jQuery, implementing user-account progress tracking across the eLearning catalog.',
				'Built custom web applications and features for small-business clients, spanning design, frontend, backend, and WordPress theme development.',
				'Produced interactive eLearning courses and marketing banners in Adobe Flash using ActionScript 3.',
			],
		},
	],

	projects: [
		{
			name: 'Food Cards',
			meta: 'food-cards.travishoki.com',
			href: 'https://food-cards.travishoki.com/',
			stack: 'React, TypeScript, Firebase, Anthropic Claude API',
			desc: 'A safe-foods catalog built for my son, who has food avoidance issues. Integrated Claude via the Anthropic SDK (@anthropic-ai/sdk) so users filter the collection in plain English. “Easy breakfast ideas” resolves to category, difficulty, sort order, and keyword filters at once. Prompt engineering enforces schema-validated JSON, so ambiguous output degrades gracefully rather than breaking the UI. Also implemented scored fuzzy search.',
		},
		{
			name: 'Hoki Skateboards Website',
			meta: 'hokiskateboards.com',
			href: 'https://hokiskateboards.com/',
			stack: 'PHP, WordPress, WooCommerce, JavaScript, Stripe',
			desc: 'Founded a skateboard company selling skateboards, apparel, and a self-published children’s book. Designed the brand and built the storefront on a custom WordPress theme, with WooCommerce and Stripe handling retail and checkout.',
		},
		{
			name: 'Hoki Skateboards App',
			meta: 'hokiskateboards.com/app',
			href: 'https://www.hokiskateboards.com/app/',
			stack: 'React Native, TypeScript, React Native Game Engine, Matter.js, Firebase',
			desc: 'Designed, illustrated, and built a mobile game in React Native, shipping one codebase to iOS and Android as real native UI. Published on the Apple App Store and Google Play.',
			descLinks: [
				{
					phrase: 'Apple App Store',
					href: 'https://apps.apple.com/us/app/hoki-skateboards/id1622675312',
				},
			],
		},
	],

	portfolio: {
		name: 'TravisHoki.com',
		meta: 'travishoki.com',
		href: 'https://travishoki.com',
		stack: 'React, TypeScript, Vite, Storybook, Jest/Vitest',
		desc: 'Check out my portfolio to see this work in detail: case studies, screenshots, and write-ups for the projects above plus 20+ more from across my career.',
	},

	education: [
		[
			'Bachelor of Science, Digital Media',
			' (Emphasis in Internet Technology)  –  Utah Valley University',
		],
		[
			'Associate in Applied Science, Digital Communication Technology',
			'  –  Utah Valley University',
		],
	],

	beyond:
		'Illustrator and self-published author of two children’s books, one Kickstarter-funded. Improv Broadway stand-up comedy graduate and volunteer Cub Scouts den leader.',
};
