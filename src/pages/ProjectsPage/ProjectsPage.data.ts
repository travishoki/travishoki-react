import {
	AMP,
	ANGULAR_JS,
	CLAUDE_CODE,
	COFFEE_SCRIPT,
	CSS,
	CURSOR,
	DJANGO,
	EXPRESS,
	FIREBASE,
	GRUNT,
	HANDLEBARS_JS,
	HTML,
	JAVASCRIPT,
	JEST,
	JQUERY,
	LESS_CSS,
	NODE_JS,
	PHP,
	PYTHON,
	REACT_JS,
	REACT_NATIVE,
	REDUX,
	SCSS,
	SQL,
	WEBPACK,
	WOO_COMMERCE,
	WORDPRESS,
} from '../../const/Tech.const';

import { getItemKey, slugify } from '~helpers/projects';
import { ProjectType } from './ProjectsPage.types';

const PROJECTS: ProjectInput[] = [
	{
		company: 'Food Cards',
		contributions: [
			'Connect to Firebase for inventorying food',
			'Design the website and collected food images',
		],
		description: [
			"My son has Avoidant/Restrictive Food Intake Disorder (ARFID). In simple terms, he's extremely difficult to feed.",
			"It's far beyond him just being a picky eater. He had such strong aversions to foods and smells that he will gag and throw up if he sees or smells food that he doesn't like.",
			"It causes him anxiety having to figure out what to eat. It's a struggle every day, practically every meal.",
			'This is a website that catalogues his "Safe Foods", foods that he will reliably eat. That makes it easier for him to visually see a menu of the foods he likes, making the decision process a little less painful.',
			'The cards are styled like Pokemon cards, just for fun.',
			"It's just a little site for son and I. I've been pulling him into the dev process to teach him coding as well.",
		],
		learned: '',
		techs: [
			REACT_JS,
			JAVASCRIPT,
			JEST,
			CSS,
			HTML,
			FIREBASE,
			CLAUDE_CODE,
			CURSOR,
		],
		url: 'https://food-cards.travishoki.com/',
	},
	{
		company: 'Hoki Skateboards',
		contributions: [
			'React Native development',
			'UI/UX Design',
			'Character illustrations',
		],
		description: [
			"Hoki Skateboards is my passion project. I'm teaching myself React Native through this project.",
			"My first 2 years of college was in the Gaming and Animation program, this projects has been super fun being able to flex and build upon those skills. I illustrated all of the graphics myself. This is the perfect application to advertise both the products that I sell, and the kid's book that I created.",
			"I've really enjoyed learning Firebase. The document database is just what I needed for this project.",
			"It's so exciting to see this app come together! I'm really proud of it!",
		],
		learned: '',
		subtitle: 'React Native Game',
		techs: [
			REACT_JS,
			REACT_NATIVE,
			JAVASCRIPT,
			JEST,
			CSS,
			HTML,
			FIREBASE,
			CLAUDE_CODE,
			CURSOR,
		],
		url: 'https://www.hokiskateboards.com/app/',
	},
	{
		company: 'Chatbooks.com',
		contributions: [
			'Tie into existing APIs to create a new book.',
			'Create reusable UI components',
		],
		description:
			'Revamp existing create book page with new UI written in ReactJs',
		learned: '',
		live: true,
		subtitle: 'Book Creation',
		techs: [REACT_JS, REDUX, JAVASCRIPT, HTML, SCSS],
		url: 'https://chatbooks.com/app/create?page=web_custom_explainer',
	},
	{
		company: 'Chatbooks.com',
		contributions: [
			'Create Branch links for redirecting to IOS or android apps.',
			'Create screen for selecting the data source as well as a screen platform specific pages info.',
		],
		description:
			"Helping to create individual quickflows for creating platform specific custom books. Customers will come to the quickflow from Instagram's storefront, then create a book by picking a data source.",
		learned: '',
		subtitle: 'Cards Quick Flow Sources',
		techs: [REACT_JS, REDUX, JAVASCRIPT, HTML, SCSS],
	},
	{
		company: 'Chatbooks.com',
		contributions: 'Tie into existing APIs to allow for layflat.',
		description:
			'Enable Premium layflat book types for the desktop. This was a breakthrough for the company as it is a better experience to create premium layflat sized books at a desktop size.',
		learned: '',
		live: true,
		subtitle: 'Premium Layflat',
		techs: [REACT_JS, REDUX, JAVASCRIPT, HTML, SCSS],
		url: 'https://chatbooks.com/app/create?page=web_custom_explainer',
	},
	{
		company: 'Chatbooks.com',
		contributions: [
			'Server-side rendering for SEO value',
			'Work closely with designers and marketing',
			'Integrating with new APIs',
		],
		description:
			'Creating cards taxonomy pages with categories and search filters.',
		learned: '',
		subtitle: 'Cards Taxonomy Pages',
		techs: [REACT_JS, REDUX, JAVASCRIPT, HTML, SCSS],
	},
	{
		company: 'Overstock.com',
		contributions: [
			'Duplicate logic from the mobile product page to create the featured product section on the Search AMP page. Use amp-bind for event triggers when selecting options. Reduce and optimize CSS to fit within AMP specifications.',
		],
		description:
			'A version of the search/navigation page was built as an Accelerated Mobile Page for fast loading on mobile devices and for SEO.',
		learned: '',
		subtitle: 'AMP Featured Product',
		techs: [HTML, JAVASCRIPT, AMP, WEBPACK, LESS_CSS],
		url: 'http://www.overstock.com/',
	},
	{
		company: 'Overstock.com',
		contributions: [
			'I incorporated React Router and set the project up to be extendable with future pages/tools.',
		],
		description:
			'Internal SEO tool that enables business employees to do things such as manipulate SEO titles for taxonomy display names.',
		learned: 'I got a deeper understanding of the Redux flow.',
		subtitle: 'Admin Portal',
		techs: [
			REACT_JS,
			REDUX,
			NODE_JS,
			EXPRESS,
			HTML,
			LESS_CSS,
			JAVASCRIPT,
			WEBPACK,
		],
		url: 'http://www.overstock.com/',
	},
	{
		company: 'Overstock.com',
		contributions: [
			'The initial project was built within a 24 hour period. Our project was chosen as a finalist. We had to get the project to production level quality within a 3 week time period. It was put into a 50/50 test where user conversion selected the winner. This project really pushed me to jump into new stacks that I had never done before and to prioritize time.',
		],
		description:
			'Project for the Overstock Hackathon. Its goal was to increase the amount of reviews and user generated images.',
		learned: '',
		subtitle: 'Hackathon 2017',
		techs: [HTML, LESS_CSS, JAVASCRIPT, REACT_JS, REDUX, JQUERY, WEBPACK],
		url: 'https://www.overstock.com/94864/static.html',
	},
	{
		company: 'Overstock.com',
		contributions: 'Coordinate deployments with multiple departments.',
		description: 'Reward users for leaving a qualifying review.',
		learned: '',
		subtitle: 'Rewards for Reviews',
		techs: [HTML, LESS_CSS, JAVASCRIPT, JQUERY, HANDLEBARS_JS, GRUNT],
		url: 'https://www.overstock.com/rewards-for-reviews',
	},
	{
		company: 'Overstock.com',
		contributions: [
			'I implemented an AB test that resulted in lift during a 2 week period.',
		],
		description: 'Site that resizes down to mobile devices',
		learned:
			'The A/B site test originally failed due to routing errors. I had to be persistent at keeping the conversation going and getting help from the right people.',
		live: true,
		subtitle: 'Responsive See All Reviews Page',
		techs: [HTML, LESS_CSS, JAVASCRIPT, JQUERY, HANDLEBARS_JS, GRUNT],
		url: 'http://www.overstock.com/',
	},
	{
		company: 'Overstock.com',
		contributions: [
			'Componentize the Add To Cart functionality into a react module.',
		],
		description: 'On mobile devices, an add to cart popup.',
		learned: 'This was my first production level ReactJs work.',
		live: true,
		subtitle: 'See All Reviews Page Mobile Add To Cart',
		techs: [HTML, LESS_CSS, JAVASCRIPT, REACT_JS],
		url: 'http://www.overstock.com/',
	},
	{
		company: 'Overstock.com',
		contributions: 'Coordinate deployments with multiple departments.',
		description: 'Allowing a user to leave rating only reviews.',
		learned:
			'This project was a huge undertaking. Previously at other companies I had been full-stack. This project helped me understand the limitations and responsibilities of being strictly front-end. I had to learn to coordinate with the back-end and understand what our roles are.',
		live: true,
		subtitle: 'Reviews Breakout',
		techs: [HTML, LESS_CSS, JAVASCRIPT, HANDLEBARS_JS, JQUERY],
		url: 'http://www.overstock.com/',
	},
	{
		company: 'Overstock.com',
		contributions: [
			'Wrap changes in feature flags',
			'Coordinate with multiple teams to deploy all the changes at once.',
		],
		description: [
			'I was tasked to change all of the star ratings from red to gold. That sounds like a simple task but the amount of coordination was intense!',
			"This was one of my first tasks in Overstock's shopping site, and at a company of this scale. I had to learn the process of many teams, it was a good initiation for me.",
		],
		learned:
			"I was able to get a deep dive into Overstock's processes across many different teams.",
		live: true,
		subtitle: 'Star Ratings Color',
		techs: [HTML, LESS_CSS, JAVASCRIPT, HANDLEBARS_JS, JQUERY],
		url: 'http://www.overstock.com/',
	},
	{
		company: 'Overstock.com',
		contributions: 'Took the basic wordpress plugin and rearchitected it.',
		description: 'Embeddable affiliate links',
		learned: '',
		live: true,
		subtitle: 'Affiliate Links',
		techs: [JAVASCRIPT, JQUERY, PHP, HTML, LESS_CSS, GRUNT],
		url: 'http://www.overstock.com/',
	},
	{
		company: 'LindseyHoki.com',
		contributions: ['Wordpress customization', 'Design and branding'],
		description:
			"Lindsey Hoki Photography is my wife's photography company. I am helping to brand her company.",
		learned: '',
		live: true,
		techs: [WORDPRESS, HTML, CSS],
		url: 'http://www.lindseyhoki.com/',
	},
	{
		company: 'Hoki Skateboards',
		contributions: [
			'Custom Wordpress theme',
			'Design and branding',
			'Woocommerce integration',
		],
		description:
			'Passion project skateboard company I am building and branding.',
		learned: '',
		live: true,
		techs: [WORDPRESS, WOO_COMMERCE, PHP, JQUERY, HTML, CSS, REACT_JS],
		url: 'http://www.hokiskateboards.com/',
	},
	{
		company: 'Truly Lindsey Photography',
		contributions: ['Wordpress customization', 'Design and branding'],
		description:
			"Truly Lindsey Photography is my wife's photography company. I am helping to brand her company.",
		learned: '',
		techs: [WORDPRESS, HTML, CSS],
		url: 'http://www.trulylindseyphotography.com/',
	},
	{
		company: 'Room Choice',
		contributions: [
			'Full Stack Development',
			'Django and python',
			'Restful API calls.',
		],
		description:
			'Room Choice is a student housing property management software that allows you to see room assignments and reservation requests.',
		learned:
			'At Room Choice I got my first experience with external developers. I had to learn to communicate effectively with a lot of details. | Previous to this company I had mostly done custom freelance-type work. This was my first time working as an internal dedicated team. I was able to help optimize, cleanup, and really build structure.',
		live: true,
		subtitle: 'Student Housing Software',
		techs: [
			PYTHON,
			DJANGO,
			ANGULAR_JS,
			JAVASCRIPT,
			COFFEE_SCRIPT,
			HTML,
			LESS_CSS,
		],
		url: 'http://www.roomchoice.com/',
	},
	{
		company: 'Rooke Capital Management',
		contributions: [
			'Dove into their custom wordpress theme and build out new pages',
			'Optimize page for all browsers including IE 6',
			'Connected the page to a custom contact form',
		],
		description:
			'Created additional pages on their custom Wordpress site, optimizing for SEO. Plugged in a contact form for their sales funnel.',
		learned: '',
		subtitle: 'Financial Planning',
		techs: [PHP, WORDPRESS, JAVASCRIPT, JQUERY, HTML, CSS],
		url: 'http://www.rookecapital.com/',
	},
	{
		company: 'RGDJanitorial',
		contributions: [
			'Wordpress theme customization.',
			'WP Advanced Custom Fields.',
			"Custom design with ther owner's feedback.",
		],
		description:
			'RGD Janitorial has been providing Janitorial Services in Utah for over 17 years.',
		learned: '',
		live: true,
		techs: [PHP, WORDPRESS, JAVASCRIPT, HTML, CSS],
		url: 'http://www.rgdjanitorial.com/',
	},
	{
		company: 'Wedding Website',
		contributions: 'Site design and development',
		description: 'This is the wedding website that I made for my wedding.',
		learned:
			'This was a personal project of mine. I really wanted to present information about my wedding in a nice way.',
		live: true,
		techs: [ANGULAR_JS, JAVASCRIPT, HTML, SCSS],
		url: 'http://www.wedding.hokihappenings.com/',
	},
	{
		company: 'Eric Aroca',
		contributions: [
			'Set him up with a hosting plan.',
			'Built a custom Wordpress theme.',
			'Created a logo and branding',
			'Embedded testamonials from his clients.',
		],
		description:
			'Motivational speaker Eric Aroca, hired me to build out his promotional website. I created out a custom Wordpress theme for him.',
		learned:
			'Eric was great to work with. He was prompt and proactive with the content. It felt like a collabrative effort to get his site put together.',
		subtitle: 'Motivational Speaker',
		techs: [PHP, WORDPRESS, JAVASCRIPT, JQUERY, HTML, CSS],
		url: 'http://www.ericaroca.com/',
	},
	{
		company: 'Saints and Sinners Half Marathon and Team Relay',
		contributions: [
			'Creation of registration form, authorize.net integration',
			'customization of wordpress theme.',
		],
		description:
			'This is a steady downhill race perfect for first time runners, as well as those looking to improve their time. Fun to be had includes saints and sinners aid stations and heaven and heck finish lines.',
		learned: '',
		live: true,
		techs: [PHP, JAVASCRIPT, JQUERY, HTML, CSS, SQL],
		url: 'http://www.saintsandsinnershalf.com/',
	},
	{
		company: 'New Life Recovery',
		contributions: 'Bring the design image to life in the browser.',
		description: 'Build out the HTML and CSS for a new landing page.',
		learned: '',
		techs: [PHP, WORDPRESS, JAVASCRIPT, JQUERY, HTML, CSS],
		url: 'http://www.newlife-recovery.org/',
	},
	{
		company: 'Creative Media Education',
		contributions: [
			'Stripe Integration',
			'Front-end and Back-end',
			'integrating courses the custom LMS.',
		],
		description:
			'Creative Media Group is a full service media production house based in Orem, Utah. We specialize in high quality digital video production, post-production, and motion graphics.',
		learned: '',
		techs: [ANGULAR_JS, PHP, JAVASCRIPT, JQUERY, HTML, CSS],
		url: 'http://www.cmeducation.org/',
	},
	{
		company: 'LavaVolt',
		contributions: [
			'All of the back-end',
			'everything from user accounts, to film uploading, to querying from the film library.',
		],
		description:
			'LavaVolt is an online film festival and digital distribution solution for independent filmmakers.',
		learned: '',
		techs: [PHP, JAVASCRIPT, JQUERY, HTML, CSS],
		url: 'http://www.lavavolt.com',
	},
	{
		company: 'Enspark',
		contributions: [
			'Finished the second version of the LMS. Restructured the user account and course tracking database. Made information requests dynamic with page jquery AJAX.',
		],
		description:
			'From Leadership Skills to Time Management, our interactive e-Learning courses make people better.',
		learned: 'This is one of my first full-stack projects.',
		subtitle: 'LMS',
		techs: [PHP, JAVASCRIPT, JQUERY, HTML, CSS],
		url: 'http://www.lms.enspark.com',
	},
	{
		company: 'First Mile',
		contributions: [
			'All back-end. Worked with the Flash developer sending information to and from the mobile app. Creating a delivery route system, "text message like" system, and automated tasks.',
		],
		description:
			'We provide discounted integrated solutions to ship your products or your customers products for less money.',
		learned: '',
		live: true,
		techs: [PHP, ANGULAR_JS, JAVASCRIPT, JQUERY, HTML, CSS],
		url: 'http://www.enspark.net/internationalfulfillment/',
	},
	{
		company: 'The Putting Tour',
		contributions: [
			'Created the user account system, sending information to and from the mobile app. Helped to develop the mobile app for the golf kiosk, as well as the bracket system for the online competitions.',
		],
		description:
			'The Putting Tour at Qualifiers Golf will train your nervous system by challenging you with dozens of such putts in a 30 minute round. It really works!',
		learned: '',
		techs: [PHP, JAVASCRIPT, JQUERY, HTML, CSS],
		url: 'http://www.theputtingtour.com',
	},
	{
		company: 'WinInsights',
		contributions: [
			'Hand created a custom blog for communities to converse about their executive and cultural groups. Also created a custom slider, and several wordpress pages.',
		],
		description:
			'WIN Insights is a Diversity and Inclusion - focused learning management system that delivers training, networking, tools, resources, and analytics.',
		learned: '',
		techs: [PHP, JAVASCRIPT, JQUERY, HTML, CSS],
		url: 'http://www.wininsights.com',
	},
	{
		company: 'Barrier Pest Control',
		contributions: [
			'Created a cronjob to store customer transactions in a MYSQL database then email a list of those transactions in a daily report to the company owners. Front-end fixes to the wordpress site, fixing styles and updating images. ',
		],
		description:
			'Barrier Pest Control will proactively conquer your existing pest populations and prevent future invasions.',
		learned: '',
		live: true,
		techs: [JAVASCRIPT, JQUERY, HTML, CSS, SQL],
		url: 'http://www.barrierpc.com',
	},
	{
		company: 'Enspark',
		contributions: [
			'Helping to push the second version of Enspark.com live. Implementing a feed, creating forms, and various front-end fixes.',
		],
		description:
			'From Leadership Skills to Time Management, our interactive e-Learning courses make people better.',
		learned: '',
		live: true,
		subtitle: 'Website',
		techs: [JAVASCRIPT, JQUERY, HTML, CSS, PHP, SQL],
		url: 'http://www.enspark.com',
	},
	{
		company: 'Utah Casa',
		contributions: [
			'Helped to fix the blog functionality and structure in wordpress as well as front-end fixes.',
		],
		description:
			'Casa is a volunteer organization that empowers everyday citizens with the ability to transform the lives of abused and neglected children.',
		learned: '',
		live: true,
		techs: [PHP, HTML, CSS],
		url: 'http://www.utahcasa.org/',
	},
	{
		company: 'Paradigm Life',
		contributions: [
			'Helped with the wordpress theme and structure architecture.',
		],
		description:
			'Infinite Banking is a concept that allows individuals to utilize Permanent Life Insurance in ways that most individuals and even insurance professionals could never have imagined.',
		learned: '',
		live: true,
		techs: [PHP, JAVASCRIPT, JQUERY, HTML, CSS, SQL],
		url: 'http://www.paradigmlife.net/',
	},
	{
		company: 'Debt Free Planning',
		contributions: [
			'Front-end construction. Creating a email form for user information requests.',
		],
		description:
			'Get a Free Online Report and recommended solution to your debt problem.',
		learned: '',
		techs: [PHP, LESS_CSS, HTML, JAVASCRIPT],
		url: 'http://www.debt-free-planning.com',
	},
	{
		company: 'Southam Consulting',
		contributions: [
			'Creating a email form for user information requests. Other front-end fixes.',
		],
		description:
			'Southam Consulting is a consortium of business specialists in several states who have extensive experience and expertise in helping clients achieve peak performance.',
		learned: '',
		techs: [PHP, CSS, HTML, JAVASCRIPT],
		url: 'http://www.southamconsulting.net',
	},
];

export const PROJECTS_DATA: ProjectType[] = PROJECTS.map((project) => {
	const companySlug = slugify(project.company);

	return {
		...project,
		companySlug,
		itemKey: getItemKey(companySlug, project.subtitle),
	};
});

type ProjectInput = Omit<ProjectType, 'companySlug' | 'itemKey'>;
