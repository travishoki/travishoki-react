import {
	ACTION_SCRIPT,
	AMP,
	ANGULAR_JS,
	CLAUDE_CODE,
	COFFEE_SCRIPT,
	CSS,
	CURSOR,
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
		affiliatedCompany: {
			img: ImgSpiff,
			title: 'Spiff acquired by Salesforce (March 2024)',
		},
		dateEnd: 'Present',
		dateStart: 'Mar. 2024',
		img: ImgSalesforce,
		position: 'Senior Member of the Technical Staff',
		tasks: [
			'Architected and deployed a highly scalable, enterprise-wide string translation infrastructure, expanding global platform accessibility.',
			'Engineered custom automated tooling scripts to enforce repository cleanliness, systematically driving down technical debt.',
			'Advanced corporate engineering quality standards by establishing strict ESLint rule sets, expanding automated Unit Testing, and driving TypeScript adoption.',
			'Elevate the codebase to Salesforce standards through extensive unit-test coverage',
		],
		techs: [
			CLAUDE_CODE,
			REACT_JS,
			JAVASCRIPT,
			TYPESCRIPT,
			JEST,
			CSS,
			HTML,
			CURSOR,
		],
		title: 'Salesforce',
	},
	{
		affiliatedCompany: {
			img: ImgSalesforce,
			title: 'Spiff acquired by Salesforce (March 2024)',
		},
		dateEnd: 'Present',
		dateStart: 'Aug. 2021',
		img: ImgSpiff,
		position: 'Frontend Engineer',
		tasks: [
			'Built internationalization (i18n) infrastructure for string translations, expanding global reach',
			'Automated code-quality checks with custom scripts, improving maintainability',
			'Strengthened code quality by enforcing ESLint, unit testing, and TypeScript standards',
		],
		techs: [REACT_JS, REDUX, JAVASCRIPT, TYPESCRIPT, JEST, CSS, HTML, CURSOR],
		title: 'Spiff',
	},
	{
		affiliatedCompany: {
			img: ImgInsideSales,
			title: 'Formerly Inside Sales',
		},
		dateEnd: 'Aug. 2021',
		dateStart: 'Dec. 2020',
		img: ImgXant,
		position: 'Senior Software Engineer',
		tasks: [
			'Authored and institutionalized comprehensive frontend architectural standards and documentation for the engineering organization.',
			'Mentored mid-level and junior developers through strategic pair-programming sessions, accelerating velocity and feature shipping.',
			'Upgraded legacy core technologies and modernized syntax paradigms to optimize runtime performance.',
			'Created and documented standards and best practices for the Front End Team',
			'Resolved bugs and reinforce existing features for reliability',
		],
		techs: [REACT_JS, REDUX, JAVASCRIPT, TYPESCRIPT, JEST, CSS, HTML],
		title: 'Xant/Inside Sales',
	},
	{
		dateEnd: 'Aug. 2020',
		dateStart: 'Mar. 2019',
		img: ImgChatbooks,
		position: 'Web Developer',
		tasks: [
			'Engineered customer-facing components and core features for high-traffic Books and Cards product lines.',
			'Executed a flawless, progressive migration from legacy AngularJS to ReactJS with zero downtime, preserving production stability.',
			'Created and maintained web features and projects for the Books and Cards teams',
		],
		techs: [REACT_JS, REDUX, JAVASCRIPT, TYPESCRIPT, JEST, CSS, HTML],
		title: 'Chatbooks',
	},
	{
		affiliatedCompany: {
			img: ImgBedBathAndBeyond,
			title: 'Now known as Bed Bath & Beyond',
		},
		dateEnd: 'Mar. 2019',
		dateStart: 'Sept. 2015',
		img: ImgOverstock,
		position: 'Front-end Developer',
		tasks: [
			'Enhanced customer review functionality across high-traffic retail pages.',
			'Managed the front-end for all user-generated content, including reviews, product images, and Q&A.',
			'Features A/B tested and proven positive for revenue.',
			'Integrated tracking pixels for retargeting and third-party platforms',
			'Pioneered the affiliate links program',
		],
		techs: [REACT_JS, REDUX, HANDLEBARS_JS, JAVASCRIPT, JEST, CSS, HTML, AMP],
		title: 'Overstock',
	},
	{
		dateEnd: 'Sept. 2015',
		dateStart: 'Dec. 2014',
		img: ImgRoomChoice,
		position: 'Full Stack Web-App Developer',
		tasks: [
			'Developed student-housing software in-house',
			'Built app features combining front-end logic, relational SQL databases, and backend API management.',
			'Built data queries and reporting with Python and Django',
			'Managed and enhanced the front-end via AngularJS and CoffeeScript',
			'Optimized application performance and user experience',
		],
		techs: [ANGULAR_JS, PYTHON, DJANGO, JAVASCRIPT, COFFEE_SCRIPT, CSS, HTML],
		title: 'Room Choice',
	},
	{
		dateEnd: 'Dec. 2014',
		dateStart: 'Nov. 2011',
		img: ImgEnspark,
		position: 'Custom Web Developer',
		tasks: [
			'Developed full-stack features via PHP and JavaScript',
			'Crafted highly tailored, interactive web components utilizing JavaScript, HTML, and CSS.',
			'Rebuilt the LMS and implemented user-account tracking',
			'Built front-end features and maintained WordPress sites',
			'Developed custom banners and eLearning courses in Adobe Flash AS3',
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
		title: 'Enspark',
	},
	{
		dateEnd: 'Jun. 2012',
		dateStart: 'Jun. 2011',
		img: ImgAllAm,
		position: 'Office Manager / Web Master',
		tasks: [
			'Scheduled and dispatched customer deliveries',
			'Collected bills, register operation, and invoice creation',
			'Provided customer service and performed clerical work',
		],
		techs: [],
		title: 'All American Sod Farms',
	},
	{
		dateEnd: 'Jan. 2009',
		dateStart: 'May 2008',
		img: ImgAcademyOfBallet,
		position: 'Breakdance Instructor',
		tasks: [
			'Developed and executed breakdance curriculum',
			'Mentored and prepared students for successful recitals',
			'Alongside the students, break it down with sweet dance moves',
		],
		techs: [],
		title: 'Academy of Ballet',
	},
	{
		dateEnd: 'Jun. 2011',
		dateStart: 'Dec. 2006',
		img: ImgWendys,
		position: 'Crew Member',
		tasks: [
			'Operated registers and fulfilled customer orders',
			'Sanitized and stocked workstations',
			'Trained new employees in various positions',
			'Maintained service and courtesy standards during high-pressure situations',
		],
		techs: [],
		title: "Wendy's",
	},
];

export type ResumeDataType = {
	affiliatedCompany?: {
		img: string;
		title: string;
	};
	dateEnd: string;
	dateStart: string;
	img: string;
	position: string;
	tasks: string[];
	techs: TechKey[];
	title: string;
};
