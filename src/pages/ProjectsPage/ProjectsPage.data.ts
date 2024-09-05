import {
	AMP,
	ANGULAR_JS,
	COFFEE_SCRIPT,
	CSS,
	DJANGO,
	GRUNT,
	HANDLEBARS_JS,
	HTML,
	JAVSCRIPT,
	JQUERY,
	LESS_CSS,
	NODE_JS,
	PHP,
	PYTHON,
	REACT_JS,
	REDUX,
	SCSS,
	SQL,
	TechKeys,
	WEBPACK,
	WORDPRESS,
} from '../../const/Tech.const';

export const FILTER_LIST: (keyof TechKeys)[] = [
	AMP,
	ANGULAR_JS,
	COFFEE_SCRIPT,
	CSS,
	DJANGO,
	GRUNT,
	HANDLEBARS_JS,
	HTML,
	JAVSCRIPT,
	JQUERY,
	LESS_CSS,
	NODE_JS,
	PHP,
	PYTHON,
	REACT_JS,
	REDUX,
	SCSS,
	SQL,
	WEBPACK,
	WORDPRESS,
];

export const PROJECTS_DATA: ProjectType[] = [
	{
		company: 'hoki-skateboards',
		contributions: [
			'React Native development',
			'UI/UX Design',
			'Character illustrations',
		],
		desc: 'Teaching myself React Native as a passion project',
		itemKey: 'hoki-skateboards-react-native',
		learned: '',
		live: false,
		subtitle: 'React Native Game',
		techs: [REACT_JS, CSS],
		title: 'Hoki Skateboards',
		url: 'https://www.hokiskateboards.com/app/',
	},
	{
		company: 'chatbooks',
		contributions: [
			"Tie into existing API's to create a new book.",
			'Create reusable UI components',
		],
		desc: 'Revamp existing create book page with new UI written in ReactJs',
		itemKey: 'chatbooks-create-page',
		learned: '',
		live: true,
		subtitle: 'Book Creation',
		techs: [REACT_JS, REDUX, JAVSCRIPT, HTML, SCSS],
		title: 'Chatbooks.com',
		url: 'https://chatbooks.com/app/create?page=web_custom_explainer',
	},
	{
		company: 'chatbooks',
		contributions: [
			'Create Branch links for redirecting to IOS or android apps.',
			'Create screen for selecting the data source as well as a screen platform specific pages info.',
		],
		desc: "Helping to create individual quickflows for creating platform specific custom books. Customers will come to the quickflow from Instagrams's store front, then create a book by picking a data source.",
		itemKey: 'chatbooks-quick-flow-sources',
		learned: '',
		live: false,
		subtitle: 'Cards Quick Flow Sources',
		techs: [REACT_JS, REDUX, JAVSCRIPT, HTML, SCSS],
		title: 'Chatbooks.com',
	},
	{
		company: 'chatbooks',
		contributions: ["Tie into existing API's to allow for layflat."],
		desc: 'Enable Premium layflat book types for the desktop. This was a break through for the company as it is a better experience to create premium laylfat sized books at a desktop size.',
		itemKey: 'chatbooks-layflat',
		learned: '',
		live: true,
		subtitle: 'Premium Layflat',
		techs: [REACT_JS, REDUX, JAVSCRIPT, HTML, SCSS],
		title: 'Chatbooks.com',
		url: 'https://chatbooks.com/app/create?page=web_custom_explainer',
	},
	{
		company: 'chatbooks',
		contributions: [
			'Server-side rendering for SEO value',
			'Work closely with designers and marketing',
			'Integrating with new APIS',
		],
		desc: 'Creating cards taxonomy pages with categories and search filters.',
		itemKey: 'chatbooks-cards-taxonomy',
		learned: '',
		live: false,
		subtitle: 'Cards Taxonomy Pages',
		techs: [REACT_JS, REDUX, JAVSCRIPT, HTML, SCSS],
		title: 'Chatbooks.com',
	},
	{
		company: 'overstock',
		contributions: [
			'Duplicate logic from the mobile product page to create the featured product section on the Search AMP page. Use amp-bind for event triggers when selecting options. Reduce and optimize CSS to fit withing AMP specifications.',
		],
		desc: 'A version of the search/navigation page was build as an Accelerate Mobile Page for fast loading on mobile devices and for SEO.',
		itemKey: 'overstock-amp-featured-product',
		learned: '',
		live: false,
		subtitle: 'AMP Featured Product',
		techs: [HTML, JAVSCRIPT, AMP, WEBPACK, LESS_CSS],
		title: 'Overstock.com',
		url: 'http://www.overstock.com/',
	},
	{
		company: 'overstock',
		contributions: [
			'I incorporated react router and set the project up to be extendable with future pages/tools.',
		],
		desc: 'Internal SEO tool that enables business employees to do things such as manipulte seo titles for taxonomy display names.',
		itemKey: 'overstock-admin-portal',
		learned: 'I got a deeper understanding of the the Redux flow.',
		live: false,
		subtitle: 'Admin Portal',
		techs: [REACT_JS, REDUX, NODE_JS, HTML, LESS_CSS, JAVSCRIPT, WEBPACK],
		title: 'Overstock.com',
		url: 'http://www.overstock.com/',
	},
	{
		company: 'overstock',
		contributions: [
			'The initial project was build within a 24 hour period. Our project was chosen as a finalist. We had to get the project to production level quality withing a 3 week time period. It was put into a 50/50 test where user conversion selected the winner. This project really pushed to jump into new stacks that I had never done before and to prioritize time.',
		],
		desc: "Project for the Overstock Hackathon. It's goal was to increase the amount of reviews and user generated images.",
		itemKey: 'overstock-hackathon-2017',
		learned: '',
		live: true,
		subtitle: 'Hackathon 2017',
		techs: [HTML, LESS_CSS, JAVSCRIPT, REACT_JS, REDUX, JQUERY, WEBPACK],
		title: 'Overstock.com',
		url: 'https://www.overstock.com/94864/static.html',
	},
	{
		company: 'overstock',
		contributions: ['Coordinate deployments with multiple departments.'],
		desc: 'Reward users for leaving a qualifying review.',
		itemKey: 'overstock-rewards-for-reviews',
		learned: '',
		live: true,
		subtitle: 'Rewards for Reviews',
		techs: [HTML, LESS_CSS, JAVSCRIPT, JQUERY, HANDLEBARS_JS, GRUNT],
		title: 'Overstock.com',
		url: 'https://www.overstock.com/rewards-for-reviews',
	},
	{
		company: 'overstock',
		contributions: [
			'I implemented an AB test that resulted in lift during a 2 week period.',
		],
		desc: 'Site that resizes down to mobile devices',
		itemKey: 'overstock-responsive-sarp',
		learned:
			'The A/B site test origianlly failed due to routing errors. I had to be persistant at keeping the conversation going and getting help from the right people.',
		live: true,
		subtitle: 'Responsive See All Reviews Page',
		techs: [HTML, LESS_CSS, JAVSCRIPT, JQUERY, HANDLEBARS_JS, GRUNT],
		title: 'Overstock.com',
		url: 'http://www.overstock.com/',
	},
	{
		company: 'overstock',
		contributions: [
			'Componentize the Add To Cart functionality into a react module.',
		],
		desc: 'On mobile devices ad and add to cart popup.',
		itemKey: 'overstock-sarp-mobile-atc',
		learned: 'This was my first production level ReactJs work.',
		live: true,
		subtitle: 'See All Reviews Page Mobile Add To Cart',
		techs: [HTML, LESS_CSS, JAVSCRIPT, REACT_JS],
		title: 'Overstock.com',
		url: 'http://www.overstock.com/',
	},
	{
		company: 'overstock',
		contributions: ['Coordinate deployments with multiple departments.'],
		desc: 'Allowing a user to leave rating only reviews.',
		itemKey: 'overstock-reviews-breakout',
		learned:
			'This project was a huge undertaking. Perviously at other companies I had been full-stack. This project helped me understand the limitations and resonsibilities of being strictly front-end. I had to learn to coordinate with the back-end and understand what our roles are.',
		live: true,
		subtitle: 'Reviews Breakout',
		techs: [HTML, LESS_CSS, JAVSCRIPT, HANDLEBARS_JS, JQUERY],
		title: 'Overstock.com',
		url: 'http://www.overstock.com/',
	},
	{
		company: 'overstock',
		contributions: [
			"I was tasked to change all of the star ratings from red to gold. That sounds like a simple task but the amount of coordination was intense. This was one of my first tasks in Overstock's shoppting site, and at a company of this scale. I had to learn the process of many teams, it was a good initiation for me.",
		],
		desc: 'Rating reviews stars',
		itemKey: 'overstock-rating-review-stars',
		learned:
			"I was able to get a deep dive into Overstock's processes across many different teams.",
		live: true,
		subtitle: 'Star Ratings Color',
		techs: [HTML, LESS_CSS, JAVSCRIPT, HANDLEBARS_JS, JQUERY],
		title: 'Overstock.com',
		url: 'http://www.overstock.com/',
	},
	{
		company: 'overstock',
		contributions: ['Took the basic wordpress plugin and rearchitected it.'],
		desc: 'Embedable affiliate links',
		itemKey: 'oversock-affiliate-links',
		learned: '',
		live: true,
		subtitle: 'Affiliate Links',
		techs: [JAVSCRIPT, JQUERY, PHP, HTML, LESS_CSS, GRUNT],
		title: 'Overstock.com',
		url: 'http://www.overstock.com/',
	},
	{
		company: 'lindsey-hoki-photography',
		contributions: ['Wordpress customization', 'Design and branding'],
		desc: "Lindsey Hoki Photography is my wife's photography company. I am helping to brand her company.",
		itemKey: 'lindsey-hoki-photography',
		learned: '',
		live: true,
		subtitle: '',
		techs: [WORDPRESS, HTML, CSS],
		title: 'LindseyHoki.com',
		url: 'http://www.lindseyhoki.com/',
	},
	{
		company: 'hoki-skateboards',
		contributions: [
			'Wordpress customization',
			'Design and branding',
			'Woocommerce integration',
		],
		desc: 'Passion project skateboard company I am helping to brand her company.',
		itemKey: 'hoki-skateboards',
		learned: '',
		live: true,
		subtitle: '',
		techs: [WORDPRESS, PHP, JQUERY, HTML, CSS, REACT_JS],
		title: 'Hoki Skateboards',
		url: 'http://www.hokiskateboards.com/',
	},
	{
		company: 'truly-lindsey-photography',
		contributions: ['Wordpress customization', 'Design and branding'],
		desc: "Truly Lindsey Photography is my wife's photography company. I am helping to brand her company.",
		itemKey: 'truly-lindsey-photography',
		learned: '',
		live: false,
		subtitle: '',
		techs: [WORDPRESS, HTML, CSS],
		title: 'Truly Lindsey Photography',
		url: 'http://www.trulylindseyphotography.com/',
	},
	{
		company: 'roomchoice',
		contributions: [
			'Full Stack Development',
			'Django and python',
			'Restful API calls.',
		],
		desc: 'Room Choice is a student housing property management software that allows you to see room assignments and reservation requests.',
		itemKey: 'roomchoice',
		learned:
			'At Roomchoice I got my first experience with external developers. I had to learn to communicate effectily with a lot of details. | Previous to this company I had mostly done custom freelance-type work. This was my first time working as an internal dedicated team. I was able to help optimize, cleanup, and really build structure.',
		live: true,
		subtitle: '',
		techs: [
			PYTHON,
			DJANGO,
			ANGULAR_JS,
			JAVSCRIPT,
			COFFEE_SCRIPT,
			HTML,
			LESS_CSS,
		],
		title: 'Room Choice',
		url: 'http://www.roomchoice.com/',
	},
	{
		company: 'rooke-capital-management',
		contributions: [
			'Creationg of registration form',
			'authorize.net intergration',
			'customization of wordpress theme.',
		],
		desc: 'This is a steady downhill race perfect for first time runners, as well as those looking to improve their time. Fun to be had includes saints and sinners aid stations and heaven and heck finish lines.',
		itemKey: 'rooke-capital-management',
		learned: '',
		live: true,
		subtitle: '',
		techs: [PHP, WORDPRESS, JAVSCRIPT, JQUERY, HTML, CSS],
		title: 'Rooke Capital Management',
		url: 'http://www.rookecapital.com/',
	},
	{
		company: 'rgdjanitorial',
		contributions: [
			'wordpress theme customization',
			'WP Advanced Custom Fields',
			'Design',
		],
		desc: 'RGD Janitorial has been providing Janitorial Services in Utah for over 17 years.',
		itemKey: 'rgdjanitorial',
		learned: '',
		live: true,
		subtitle: '',
		techs: [PHP, WORDPRESS, JAVSCRIPT, HTML, CSS],
		title: 'RGDJanitorial',
		url: 'http://www.rgdjanitorial.com/',
	},
	{
		company: 'wedding',
		contributions: ['Site design and development'],
		desc: 'This is the wedding website that I made for my wedding.',
		itemKey: 'wedding',
		learned:
			'This was a personal project of mine. I really wanted to present information about my wedding in a nice way.',
		live: true,
		subtitle: '',
		techs: [ANGULAR_JS, JAVSCRIPT, HTML, SCSS],
		title: 'Wedding Website',
		url: 'http://www.wedding.hokihappenings.com/',
	},
	{
		company: 'eric-aroca',
		contributions: [
			'Creationg of registration form',
			'customization of wordpress theme.',
		],
		desc: 'This is a steady downhill race perfect for first time runners, as well as those looking to improve their time. Fun to be had includes saints and sinners aid stations and heaven and heck finish lines.',
		itemKey: 'eric-aroca',
		learned: '',
		live: false,
		subtitle: '',
		techs: [PHP, WORDPRESS, JAVSCRIPT, JQUERY, HTML, CSS],
		title: 'Eric Aroca',
		url: 'http://www.ericaroca.com/',
	},
	{
		company: 'saints-and-sinners',
		contributions: [
			'Creationg of registration form, authorize.net intergration',
			'customization of wordpress theme.',
		],
		desc: 'This is a steady downhill race perfect for first time runners, as well as those looking to improve their time. Fun to be had includes saints and sinners aid stations and heaven and heck finish lines.',
		itemKey: 'saints-and-sinners',
		learned: '',
		live: true,
		subtitle: '',
		techs: [PHP, JAVSCRIPT, JQUERY, HTML, CSS, SQL],
		title: 'Saints and Sinners Half Marathon and Team Relay',
		url: 'http://www.saintsandsinnershalf.com/',
	},
	{
		company: 'new-life-recovery',
		contributions: ['Customization of wordpress theme.'],
		desc: 'Creative Media Group is a full service media production house based in Orem, Utah. We specialize in high quality digital video production, post-production, and motion graphics.',
		itemKey: 'new-life-recovery',
		learned: '',
		live: false,
		subtitle: '',
		techs: [PHP, WORDPRESS, JAVSCRIPT, JQUERY, HTML, CSS],
		title: 'New Life Recovery',
		url: 'http://www.newlife-recovery.org/',
	},
	{
		company: 'creative-media-education',
		contributions: [
			'Stripe Integration',
			'Front-end and Back-end',
			'integrating courses the custom LMS.',
		],
		desc: 'Creative Media Group is a full service media production house based in Orem, Utah. We specialize in high quality digital video production, post-production, and motion graphics.',
		itemKey: 'creative-media-education',
		learned: '',
		live: false,
		subtitle: '',
		techs: [ANGULAR_JS, PHP, JAVSCRIPT, JQUERY, HTML, CSS],
		title: 'Creative Media Education',
		url: 'http://www.cmeducation.org/',
	},
	{
		company: 'lavavolt',
		contributions: [
			'All of the back-end',
			'everything from user accounts, to film uploading, to querying from the film library.',
		],
		desc: 'LavaVolt is an online film festival and digital distribution solution for independent filmmakers.',
		itemKey: 'lavavolt',
		learned: '',
		live: true,
		subtitle: '',
		techs: [PHP, JAVSCRIPT, JQUERY, HTML, CSS],
		title: 'LavaVolt',
		url: 'http://www.lavavolt.com',
	},
	{
		company: 'enspark',
		contributions: [
			'Finished the second version of the LMS. Restructured the user account and course tracking database. Made information requests dynamic with page jquery AJAX.',
		],
		desc: 'From Leadership Skills to Time Management, our interactive e-Learning courses make people better.',
		itemKey: 'enspark-lms',
		learned: 'This is one of my first full-stack projects.',
		live: true,
		subtitle: '',
		techs: [PHP, JAVSCRIPT, JQUERY, HTML, CSS],
		title: 'Enspark LMS',
		url: 'http://www.lms.enspark.com',
	},
	{
		company: 'first-mile',
		contributions: [
			'All back-end. Worked with the Flash developer sending information to and from the mobile app. Creating a delivery route system, "text message like" system, and automated tasks.',
		],
		desc: 'We provide discounted integrated solutions to ship your products or your customers products for less money.',
		itemKey: 'first-mile',
		learned: '',
		live: true,
		subtitle: '',
		techs: [PHP, ANGULAR_JS, JAVSCRIPT, JQUERY, HTML, CSS],
		title: 'First Mile',
		url: 'http://www.enspark.net/internationalfulfillment/',
	},
	{
		company: 'the-putting-tour',
		contributions: [
			'Created the user account system, sending information to and from the mobile app. Helped to develop the mobile app for the golf kiosk, as well as the bracket system for the online competitions.',
		],
		desc: 'The Putting Tour at Qualifiers Golf will train your nervous system by challenging you with dozens of such putts in a 30 minute round. It really works!',
		itemKey: 'the-putting-tour',
		learned: '',
		live: true,
		subtitle: '',
		techs: [PHP, JAVSCRIPT, JQUERY, HTML, CSS],
		title: 'The Putting Tour',
		url: 'http://www.theputtingtour.com',
	},
	{
		company: 'wininsights',
		contributions: [
			'Hand created a custom blog for communities to converse about their executive and cultural groups. Also created a custom slider, and several wordpress pages.',
		],
		desc: 'WIN Insights is a Diversity and Inclusion - focused learning management system that delivers training, networking, tools, resources, and analytics.',
		itemKey: 'wininsights',
		learned: '',
		live: true,
		subtitle: '',
		techs: [PHP, JAVSCRIPT, JQUERY, HTML, CSS],
		title: 'WinInsights',
		url: 'http://www.wininsights.com',
	},
	{
		company: 'barrier',
		contributions: [
			'Created a cronjob to store customer transactions in a MYSQL database then email a list of those transactions in a daily report to the company owners. Front-end fixes to the wordpress site, fixing styles and updating images. ',
		],
		desc: 'Barrier Pest Control will proactively conquer your existing pest populations and prevent future invasions.',
		itemKey: 'barrier',
		learned: '',
		live: true,
		subtitle: '',
		techs: [JAVSCRIPT, JQUERY, HTML, CSS, SQL],
		title: 'Barrier Pest Control',
		url: 'http://www.barrierpc.com',
	},
	{
		company: 'enspark',
		contributions: [
			'Helping to push the second version of Enspark.com live. Implementing a feed, creating forms, and various front-end fixes.',
		],
		desc: 'From Leadership Skills to Time Management, our interactive e-Learning courses make people better.',
		itemKey: 'enspark',
		learned: '',
		live: true,
		subtitle: '',
		techs: [JAVSCRIPT, JQUERY, HTML, CSS, PHP, SQL],
		title: 'Enspark',
		url: 'http://www.enspark.com',
	},
	{
		company: 'utah-casa',
		contributions: [
			'Helped to fix the blog functionality and structure in wordpress as well as front-end fixes.',
		],
		desc: 'Casa is a volunteer organization that empowers everyday citizens with the ability to transform the lives of abused and neglected children.',
		itemKey: 'utah-casa',
		learned: '',
		live: true,
		subtitle: '',
		techs: [PHP, HTML, CSS],
		title: 'Utah Casa',
		url: 'http://www.utahcasa.org/',
	},
	{
		company: 'paradigm-life',
		contributions: [
			'Helped with the wordpress theme and structure architecture.',
		],
		desc: 'Infinite Banking is a concept that allows individuals to utilize Permanent Life Insurance in ways that most individuals and even insurance professionals could never have imagined.',
		itemKey: 'paradigm-life',
		learned: '',
		live: true,
		subtitle: '',
		techs: [PHP, JAVSCRIPT, JQUERY, HTML, CSS, SQL],
		title: 'Paradigm Life',
		url: 'http://www.paradigmlife.net/',
	},
	{
		company: 'debt-free-planning',
		contributions: [
			'Front-end construction. Creating a email form for user information requests.',
		],
		desc: 'Get a Free Online Report and recommended solution to your debt problem.',
		itemKey: 'debt-free-planning',
		learned: '',
		live: false,
		subtitle: '',
		techs: [PHP, LESS_CSS, HTML, JAVSCRIPT],
		title: 'Debt Free Planning',
		url: 'http://www.debt-free-planning.com',
	},
	{
		company: 'southam-consulting',
		contributions: [
			'Creating a email form for user information requests. Other front-end fixes.',
		],
		desc: 'Southam Consulting is a consortium of business specialists in several states who have extensive experience and expertise in helping clients achieve peak performance.',
		itemKey: 'southam-consulting',
		learned: '',
		live: true,
		subtitle: '',
		techs: [PHP, CSS, HTML, JAVSCRIPT],
		title: 'Southam Consulting',
		url: 'http://www.southamconsulting.net',
	},
];

export type ProjectType = {
	company: string;
	contributions: string[];
	desc: string;
	itemKey: string;
	learned: string;
	live: boolean;
	subtitle: string;
	techs: (keyof TechKeys)[];
	title: string;
	url?: string;
};
