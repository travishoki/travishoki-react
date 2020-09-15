export const filterList = [
    'angularjs',
    'amp-bind',
    'css',
    'coffee-script',
    'django',
    'grunt',
    'handlebarsjs',
    'html',
    'javascript',
    'jquery',
    'less-css',
    'nodejs',
    'php',
    'python',
    'redux',
    'reactjs',
    'sql',
    'webpack',
    'wordpress'
];

export const ProjectsData = [
    {
        title: 'Overstock.com',
        subtitle: 'AMP Featured Product',
        url: 'http://www.overstock.com/',
        desc: 'A version of the search/navigation page was build as an Accelerate Mobile Page for fast loading on mobile devices and for SEO.',
        key: 'overstock-amp-featured-product',
        company: 'overstock',
        contributions: ['Duplicate logic from the mobile product page to create the featured product section on the Search AMP page. Use amp-bind for event triggers when selecting options. Reduce and optimize CSS to fit withing AMP specifications.'],
        techs: ['html', 'javascript', 'amp-bind', 'webpack', 'less-css'],
        learned: '',
        live: false
    },
    {
        title: 'Overstock.com',
        subtitle: 'Admin Portal',
        url: 'http://www.overstock.com/',
        desc: 'Internal SEO tool that enables business employees to do things such as manipulte seo titles for taxonomy display names.',
        key: 'overstock-admin-portal',
        company: 'overstock',
        contributions: ['I incorporated react router and set the project up to be extendable with future pages/tools.'],
        techs: ['reactjs', 'redux', 'nodejs', 'html', 'less-css', 'javascript', 'webpack'],
        learned: 'I got a deeper understanding of the the Redux flow.',
        live: false
    },
    {
        title: 'Overstock.com',
        subtitle: 'Hackathon 2017',
        url: 'https://www.overstock.com/94864/static.html',
        desc: "Project for the Overstock Hackathon. It's goal was to increase the amount of reviews and user generated images.",
        key: 'overstock-hackathon-2017',
        company: 'overstock',
        contributions: ['The initial project was build within a 24 hour period. Our project was chosen as a finalist. We had to get the project to production level quality withing a 3 week time period. It was put into a 50/50 test where user conversion selected the winner. This project really pushed to jump into new stacks that I had never done before and to prioritize time.'],
        techs: ['html', 'less-css', 'javascript', 'reactjs', 'redux', 'jquery', 'webpack'],
        learned: '',
        live: true
    },
    {
        title: 'Overstock.com',
        subtitle: 'Rewards for Reviews',
        url: 'https://www.overstock.com/rewards-for-reviews',
        desc: 'Reward users for leaving a qualifying review.',
        key: 'overstock-rewards-for-reviews',
        company: 'overstock',
        contributions: ['Coordinate deployments with multiple departments.'],
        techs: ['html', 'less-css', 'javascript', 'jquery', 'handlebarsjs', 'grunt'],
        learned: '',
        live: true
    },
    {
        title: 'Overstock.com',
        subtitle: 'Responsive See All Reviews Page',
        url: 'http://www.overstock.com/',
        desc: 'Site that resizes down to mobile devices',
        key: 'overstock-responsive-sarp',
        company: 'overstock',
        contributions: ['I implemented an AB test that resulted in lift during a 2 week period.'],
        techs: ['html', 'less-css', 'javascript', 'jquery', 'handlebarsjs', 'grunt'],
        learned: 'The A/B site test origianlly failed due to routing errors. I had to be persistant at keeping the conversation going and getting help from the right people.',
        live: true
    },
    {
        title: 'Overstock.com',
        subtitle: 'See All Reviews Page Mobile Add To Cart',
        url: 'http://www.overstock.com/',
        desc: 'On mobile devices ad and add to cart popup.',
        key: 'overstock-sarp-mobile-atc',
        company: 'overstock',
        contributions: ['Componentize the Add To Cart functionality into a react module.'],
        techs: ['html', 'less-css', 'javascript', 'reactjs'],
        learned: 'This was my first production level ReactJs work.',
        live: true
    },
    {
        title: 'Overstock.com',
        subtitle: 'Reviews Breakout',
        url: 'http://www.overstock.com/',
        desc: 'Allowing a user to leave rating only reviews.',
        key: 'overstock-reviews-breakout',
        company: 'overstock',
        contributions: ['Coordinate deployments with multiple departments.'],
        techs: ['html', 'less-css', 'javascript', 'handlebarsjs', 'jquery'],
        learned: 'This project was a huge undertaking. Perviously at other companies I had been full-stack. This project helped me understand the limitations and resonsibilities of being strictly front-end. I had to learn to coordinate with the back-end and understand what our roles are.',
        live: true
    },
    {
        title: 'Overstock.com',
        subtitle: 'Star Ratings Color',
        url: 'http://www.overstock.com/',
        desc: 'Rating reviews stars',
        key: 'overstock-rating-review-stars',
        company: 'overstock',
        contributions: ["I was tasked to change all of the star ratings from red to gold. That sounds like a simple task but the amount of coordination was intense. This was one of my first tasks in Overstock's shoppting site, and at a company of this scale. I had to learn the process of many teams, it was a good initiation for me."],
        techs: ['html', 'less-css', 'javascript', 'handlebarsjs', 'jquery'],
        learned: "I was able to get a deep dive into Overstock's processes across many different teams.",
        live: true
    },
    {
        title: 'Overstock.com',
        subtitle: 'Affiliate Links',
        url: 'http://www.overstock.com/',
        desc: 'Embedable affiliate links',
        key: 'oversock-affiliate-links',
        company: 'overstock',
        contributions: ['Took the basic wordpress plugin and rearchitected it.'],
        techs: ['javascript', 'jquery', 'php', 'html', 'less-css', 'grunt'],
        learned: '',
        live: true
    },
    {
        title: 'Truly Lindsey Photography',
        subtitle: '',
        url: 'http://www.trulylindseyphotography.com/',
        desc: 'Truly Lindsey Photography is my wife\'s photography company. I am helping to brand her company.',
        key: 'truly-lindsey-photography',
        company: 'truly-lindsey-photography',
        contributions: ['wordpress customization, design and branding.'],
        techs: ['wordpress', 'html', 'css'],
        learned: '',
        live: true
    },
    {
        title: 'Room Choice',
        subtitle: '',
        url: 'http://www.roomchoice.com/',
        desc: 'Room Choice is a student housing property management software that allows you to see room assignments and reservation requests.',
        key: 'roomchoice',
        company: 'roomchoice',
        contributions: ['Full Stack Development', 'Django and python', 'Restful API calls.'],
        techs: ['python', 'django', 'angularjs', 'javascript', 'html', 'less-css'],
        learned: 'At Roomchoice I got my first experience with external developers. I had to learn to communicate effectily with a lot of details. | Previous to this company I had mostly done custom freelance-type work. This was my first time working as an internal dedicated team. I was able to help optimize, cleanup, and really build structure.',
        live: true
    },
    {
        title: 'Rooke Capital Management',
        subtitle: '',
        url: 'http://www.rookecapital.com/',
        desc: 'This is a steady downhill race perfect for first time runners, as well as those looking to improve their time. Fun to be had includes saints and sinners aid stations and heaven and heck finish lines.',
        key: 'rooke-capital-management',
        company: 'rooke-capital-management',
        contributions: ['Creationg of registration form', 'authorize.net intergration', 'customization of wordpress theme.'],
        techs: ['php', 'wordpress', 'javascript', 'jquery', 'html', 'css'],
        learned: '',
        live: true
    },
    {
        title: 'RGDJanitorial',
        subtitle: '',
        url: 'http://www.rgdjanitorial.com/',
        desc: 'RGD Janitorial has been providing Janitorial Services in Utah for over 17 years.',
        key: 'rgdjanitorial',
        company: 'rgdjanitorial',
        contributions: ['wordpress theme customization', 'WP Advanced Custom Fields', 'Design'],
        techs: ['php', 'wordpress', 'javascript', 'html', 'css'],
        learned: '',
        live: true
    },
    {
        title: 'Wedding Website',
        subtitle: '',
        url: 'http://www.wedding.hokihappenings.com/',
        desc: 'This is the wedding website that I made for my wedding.',
        key: 'wedding',
        company: 'wedding',
        contributions: ['Site design and development'],
        techs: ['angularjs', 'javascript', 'html', 'Scss'],
        learned: 'This was a personal project of mine. I really wanted to present information about my wedding in a nice way.',
        live: true
    },
    {
        title: 'Eric Aroca',
        subtitle: '',
        url: 'http://www.ericaroca.com/',
        desc: 'This is a steady downhill race perfect for first time runners, as well as those looking to improve their time. Fun to be had includes saints and sinners aid stations and heaven and heck finish lines.',
        key: 'eric-aroca',
        company: 'eric-aroca',
        contributions: ['Creationg of registration form', 'customization of wordpress theme.'],
        techs: ['php', 'wordpress', 'javascript', 'jquery', 'html', 'css'],
        learned: '',
        live: true
    },
    {
        title: 'Saints and Sinners Half Marathon and Team Relay',
        subtitle: '',
        url: 'http://www.saintsandsinnershalf.com/',
        desc: 'This is a steady downhill race perfect for first time runners, as well as those looking to improve their time. Fun to be had includes saints and sinners aid stations and heaven and heck finish lines.',
        key: 'saints-and-sinners',
        company: 'saints-and-sinners',
        contributions: ['Creationg of registration form, authorize.net intergration', 'customization of wordpress theme.'],
        techs: ['php', 'javascript', 'jquery', 'HTML', 'css'],
        learned: '',
        live: true
    },
    {
        title: 'New Life Recovery',
        subtitle: '',
        url: 'http://www.newlife-recovery.org/',
        desc: 'Creative Media Group is a full service media production house based in Orem, Utah. We specialize in high quality digital video production, post-production, and motion graphics.',
        key: 'new-life-recovery',
        company: 'new-life-recovery',
        contributions: ['Customization of wordpress theme.'],
        techs: ['php', 'wordpress', 'javascript', 'jquery', 'HTML', 'css'],
        learned: '',
        live: false
    },
    {
        title: 'Creative Media Education',
        subtitle: '',
        url: 'http://www.cmeducation.org/',
        desc: 'Creative Media Group is a full service media production house based in Orem, Utah. We specialize in high quality digital video production, post-production, and motion graphics.',
        key: 'creative-media-education',
        company: 'creative-media-education',
        contributions: ['Stripe Integration', 'Front-end and Back-end', 'integrating courses the custom LMS.'],
        techs: ['angularjs', 'php', 'javascript', 'jquery', 'HTML', 'css'],
        learned: '',
        live: false
    },
    {
        title: 'LavaVolt',
        subtitle: '',
        url: 'http://www.lavavolt.com',
        desc: 'LavaVolt is an online film festival and digital distribution solution for independent filmmakers.',
        key: 'lavavolt',
        company: 'lavavolt',
        contributions: ['All of the back-end', 'everything from user accounts, to film uploading, to querying from the film library.'],
        techs: ['php', 'javascript', 'jquery', 'HTML', 'css'],
        learned: '',
        live: true
    },
    {
        title: 'Enspark LMS',
        subtitle: '',
        url: 'http://www.lms.enspark.com',
        desc: 'From Leadership Skills to Time Management, our interactive e-Learning courses make people better.',
        key: 'enspark-lms',
        company: 'enspark',
        contributions: ['Finished the second version of the LMS. Restructured the user account and course tracking database. Made information requests dynamic with page jquery AJAX.'],
        techs: ['php', 'javascript', 'jquery', 'HTML', 'css'],
        learned: 'This is one of my first full-stack projects.',
        live: true
    },
    {
        title: 'First Mile',
        subtitle: '',
        url: 'http://www.enspark.net/internationalfulfillment/',
        desc: 'We provide discounted integrated solutions to ship your products or your customers products for less money.',
        key: 'first-mile',
        company: 'first-mile',
        contributions: ['All back-end. Worked with the Flash developer sending information to and from the mobile app. Creating a delivery route system, "text message like" system, and automated tasks.'],
        techs: ['php', 'angularjs', 'javascript', 'jquery', 'HTML', 'css'],
        learned: '',
        live: true
    },
    {
        title: 'The Putting Tour',
        subtitle: '',
        url: 'http://www.theputtingtour.com',
        desc: 'The Putting Tour at Qualifiers Golf will train your nervous system by challenging you with dozens of such putts in a 30 minute round. It really works!',
        key: 'the-putting-tour',
        company: 'the-putting-tour',
        contributions: ['Created the user account system, sending information to and from the mobile app. Helped to develop the mobile app for the golf kiosk, as well as the bracket system for the online competitions.'],
        techs: ['php', 'javascript', 'jquery', 'HTML', 'css'],
        learned: '',
        live: true
    },
    {
        title: 'WinInsights',
        subtitle: '',
        url: 'http://www.wininsights.com',
        desc: 'WIN Insights is a Diversity and Inclusion - focused learning management system that delivers training, networking, tools, resources, and analytics.',
        key: 'wininsights',
        company: 'wininsights',
        contributions: ['Hand created a custom blog for communities to converse about their executive and cultural groups. Also created a custom slider, and several wordpress pages.'],
        techs: ['php', 'javascript', 'jquery', 'HTML', 'css'],
        learned: '',
        live: true
    },
    {
        title: 'Barrier Pest Control',
        subtitle: '',
        url: 'http://www.barrierpc.com',
        desc: 'Barrier Pest Control will proactively conquer your existing pest populations and prevent future invasions.',
        key: 'barrier',
        company: 'barrier',
        contributions: ["Created a cronjob to store customer transactions in a MYSQL database then email a list of those transactions in a daily report to the company owners. Front-end fixes to the wordpress site, fixing styles and updating images. "],
        techs: ['javascript', 'jquery', 'HTML', 'css'],
        learned: '',
        live: true
    },
    {
        title: 'Enspark',
        subtitle: '',
        url: 'http://www.enspark.com',
        desc: 'From Leadership Skills to Time Management, our interactive e-Learning courses make people better.',
        key: 'enspark',
        company: 'enspark',
        contributions: ['Helping to push the second version of Enspark.com live. Implementing a feed, creating forms, and various front-end fixes.'],
        techs: ['javascript', 'jquery', 'HTML', 'css'],
        learned: '',
        live: true
    },
    {
        title: 'Utah Casa',
        subtitle: '',
        url: 'http://www.utahcasa.org/',
        desc: 'Casa is a volunteer organization that empowers everyday citizens with the ability to transform the lives of abused and neglected children.',
        key: 'utah-casa',
        company: 'utah-casa',
        contributions: ['Helped to fix the blog functionality and structure in wordpress as well as front-end fixes.'],
        techs: ['php', 'HTML', 'css'],
        learned: '',
        live: true
    },
    {
        title: 'Paradigm Life',
        subtitle: '',
        url: 'http://www.paradigmlife.net/',
        desc: 'Infinite Banking is a concept that allows individuals to utilize Permanent Life Insurance in ways that most individuals and even insurance professionals could never have imagined.',
        key: 'paradigm-life',
        company: 'paradigm-life',
        contributions: ['Helped with the wordpress theme and structure architecture.'],
        techs: ['php', 'javascript', 'jquery', 'HTML', 'css'],
        learned: '',
        live: true
    },
    {
        title: 'Debt Free Planning',
        subtitle: '',
        url: 'http://www.debt-free-planning.com',
        desc: 'Get a Free Online Report and recommended solution to your debt problem.',
        key: 'debt-free-planning',
        company: 'debt-free-planning',
        contributions: ['Front-end construction. Creating a email form for user information requests.'],
        techs: ['php', 'less-css', 'HTML', 'javascript'],
        learned: '',
        live: false
    },
    {
        title: 'Southam Consulting',
        subtitle: '',
        url: 'http://www.southamconsulting.net',
        desc: 'Southam Consulting is a consortium of business specialists in several states who have extensive experience and expertise in helping clients achieve peak performance.',
        key: 'southam-consulting',
        company: 'southam-consulting',
        contributions: ['Creating a email form for user information requests. Other front-end fixes.'],
        techs: ['php', 'css', 'HTML', 'javascript'],
        learned: '',
        live: true
    }
];
