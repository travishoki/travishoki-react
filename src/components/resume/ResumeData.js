const imgOvestock = require('../../../images/experience/overstock.png');
const imgRoomChoice = require('../../../images/experience/roomchoice.png');
const imgEnspark = require('../../../images/experience/enspark.png');
const imgWendys = require('../../../images/experience/wendys.png');
const imgAllAm = require('../../../images/experience/all-american-sod-farms.png');

const ResumeData = [
    {
        title: 'Overstock.com',
        position: 'Front-end Developer',
        dateStart: 'Sept 2015',
        dateEnd: 'Present',
        tasks: [
            'Pioneer affiliate links program',
            'Enhancements to customer reviews functionality',
            'Manage the Front-End for all user generated content',
            'Manage pixels for retargeting and third party integrations'
        ],
        img: imgOvestock
    },
    {
        title: 'Room Choice',
        position: 'Full Stack Web-App Developer',
        dateStart: 'Dec 2014',
        dateEnd: 'Sept 2015',
        tasks: [
            'Query user data via Python and Django',
            'Manage and enhance front-end via Angular, CoffeeScript, and Classy',
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
