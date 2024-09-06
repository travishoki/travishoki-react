import {
	ANGULAR_JS,
	CSS,
	HTML,
	JAVSCRIPT,
	PYTHON,
	REACT_JS,
	REDUX,
	TechKeys,
} from '~const/Tech.const';
import ImgAcademyOfBallet from '~images/experience/academy-of-ballet.png';
import ImgAllAm from '~images/experience/all-american-sod-farms.png';
import ImgChatbooks from '~images/experience/chatbooks.png';
import ImgEnspark from '~images/experience/enspark.png';
import ImgOvestock from '~images/experience/overstock.png';
import ImgRoomChoice from '~images/experience/roomchoice.png';
import ImgSalesforce from '~images/experience/salesforce.png';
import ImgSpiff from '~images/experience/spiff.png';
import ImgWendys from '~images/experience/wendys.png';
import ImgXant from '~images/experience/xant.png';

export const SKILLS_LIST = [
	'JavaScript',
	'React JS',
	'Redux',
	'Reselect',
	'Node JS',
	'HTML',
	'CSS',
	'SASS',
	'LESS',
];

export const RESUME_DATA: ResumeDataType[] = [
	{
		dateEnd: 'Present',
		dateStart: 'March 2024',
		img: ImgSalesforce,
		position: 'Sr. Member of the Technical Staff',
		tasks: [],
		techs: [REACT_JS, JAVSCRIPT, CSS, HTML],
		title: 'Salesforce',
	},
	{
		dateEnd: 'Present',
		dateStart: 'Aug 2021',
		img: ImgSpiff,
		position: 'Sr. Software Engineer',
		tasks: [],
		techs: [REACT_JS, JAVSCRIPT, CSS, HTML],
		title: 'Spiff',
	},
	{
		dateEnd: 'Aug 2021',
		dateStart: 'Dec 2020',
		img: ImgXant,
		position: 'Sr. Software Engineer',
		tasks: [
			'Creating and documenting standards and best practices for the Front End Team',
			'Mentoring and pair-programming with other Software Engineers',
			'Upgrading Front End technology and code syntax',
			'Fixing bugs and reinforcing existing software',
		],
		techs: [REACT_JS, REDUX, JAVSCRIPT, CSS, HTML],
		title: 'Xant/Inside Sales',
	},
	{
		dateEnd: 'Aug 2020',
		dateStart: 'Mar 2019',
		img: ImgChatbooks,
		position: 'Web Developer',
		tasks: [
			'Create/maintain web features and projects for the Books and Cards teams',
			'Actively convert Angular JS to React JS while keeping product code stable',
			'Node JS Server-side rendering for SEO and optimization',
		],
		techs: [REACT_JS, REDUX, JAVSCRIPT, CSS, HTML],
		title: 'Chatbooks',
	},
	{
		dateEnd: 'Mar 2019',
		dateStart: 'Sep 2015',
		img: ImgOvestock,
		position: 'Front-end Developer',
		tasks: [
			'Enhancements to customer reviews functionality',
			'Manage the Front-End for all User Generated Content',
			'Manage pixels for retargeting and third party integrations',
			'Pioneer affiliate links program',
		],
		techs: [JAVSCRIPT, CSS, HTML],
		title: 'Overstock',
	},
	{
		dateEnd: 'Sep 2015',
		dateStart: 'Dec 2014',
		img: ImgRoomChoice,
		position: 'Full Stack Web-App Developer',
		tasks: [
			'Query user data via Python and Django',
			'Manage and enhance front-end via AngularJs, CoffeeScript, and Classy',
			'In house developement on student housing software',
			'Finding ways to speedup and enhance the user experience of the software',
		],
		techs: [ANGULAR_JS, PYTHON, JAVSCRIPT, CSS, HTML],
		title: 'Room Choice',
	},
	{
		dateEnd: 'Dec 2014',
		dateStart: 'Nov 2011',
		img: ImgEnspark,
		position: 'Custom Web Developer',
		tasks: [
			'Full-stack development via PHP and JavaScript',
			'LMS reconstruction and user account tracking',
			'Front-end development and WordPress maintenance',
			'Custom banner and eLearning course development in Adobe Flash AS3',
		],
		techs: [JAVSCRIPT, CSS, HTML],
		title: 'Enspark',
	},
	{
		dateEnd: 'Jun 2012',
		dateStart: 'Jun 2011',
		img: ImgAllAm,
		position: 'Office Manager / Web Master',
		tasks: [
			'Scheduling and dispatching deliveries',
			'Bill collecting and register operation',
			'Customer service and clerical work',
		],
		techs: [],
		title: 'All American Sod Farms',
	},
	{
		dateEnd: 'Jan 2009',
		dateStart: 'May 2009',
		img: ImgAcademyOfBallet,
		position: 'Breakdance Instructor',
		tasks: ['Plan and carry out curriculum', 'Prepare students for recitals'],
		techs: [],
		title: 'Academy of Balley',
	},
	{
		dateEnd: 'Jun 2011',
		dateStart: 'Dec 2006',
		img: ImgWendys,
		position: 'Crew Member',
		tasks: [
			'Register operation',
			'Workstation sanitation and stocking',
			'Train new employees in various positions',
			'Maintain service and courtesy standards during stressful situations',
		],
		techs: [],
		title: "Wendy's",
	},
];

type ResumeDataType = {
	dateEnd: string;
	dateStart: string;
	img: string;
	position: string;
	tasks: string[];
	techs: (keyof TechKeys)[];
	title: string;
};
