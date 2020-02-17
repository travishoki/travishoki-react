const imgChatbooks = require('../../../images/experience/chatbooks.png');
const imgOvestock = require('../../../images/experience/overstock.png');
const imgRoomChoice = require('../../../images/experience/roomchoice.png');
const imgEnspark = require('../../../images/experience/enspark.png');
const imgWendys = require('../../../images/experience/wendys.png');
const imgAllAm = require('../../../images/experience/all-american-sod-farms.png');

const ResumeData = [
    {
        title: 'Chatbooks',
        position: 'Web Developer',
		dateStart: 'Mar 2019',
        dateEnd: 'Present',
        tasks: [
			'Create/maintain web features and projects for the Books and Cards teams',
			'Actively convert Angular JS to React JS while keeping product code stable',
			'Node JS Server-side rendering for SEO and optimization'
        ],
        img: imgChatbooks
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
			'Pioneer affiliate links program'
        ],
        img: imgOvestock
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
            'Finding ways to speedup and enhance the user experience of the software'
        ],
        img: imgRoomChoice
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
            'Custom banner and eLearning course development in Adobe Flash AS3'
        ],
        img: imgEnspark
    },
    {
        title: 'All American Sod Farms',
        position: 'Office Manager / Web Master',
        dateStart: 'Jun 2011',
        dateEnd: 'Jun 2012',
        tasks: [
            'Scheduling and dispatching deliveries',
            'Bill collecting and register operation',
            'Customer service and clerical work'
        ],
        img: imgAllAm
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
            'Maintain service and courtesy standards during stressful situations'
        ],
        img: imgWendys
    }
];

export default ResumeData;
