import {
	ACTION_SCRIPT,
	AMP,
	ANGULAR_JS,
	CLAUDE_CODE,
	COFFEE_SCRIPT,
	CSS,
	CURSOR_AI,
	DJANGO,
	HANDLEBARS_JS,
	HTML,
	JAVASCRIPT,
	JEST,
	JQUERY,
	PHP,
	PYTHON,
	REACT_JS,
	REDUX,
	SQL,
	TechKey,
	TYPESCRIPT,
	WORDPRESS,
} from '~const/Tech.const';
import ImgAcademyOfBallet from '~images/experience/academy-of-ballet.png';
import ImgAllAm from '~images/experience/all-american-sod-farms.png';
import ImgBedBathAndBeyond from '~images/experience/bed-bath-and-beyond.png';
import ImgChatbooks from '~images/experience/chatbooks.png';
import ImgEnspark from '~images/experience/enspark.png';
import ImgInsideSales from '~images/experience/inside-sales.png';
import ImgOverstock from '~images/experience/overstock.png';
import ImgRoomChoice from '~images/experience/roomchoice.png';
import ImgSalesforce from '~images/experience/salesforce.png';
import ImgSpiff from '~images/experience/spiff.png';
import ImgWendys from '~images/experience/wendys.png';
import ImgXant from '~images/experience/xant.png';

export const RESUME_DATA: ResumeDataType[] = [
	{
		title: 'Salesforce',
		affiliatedCompany: {
			title: 'Spiff acquired by Salesforce (March 2024)',
			img: ImgSpiff,
		},
		dateEnd: 'Jun. 2026',
		dateStart: 'Mar. 2024',
		description:
			"Following Spiff's acquisition by Salesforce, we optimized our product and scaled the software to accommodate enterprise-level accounts. During this transition, I was a driving force in elevating the Spiff codebase to meet Salesforce's rigorous unit testing and coverage standards.",
		img: ImgSalesforce,
		position: 'Senior Member of the Technical Staff',
		tasks: [
			'Architected the frontend internationalization infrastructure from the ground up and migrated hundreds of hardcoded strings across the application, launching the product in Japanese, Spanish, and additional locales.',
			'Built a dev-mode pseudo-localization toggle that renders every translated string as X’s, letting any engineer spot untranslated UI in seconds.',
			'Built a document composer on the Lexical editor framework, customizing it heavily for document workflows and adding a Handlebars-style merge-field system that resolves placeholders to live profile values at render time; extended the server-side Ruby layer to customize PDF output.',
			'Authored custom automated tooling scripts (dead-code detection, unused-export pruning, lint enforcement) that systematically drove down technical debt.',
			'Raised the codebase to Salesforce’s post-acquisition unit-test coverage bar, expanding Jest test suites and establishing strict ESLint rule sets that drove company-wide TypeScript adoption.',
			'Built a recursive component tree rendering company org hierarchies at arbitrary depth, powering team-based commission structures for enterprise accounts.',
		],
		techs: [
			CLAUDE_CODE,
			REACT_JS,
			JAVASCRIPT,
			TYPESCRIPT,
			JEST,
			CSS,
			HTML,
			CURSOR_AI,
		],
	},
	{
		title: 'Spiff',
		affiliatedCompany: {
			title: 'Spiff acquired by Salesforce (March 2024)',
			img: ImgSalesforce,
		},
		dateEnd: 'Jun. 2026',
		dateStart: 'Aug. 2021',
		description:
			'I really enjoyed the challenge of designing and implementing our internationalization/translation infrastructure, which taught me a lot about architecting scalable software for global reach. I found purpose and fulfillment collaborating with the fellow front end developers building out custom automation scripts and enforcing robust ESLint, TypeScript, and unit testing standards. This experience deepened my appreciation for code maintainability, showing me how the right technical guardrails can empower a team to move faster without sacrificing quality.',
		img: ImgSpiff,
		position: 'Frontend Engineer',
		tasks: [
			'Built internationalization (i18n) infrastructure for string translations, expanding global reach.',
			'Automated code-quality checks with custom scripts, improving maintainability.',
			'Strengthened code quality by enforcing ESLint, unit testing, and TypeScript standards.',
		],
		techs: [
			REACT_JS,
			REDUX,
			JAVASCRIPT,
			TYPESCRIPT,
			JEST,
			CSS,
			HTML,
			CURSOR_AI,
		],
	},
	{
		title: 'Xant/Inside Sales',
		affiliatedCompany: {
			title: 'Formerly Inside Sales',
			img: ImgInsideSales,
		},
		dateEnd: 'Aug. 2021',
		dateStart: 'Dec. 2020',
		description:
			'I found the most fulfillment in mentoring and pair programming with other developers, finding true value in building those peer relationships. Beyond team collaboration, I really enjoyed designing infrastructure, defining team conventions and best practices, and driving technical discussions.',
		img: ImgXant,
		position: 'Senior Software Engineer',
		tasks: [
			'Authored the frontend architectural standards and documentation adopted across the engineering organization, establishing shared conventions for component structure, state management, and testing.',
			'Mentored mid-level and junior developers through regular pair-programming sessions, accelerating feature delivery and onboarding.',
			'Modernized legacy core technologies and syntax paradigms, improving runtime performance and reducing maintenance burden.',
		],
		techs: [REACT_JS, REDUX, JAVASCRIPT, TYPESCRIPT, JEST, CSS, HTML],
	},
	{
		title: 'Chatbooks',
		dateEnd: 'Aug. 2020',
		dateStart: 'Mar. 2019',
		description:
			'As a member of the web team, I helped build out the Chatbooks website, focusing on the desktop experience for users creating photo products, specifically photo albums, on their computers. We collaborated cross-functionally with backend and mobile teams to deliver a consistent experience across all devices.',
		img: ImgChatbooks,
		position: 'Web Developer',
		tasks: [
			'Rebuilt the book creation flow (one of the company’s core revenue paths) in React, and unlocked Premium Layflat book creation on desktop, a product breakthrough for customers creating large-format books.',
			'Executed a progressive, zero-downtime migration from legacy AngularJS to React across the customer-facing site, preserving production stability throughout.',
			'Built Cards taxonomy pages with category browsing and search filters using Node.js server-side rendering, accelerating page loads and improving SEO discoverability.',
			'Implemented Branch deep links and platform-specific quick-flow screens routing customers from Instagram’s storefront into the iOS and Android apps.',
		],
		techs: [REACT_JS, REDUX, JAVASCRIPT, TYPESCRIPT, JEST, CSS, HTML],
	},
	{
		title: 'Overstock',
		affiliatedCompany: {
			title: 'Now known as Bed Bath & Beyond',
			img: ImgBedBathAndBeyond,
		},
		dateEnd: 'Mar. 2019',
		dateStart: 'Sept. 2015',
		description:
			'As a Frontend Developer on the User Generated Content team, I helped build, enhance, and maintain the interactive sections of the site, including product ratings, reviews, and Q&A modules. During my time on the team, I drove several key initiatives, such as introducing user-generated product images and implementing a variety of targeted SEO enhancements to boost search visibility.',
		img: ImgOverstock,
		position: 'Front-end Developer',
		tasks: [
			'Owned the frontend for all User Generated Content on a high-traffic national e-commerce site: ratings, reviews, customer photos, and Q&A.',
			'Launched customer review images end to end, validating and formatting uploads client-side before pushing to AWS; A/B tested to a confirmed positive revenue impact.',
			'Took a hackathon project from concept to finalist in 24 hours, then to production in three weeks; it won a 50/50 A/B test on conversion and shipped site-wide.',
			'Led the site-wide migration of star ratings behind feature flags and introduced rating-only reviews, coordinating simultaneous multi-department deploys.',
			'Built an internal SEO admin portal (React, Redux, Node.js, Express) and rearchitected a WordPress plugin into the embeddable affiliate-links widget that launched the affiliate program.',
		],
		techs: [REACT_JS, REDUX, HANDLEBARS_JS, JAVASCRIPT, JEST, CSS, HTML, AMP],
	},
	{
		title: 'Room Choice',
		dateEnd: 'Sept. 2015',
		dateStart: 'Dec. 2014',
		description:
			'Working within a agile, fast-paced team, we moved quickly gathering feedback from the owners, marketing, and customer. As we scaled the software to accommodate a rapidly growing number of students and accounts, I focused heavily on performance optimization, learning how to write highly efficient code at scale. I strived to become an expert in Angular, ensuring our implementation was as streamlined as possible. This role also provided my first experience collaborating with an international team of developers, which taught me how to work effectively across global time zones and cultures.',
		img: ImgRoomChoice,
		position: 'Full Stack Web-App Developer',
		tasks: [
			'Developed full-stack features for student-housing software using AngularJS and Python/Django.',
			'Built app features combining front-end logic, relational SQL databases, and backend API management.',
			'Managed and enhanced the front-end via AngularJS and CoffeeScript.',
			'Optimized application performance and user experience.',
		],
		techs: [ANGULAR_JS, PYTHON, DJANGO, JAVASCRIPT, COFFEE_SCRIPT, CSS, HTML],
	},
	{
		title: 'Enspark',
		dateEnd: 'Dec. 2014',
		dateStart: 'Nov. 2011',
		description:
			'As my first technical job, this was such a great place for me to learn and grow. I had many mentors whom I still credit for much of my success throughout my career. I got to wear many hats and took part in many facets of our eLearning technology, including course building, the marketing website, and the learning management system. Along with the core eLearning products, I had the privilege of working with many small business owners to build out custom websites and features.',
		img: ImgEnspark,
		position: 'Custom Web Developer',
		tasks: [
			'Developed full-stack features via PHP and JavaScript.',
			'Crafted highly tailored, interactive web components utilizing JavaScript, HTML, and CSS.',
			'Rebuilt the LMS and implemented user-account tracking.',
			'Built front-end features and maintained WordPress sites.',
			'Developed custom banners and eLearning courses in Adobe Flash AS3.',
		],
		techs: [
			JAVASCRIPT,
			CSS,
			HTML,
			ACTION_SCRIPT,
			JQUERY,
			PHP,
			SQL,
			ANGULAR_JS,
			WORDPRESS,
		],
	},
	{
		title: 'All American Sod Farms',
		dateEnd: 'Jun. 2012',
		dateStart: 'Jun. 2011',
		img: ImgAllAm,
		position: 'Office Manager / Web Master',
		tasks: [
			'Scheduled and dispatched customer deliveries.',
			'Collected bills, operated the register, and created invoices.',
			'Provided customer service and performed clerical work.',
		],
		techs: [],
	},
	{
		title: 'Academy of Ballet',
		dateEnd: 'Jan. 2009',
		dateStart: 'May 2008',
		img: ImgAcademyOfBallet,
		position: 'Breakdance Instructor',
		tasks: [
			'Developed and executed breakdance curriculum.',
			'Mentored and prepared students for successful recitals.',
			'Broke it down alongside students with sweet dance moves.',
		],
		techs: [],
	},
	{
		title: "Wendy's",
		dateEnd: 'Jun. 2011',
		dateStart: 'Dec. 2006',
		img: ImgWendys,
		position: 'Crew Member',
		tasks: [
			'Operated registers and fulfilled customer orders.',
			'Sanitized and stocked workstations.',
			'Trained new employees in various positions.',
			'Maintained service and courtesy standards during high-pressure situations.',
		],
		techs: [],
	},
];

export type ResumeDataType = {
	affiliatedCompany?: {
		img: string;
		title: string;
	};
	dateEnd: string;
	dateStart: string;
	description?: string;
	img: string;
	position: string;
	tasks: string[];
	techs: TechKey[];
	title: string;
};
