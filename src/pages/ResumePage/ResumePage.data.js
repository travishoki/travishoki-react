import ImgChatbooks from '~images/experience/chatbooks.png';
import ImgOvestock from '~images/experience/overstock.png';
import ImgRoomChoice from '~images/experience/roomchoice.png';
import ImgEnspark from '~images/experience/enspark.png';
import ImgWendys from '~images/experience/wendys.png';
import ImgAllAm from '~images/experience/all-american-sod-farms.png';
import ImgXant from '~images/experience/xant.png';

export const SKILLS_LIST = [
	'JavaScript',
	'React JS',
	'Redux',
	'Reselect',
	'Node JS',
	'HTML',
	'CSS',

	'Angular JS',
	'SASS',
	'LESS',
	'jQuery',
    'PHP',
    'SQL',
];

export const RESUME_DATA = [
    {
        title: 'Xant/Inside Sales',
        position: 'Sr. Software Engineer',
		dateStart: 'Dec 2020',
        dateEnd: 'Present',
        tasks: [
            'Creating and documenting standards and best practices for the Front End Team',
			'Mentoring and pair-programming with other Software Engineers',
            'Upgrading Front End technology and code syntax',
            'Fixing bugs and reinforcing existing software',
        ],
        img: ImgXant,
    },
    {
        title: 'Chatbooks',
        position: 'Web Developer',
		dateStart: 'Mar 2019',
        dateEnd: 'Aug 2020',
        tasks: [
			'Create/maintain web features and projects for the Books and Cards teams',
			'Actively convert Angular JS to React JS while keeping product code stable',
			'Node JS Server-side rendering for SEO and optimization',
        ],
        img: ImgChatbooks,
    },
    {
        title: 'Overstock',
        position: 'Front-end Developer',
        dateStart: 'Sep 2015',
        dateEnd: 'Mar 2019',
        tasks: [
			'Enhancements to customer reviews functionality',
			'Manage the Front-End for all User Generated Content',
            'Manage pixels for retargeting and third party integrations',
			'Pioneer affiliate links program',
        ],
        img: ImgOvestock,
    },
    {
        title: 'Room Choice',
        position: 'Full Stack Web-App Developer',
        dateStart: 'Dec 2014',
        dateEnd: 'Sep 2015',
        tasks: [
            'Query user data via Python and Django',
            'Manage and enhance front-end via AngularJs, CoffeeScript, and Classy',
            'In house developement on student housing software',
            'Finding ways to speedup and enhance the user experience of the software',
        ],
        img: ImgRoomChoice,
    },
    {
        title: 'Enspark',
        position: 'Custom Web Developer',
        dateStart: 'Nov 2011',
        dateEnd: 'Dec 2014',
        tasks: [
            'Full-stack development via PHP and JavaScript',
            'LMS reconstruction and user account tracking',
            'Front-end development and WordPress maintenance',
            'Custom banner and eLearning course development in Adobe Flash AS3',
        ],
        img: ImgEnspark,
    },
    {
        title: 'All American Sod Farms',
        position: 'Office Manager / Web Master',
        dateStart: 'Jun 2011',
        dateEnd: 'Jun 2012',
        tasks: [
            'Scheduling and dispatching deliveries',
            'Bill collecting and register operation',
            'Customer service and clerical work',
        ],
        img: ImgAllAm,
    },
    {
        title: 'Wendy\'s',
        position: 'Crew Member',
        dateStart: 'Dec 2006',
        dateEnd: 'Jun 2011',
        tasks: [
            'Register operation',
            'Workstation sanitation and stocking',
            'Train new employees in various positions',
            'Maintain service and courtesy standards during stressful situations',
        ],
        img: ImgWendys,
    }
];
