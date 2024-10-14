import {
	ACTION_SCRIPT,
	AMP,
	ANGULAR_JS,
	COFFEE_SCRIPT,
	CSS,
	HANDLEBARS_JS,
	HTML,
	JAVASCRIPT,
	JQUERY,
	PHP,
	PYTHON,
	REACT_JS,
	REDUX,
	SQL,
	TechKeys,
	TYPESCRIPT,
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
			img: ImgSalesforce,
			title: 'Acquired by Salesforce (March 2024)',
		},
		dateEnd: 'Present',
		dateStart: 'Aug. 2021',
		img: ImgSpiff,
		position: 'Senior Member of the Technical Staff',
		tasks: [
			'Develop infrastructure for string translations, enhancing global accessibility',
			'Create scripts to ensure code cleanliness, improving maintainability',
			'Advance code standards through Eslint, Unit Testing, and Typescript for robust software quality',
		],
		techs: [REACT_JS, REDUX, JAVASCRIPT, TYPESCRIPT, CSS, HTML],
		title: 'Spiff',
	},
	{
		affiliatedCompany: {
			img: ImgInsideSales,
			title: 'Formally Inside Sales',
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
		techs: [REACT_JS, REDUX, JAVASCRIPT, TYPESCRIPT, CSS, HTML],
		title: 'Xant/Inside Sales',
	},
	{
		dateEnd: 'Aug. 2020',
		dateStart: 'Mar. 2019',
		img: ImgChatbooks,
		position: 'Web Developer',
		tasks: [
			'Create/maintain web features and projects for the Books and Cards teams',
			'Actively converted Angular JS to React JS while keeping product code stable',
			'Node JS Server-side rendering for SEO and optimization',
		],
		techs: [REACT_JS, REDUX, JAVASCRIPT, TYPESCRIPT, CSS, HTML],
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
			'Enhancements to customer reviews functionality',
			'Managed the Front-End for all User Generated Content',
			'Managed pixels for retargeting and third party integrations',
			'Pioneered the affiliate links program',
		],
		techs: [REACT_JS, REDUX, HANDLEBARS_JS, JAVASCRIPT, CSS, HTML, AMP],
		title: 'Overstock',
	},
	{
		dateEnd: 'Sept. 2015',
		dateStart: 'Dec. 2014',
		img: ImgRoomChoice,
		position: 'Full Stack Web-App Developer',
		tasks: [
			'In house developement on student housing software',
			'Query user data via Python and Django',
			'Manage and enhance front-end via AngularJs, CoffeeScript, and Classy',
			'Found ways to speedup and enhance the user experience of the software',
		],
		techs: [ANGULAR_JS, PYTHON, JAVASCRIPT, COFFEE_SCRIPT, CSS, HTML],
		title: 'Room Choice',
	},
	{
		dateEnd: 'Dec. 2014',
		dateStart: 'Nov. 2011',
		img: ImgEnspark,
		position: 'Custom Web Developer',
		tasks: [
			'Full-stack development via PHP and JavaScript',
			'LMS reconstruction and user account tracking',
			'Front-end development and WordPress maintenance',
			'Custom banner and eLearning course development in Adobe Flash AS3',
		],
		techs: [JAVASCRIPT, CSS, HTML, ACTION_SCRIPT, JQUERY, PHP, SQL],
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
		dateStart: 'May 2009',
		img: ImgAcademyOfBallet,
		position: 'Breakdance Instructor',
		tasks: [
			'Developed and execute breakdance curriculum',
			'Mentored and prepared students for successful recitals',
			'Along side the students, break it down with sweet dance moves',
		],
		techs: [],
		title: 'Academy of Balley',
	},
	{
		dateEnd: 'Jun. 2011',
		dateStart: 'Dec. 2006',
		img: ImgWendys,
		position: 'Crew Member',
		tasks: [
			'Register operation and order fulfillment',
			'Workstation sanitation and stocking',
			'Trained new employees in various positions',
			'Maintain service and courtesy standards during high-pressure situations',
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
	techs: (keyof TechKeys)[];
	title: string;
};
