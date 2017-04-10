const imgOvestock = require('../../../images/websites/overstock-thumbnail.jpg');
const imgTrulyLindseyPhotography = require('../../../images/websites/truly-lindsey-photography-thumbnail.jpg');
const imgRoomChoice = require('../../../images/websites/roomchoice-thumbnail.jpg');
const imgRookeCapitalManagement = require('../../../images/websites/rooke-capital-management.jpg');
const imgRgdjanitorial = require('../../../images/websites/rgdjanitorial-thumbnail.jpg');
const imgWedding = require('../../../images/websites/wedding-thumbnail.jpg');
const imgEricAroca = require('../../../images/websites/eric-aroca-thumbnail.jpg');
const imgSaintsAndSinners = require('../../../images/websites/saints-and-sinners-thumbnail.jpg');
const imgNewLifeRecovery = require('../../../images/websites/new-life-recovery-thumbnail.jpg');
const imgCreativeMediaEducation = require('../../../images/websites/creative-media-education-thumbnail.jpg');
const imgLavavolt = require('../../../images/websites/lavavolt-thumbnail.jpg');
const imgEnsparkLms = require('../../../images/websites/enspark-lms-thumbnail.jpg');
const imgFirstMile = require('../../../images/websites/first-mile-thumbnail.jpg');
const imgThePuttingTour = require('../../../images/websites/the-putting-tour-thumbnail.jpg');
const imgWininsights = require('../../../images/websites/wininsights-thumbnail.jpg');
const imgBarrier = require('../../../images/websites/barrier-thumbnail.jpg');
const imgEnspark = require('../../../images/websites/enspark-thumbnail.jpg');
const imgUtahCasa = require('../../../images/websites/utah-casa-thumbnail.jpg');
const imgParadigmLife = require('../../../images/websites/paradigm-life-thumbnail.jpg');
const imgDebtFreePlanning = require('../../../images/websites/debt-free-planning-thumbnail.jpg');
const imgSouthamConsulting = require('../../../images/websites/southam-consulting-thumbnail.jpg');

const ProjectsData = [
    {
        title: 'Overstock.com',
        subtitle: 'Reviews breakout',
        url: 'http://overstock.com/',
        desc : 'Allowing a user to leave rating only reviews.',
        img: imgOvestock,
        contributions: ['Coordinate deployments with multiple departments.'],
        techs: ['HTML','LESS-CSS','JavaScript','jQuery'],
        live: true
    },
    {
        title: 'Truly Lindsey Photography',
        subtitle: '',
        url: 'http://trulylindseyphotography.com/',
        desc : 'Truly Lindsey Photography is my wife\'s photography company. I am helping to brand her company.',
        img: imgTrulyLindseyPhotography,
        contributions: ['Wordpress customization, design and branding.'],
        techs: ['WordPress','HTML','CSS'],
        live: true
    },
    {
        title: 'Room Choice',
        subtitle: '',
        url: 'http://roomchoice.com/',
        desc : 'Room Choice is a student housing property management software that allows you to see room assignments and reservation requests.',
        img: imgRoomChoice,
        contributions: ['Full Stack Development','Django and python','Restful API calls.'],
        techs: ['Python','AngularJs','JavaScript','HTML','LESS-CSS'],
        live: true
    },
    {
        title: 'Rooke Capital Management',
        subtitle: '',
        url: 'http://rookecapital.com/',
        desc : 'This is a steady downhill race perfect for first time runners, as well as those looking to improve their time. Fun to be had includes saints and sinners aid stations and heaven and heck finish lines.',
        img: imgRookeCapitalManagement,
        contributions: ['Creationg of registration form','authorize.net intergration','customization of WordPress theme.'],
        techs: ['PHP','WordPress','JavaScript','jQuery','HTML','CSS'],
        live: true
    },
    {
        title: 'RGDJanitorial',
        subtitle: '',
        url: 'http://rgdjanitorial.com/',
        desc : 'RGD Janitorial has been providing Janitorial Services in Utah for over 17 years.',
        img: imgRgdjanitorial,
        contributions: ['Wordpress theme customization','WP Advanced Custom Fields','Design'],
        techs: ['PHP','WordPress','JavaScript','HTML','CSS'],
        live: true
    },
    {
        title: 'Wedding Website',
        subtitle: '',
        url: 'http://wedding.hokihappenings.com/',
        desc : 'This is the wedding website that I made for my wedding.',
        img: imgWedding,
        contributions: ['Site design and development'],
        techs: ['AngularJs','JavaScript','HTML','SCSS'],
        live: true
    },
    {
        title: 'Eric Aroca',
        subtitle: '',
        url: 'http://ericaroca.com/',
        desc : 'This is a steady downhill race perfect for first time runners, as well as those looking to improve their time. Fun to be had includes saints and sinners aid stations and heaven and heck finish lines.',
        img: imgEricAroca,
        contributions: ['Creationg of registration form','customization of WordPress theme.'],
        techs: ['PHP','WordPress','JavaScript','jQuery','HTML','CSS'],
        live: true
    },
    {
        title: 'Saints and Sinners Half Marathon and Team Relay',
        subtitle: '',
        url: 'http://saintsandsinnershalf.com/',
        desc : 'This is a steady downhill race perfect for first time runners, as well as those looking to improve their time. Fun to be had includes saints and sinners aid stations and heaven and heck finish lines.',
        img: imgSaintsAndSinners,
        contributions: ['Creationg of registration form, authorize.net intergration|customization of WordPress theme.'],
        techs: ['PHP|JavaScript|jQuery|HTML|CSS'],
        live: true
    },
    {
        title: 'New Life Recovery',
        subtitle: '',
        url: 'http://www.newlife-recovery.org/',
        desc : 'Creative Media Group is a full service media production house based in Orem|Utah. We specialize in high quality digital video production, post-production, and motion graphics.',
        img: imgNewLifeRecovery,
        contributions: ['Customization of WordPress theme.'],
        techs: ['PHP|WordPress|JavaScript|jQuery|HTML|CSS'],
        live: false
    },
    {
        title: 'Creative Media Education',
        subtitle: '',
        url: 'http://cmeducation.org/',
        desc : 'Creative Media Group is a full service media production house based in Orem, Utah. We specialize in high quality digital video production, post-production, and motion graphics.',
        img: imgCreativeMediaEducation,
        contributions: ['Stripe Integration|Front-end and Back-end|integrating courses the custom LMS.'],
        techs: ['AngularJs|PHP|JavaScript|jQuery|HTML|CSS'],
        live: false
    },
    {
        title: 'LavaVolt',
        subtitle: '',
        url: 'http://lavavolt.com',
        desc : 'LavaVolt is an online film festival and digital distribution solution for independent filmmakers.',
        img: imgLavavolt,
        contributions: ['All of the back-end|everything from user accounts, to film uploading, to querying from the film library.'],
        techs: ['PHP|JavaScript|jQuery|HTML|CSS'],
        live: true
    },
    {
        title: 'Enspark LMS',
        subtitle: '',
        url: 'http://lms.enspark.com',
        desc : 'From Leadership Skills to Time Management, our interactive e-Learning courses make people better.',
        img : imgEnsparkLms,
        contributions: ['Finished the second version of the LMS. Restructured the user account and course tracking database. Made information requests dynamic with page jQuery AJAX.'],
        techs: ['PHP|JavaScript|jQuery|HTML|CSS'],
        live: true
    },
    {
        title: 'First Mile',
        subtitle: '',
        url: 'http://enspark.net/internationalfulfillment/',
        desc : 'We provide discounted integrated solutions to ship your products or your customers products for less money.',
        img : imgFirstMile,
        contributions: ['All back-end. Worked with the Flash developer sending information to and from the mobile app. Creating a delivery route system, "text message like" system, and automated tasks.'],
        techs: ['PHP|AngularJs|JavaScript|jQuery|HTML|CSS'],
        live: true
    },
    {
        title: 'The Putting Tour',
        subtitle: '',
        url: 'http://theputtingtour.com',
        desc : 'The Putting Tour at Qualifiers Golf will train your nervous system by challenging you with dozens of such putts in a 30 minute round. It really works!',
        img : imgThePuttingTour,
        contributions: ['Created the user account system, sending information to and from the mobile app. Helped to develop the mobile app for the golf kiosk, as well as the bracket system for the online competitions.'],
        techs: ['PHP|JavaScript|jQuery|HTML|CSS'],
        live: true
    },
    {
        title: 'WinInsights',
        subtitle: '',
        url: 'http://wininsights.com',
        desc : 'WIN Insights is a Diversity and Inclusion - focused learning management system that delivers training, networking, tools, resources, and analytics.',
        img : imgWininsights,
        contributions: ['Hand created a custom blog for communities to converse about their executive and cultural groups. Also created a custom slider, and several WordPress pages.'],
        techs: ['PHP|JavaScript|jQuery|HTML|CSS'],
        live: true
    },
    {
        title: 'Barrier Pest Control',
        subtitle: '',
        url: 'http://barrierpc.com',
        desc : 'Barrier Pest Control will proactively conquer your existing pest populations and prevent future invasions.',
        img : imgBarrier,
        contributions: ["Created a cronjob to store customer transactions in a MYSQL database then email a list of those transactions in a daily report to the company owners. Front-end fixes to the WordPress site, fixing styles and updating images. "],
        techs: ['JavaScript|jQuery|HTML|CSS'],
        live: true
    },
    {
        title: 'Enspark',
        subtitle: '',
        url: 'http://enspark.com',
        desc : 'From Leadership Skills to Time Management, our interactive e-Learning courses make people better.',
        img : imgEnspark,
        contributions: ['Helping to push the second version of Enspark.com live. Implementing a feed, creating forms, and various front-end fixes.'],
        techs: ['JavaScript|jQuery|HTML|CSS'],
        live: true
    },
    {
        title: 'Utah Casa',
        subtitle: '',
        url: 'http://utahcasa.org/',
        desc : 'Casa is a volunteer organization that empowers everyday citizens with the ability to transform the lives of abused and neglected children.',
        img : imgUtahCasa,
        contributions: ['Helped to fix the blog functionality and structure in WordPress as well as front-end fixes.'],
        techs: ['PHP|HTML|CSS'],
        live: true
    },
    {
        title: 'Paradigm Life',
        subtitle: '',
        url: 'http://paradigmlife.net/',
        desc : 'Infinite Banking is a concept that allows individuals to utilize Permanent Life Insurance in ways that most individuals and even insurance professionals could never have imagined.',
        img : imgParadigmLife,
        contributions: ['Helped with the WordPress theme and structure architecture.'],
        techs: ['PHP|JavaScript|jQuery|HTML|CSS'],
        live: true
    },
    {
        title: 'Debt Free Planning',
        subtitle: '',
        url: 'http://debt-free-planning.com',
        desc : 'Get a Free Online Report and recommended solution to your debt problem.',
        img : imgDebtFreePlanning,
        contributions: ['Front-end construction. Creating a email form for user information requests.'],
        techs: ['PHP,Less-CSS|HTML|JavaScript'],
        live: false
    },
    {
        title: 'Southam Consulting',
        subtitle: '',
        url: 'http://southamconsulting.net',
        desc : 'Southam Consulting is a consortium of business specialists in several states who have extensive experience and expertise in helping clients achieve peak performance.',
        img : imgSouthamConsulting,
        contributions: ['Creating a email form for user information requests. Other front-end fixes.'],
        techs: ['PHP|CSS|HTML|JavaScript'],
        live: true
    }
];

export default ProjectsData;
