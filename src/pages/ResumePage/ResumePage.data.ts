import {
	ACTION_SCRIPT,
	AMP,
	ANGULAR_JS,
	CLAUDE_CODE,
	COFFEE_SCRIPT,
	CSS,
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
import ImgOvestock from '~images/experience/overstock.png';
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
			'Bring the codebase up to Salesforce standards by adding extensive unit test coverage',
			'Scale the Spiff software from small-business to enterprise-level user capacity',
		],
		techs: [CLAUDE_CODE, REACT_JS, JAVASCRIPT, TYPESCRIPT, JEST, CSS, HTML],
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
			'Develop infrastructure for string translations, enhancing global accessibility',
			'Create scripts to ensure code cleanliness, improving maintainability',
			'Advance code standards through Eslint, Unit Testing, and Typescript for robust software quality',
		],
		techs: [REACT_JS, REDUX, JAVASCRIPT, TYPESCRIPT, JEST, CSS, HTML],
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
			'Created and documented standards and best practices for the Front End Team',
			'Mentored and engaged in pair-programming with other Software Engineers',
			'Upgraded Front End technology and code syntax',
			'Fixed bugs and reinforced existing software',
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
			'Created and maintained web features and projects for the Books and Cards teams',
			'Actively converted Angular JS to React JS while keeping product code stable',
			'Implemented Node.js server-side rendering for SEO and optimization',
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
		img: ImgOvestock,
		position: 'Front-end Developer',
		tasks: [
			'Enhanced customer reviews functionality',
			'Managed the front-end for all user-generated content, including reviews, product images, and Q&A',
			'Managed pixels for retargeting and third-party integrations',
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
			'Queried user data via Python and Django',
			'Managed and enhanced the front-end via AngularJS, CoffeeScript, and Classy',
			'Improved software speed and user experience',
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
