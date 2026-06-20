import * as TECH from '~const/Tech.const';
import { slugify } from '~helpers/projects';

import * as Images from './ProjectsPage.data.images';
import { ProjectType } from './ProjectsPage.types';
import {
	hokiSkateboardsMobileAppDescription,
	hokiSkateboardsMobileAppGallery,
	hokiSkateboardsMobileAppTechAppList,
} from '../PassionPage/MobileAppPage/MobileAppPage.const';

const PROJECTS: ProjectInput[] = [
	{
		itemKey: 'food-cards',
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

		gallery: [
			Images.ImgFoodCards1,
			{
				caption: 'Fuzzy search to find similar suggested searches',
				filename: Images.ImgFoodCards2,
			},
			{
				caption:
					'Whether or not a product is "instock" is stored in the Firebase database.',
				filename: Images.ImgFoodCards3,
			},
		],
		learned: ['How to implement a "fuzzy" search'],
		live: true,
		techs: [
			TECH.REACT_JS,
			TECH.JAVASCRIPT,
			TECH.JEST,
			TECH.CSS,
			TECH.HTML,
			TECH.FIREBASE,
			TECH.CLAUDE_CODE,
			TECH.CURSOR_AI,
			TECH.STORYBOOK,
		],
		url: 'https://food-cards.travishoki.com/',
	},
	{
		itemKey: 'spiff-documents',
		company: 'Spiff',
		contributions: [
			"Researched and tested different wysiwyg's for our use case.",
			'I implemented and customized an integration with a wysiwyg.',
			'Built out the merge field functionality to swap out handlebar syntax with dynamic values from the users profile.',
			'The PDF was created server-side, I was able to dig into the Ruby code enough to modify the pdf output.',
		],
		description: [
			'The user needed to be able to formulate their own documents. We created a homegrown solution.',
			'In order to embed dynamic text, we used "merge fields" as placeholders using handlebars notation, i.e. {placeholder}.',
		],
		gallery: [
			{
				caption: 'Document composer with merge fields',
				filename: Images.ImgSpiffDocuments1,
			},
			{
				caption: 'Document preview before the pdf download',
				filename: Images.ImgSpiffDocuments2,
			},
		],
		learned: '',
		subtitle: 'Documents',
		techs: [
			TECH.CLAUDE_CODE,
			TECH.REACT_JS,
			TECH.JAVASCRIPT,
			TECH.TYPESCRIPT,
			TECH.JEST,
			TECH.CSS,
			TECH.HTML,
			TECH.CURSOR_AI,
		],
	},
	{
		itemKey: 'spiff-translations',
		company: 'Spiff',
		contributions: [
			'Manually updated a lot of strings to use the translations.',
		],
		description: [
			'Developed infrastructure for string translations, enhancing global accessibility',
			'Internationalization is a big value add to Spiff/Salesforce.',
		],
		gallery: [
			Images.ImgSpiffTranslationsEnglish,
			Images.ImgSpiffTranslationsJapanese,
			Images.ImgSpiffTranslationsSpanish,
			{
				caption:
					"In dev mode there's an option to switch to X's. A quick and easy way for use to make sure strings are translated.",
				filename: Images.ImgSpiffTranslationsXxx,
			},
			{ filename: Images.ImgSpiffTranslationsTableEnglish },
			{
				caption:
					"In dev mode there's an option to switch to X's. A quick and easy way for use to make sure strings are translated.",
				filename: Images.ImgSpiffTranslationsTableXxx,
			},
		],
		learned: '',
		subtitle: 'Translations',
		techs: [
			TECH.REACT_JS,
			TECH.TYPESCRIPT,
			TECH.JAVASCRIPT,
			TECH.JEST,
			TECH.HTML,
		],
	},
	{
		itemKey: 'spiff-team-hierarchy',
		company: 'Spiff',
		contributions: ['Recursively build out components representing each team.'],
		description: ["Create a hierarchical org chart for a company's team."],
		gallery: [Images.ImgSpiffTeamHierarchy],
		learned: '',
		subtitle: 'Team Hierarchy',
		techs: [
			TECH.REACT_JS,
			TECH.TYPESCRIPT,
			TECH.JAVASCRIPT,
			TECH.JEST,
			TECH.HTML,
		],
	},
	{
		itemKey: 'hoki-skateboards-react-native-game',
		company: 'Hoki Skateboards',
		contributions: [
			'React Native development',
			'UI/UX Design',
			'Character illustrations',
		],
		description: hokiSkateboardsMobileAppDescription,
		gallery: hokiSkateboardsMobileAppGallery,
		learned: '',
		subtitle: 'React Native Mobile Game',
		techs: hokiSkateboardsMobileAppTechAppList,
		url: 'https://www.hokiskateboards.com/app/',
	},
	{
		itemKey: 'blue-monday-salon',
		company: 'Blue Monday Salon',
		contributions: [
			'Logo and website design, top to bottom',
			'Custom Wordpress theme',
			'Integrating a Google Calendar into the site',
		],
		description: [
			"Website for a family friend's salon on wheels. ",
			'Tiff would drive her bus to workplaces, park out front, and give hair cuts to employees during their work day.',
		],
		gallery: [
			{
				caption: 'Custom WordPress homepage design',
				filename: Images.ImgBlueMondaySalon1,
			},
			{
				caption: 'Logo Design',
				filename: Images.ImgBlueMondaySalon2,
			},
		],
		learned: '',
		techs: [TECH.PHP, TECH.HTML, TECH.CSS, TECH.WORDPRESS],
	},
	{
		itemKey: 'chatbooks-com-book-creation',
		company: 'Chatbooks.com',
		contributions: [
			'Tie into existing APIs to create a new book.',
			'Create reusable UI components',
		],
		description:
			'Revamp existing create book page with new UI written in ReactJs',
		gallery: [Images.ImgChatbooksComBookCreation],
		learned: '',
		live: true,
		subtitle: 'Book Creation',
		techs: [
			TECH.REACT_JS,
			TECH.REDUX,
			TECH.JAVASCRIPT,
			TECH.HTML,
			TECH.SCSS,
			TECH.STORYBOOK,
		],
		url: 'https://chatbooks.com/app/create?page=web_custom_explainer',
	},
	{
		itemKey: 'chatbooks-com-cards-quick-flow-sources',
		company: 'Chatbooks.com',
		contributions: [
			'Create Branch links for redirecting to IOS or android apps.',
			'Create screen for selecting the data source as well as a screen platform specific pages info.',
		],
		description:
			"Helping to create individual quickflows for creating platform specific custom books. Customers will come to the quickflow from Instagram's storefront, then create a book by picking a data source.",
		gallery: [Images.ImgChatbooksComCardsQuickFlowSources],
		learned: '',
		subtitle: 'Cards Quick Flow Sources',
		techs: [TECH.REACT_JS, TECH.REDUX, TECH.JAVASCRIPT, TECH.HTML, TECH.SCSS],
	},
	{
		itemKey: 'chatbooks-com-premium-layflat',
		company: 'Chatbooks.com',
		contributions: 'Tie into existing APIs to allow for layflat.',
		description:
			'Enable Premium layflat book types for the desktop. This was a breakthrough for the company as it is a better experience to create premium layflat sized books at a desktop size.',
		gallery: [Images.ImgChatbooksComPremiumLayflat],
		learned: '',
		live: true,
		subtitle: 'Premium Layflat',
		techs: [TECH.REACT_JS, TECH.REDUX, TECH.JAVASCRIPT, TECH.HTML, TECH.SCSS],
		url: 'https://chatbooks.com/app/create?page=web_custom_explainer',
	},
	{
		itemKey: 'chatbooks-com-cards-taxonomy-pages',
		company: 'Chatbooks.com',
		contributions: [
			'Server-side rendering for SEO value',
			'Work closely with designers and marketing',
			'Integrating with new APIs',
		],
		description:
			'Creating cards taxonomy pages with categories and search filters.',
		gallery: [Images.ImgChatbooksComCardsTaxonomyPages],
		learned: '',
		subtitle: 'Cards Taxonomy Pages',
		techs: [TECH.REACT_JS, TECH.REDUX, TECH.JAVASCRIPT, TECH.HTML, TECH.SCSS],
	},
	{
		itemKey: 'overstock-com-customer-review-images',
		company: 'Overstock.com',
		contributions: ['Validate and format the image before uploading to AWS.'],
		description: [
			"As part of the User Generate Content (UGC) Team, we owned the product reviews. One of the projects that I was the most proud of was customer review images. This was a big value add for Overstock and the customer's trust.",
			'I work with my team to support user being able to submit images along with their reviews.',
			'We had to A/B test to make sure we had a positive impact on revenue.',
		],
		gallery: [
			{
				caption: 'Customer review images on the product page',
				filename: Images.ImgOverstockComCustomerReviewImages1,
			},
			{
				caption: 'Customer review images on the product page',
				filename: Images.ImgOverstockComCustomerReviewImages2,
			},
			{
				caption: 'Customer images within the review section',
				filename: Images.ImgOverstockComCustomerReviewImages3,
			},
			{
				caption: 'Review with customer review images',
				filename: Images.ImgOverstockComCustomerReviewImages4,
			},
			{
				caption: 'Modal with a gallery of customer review images',
				filename: Images.ImgOverstockComCustomerReviewImages5,
			},
		],
		learned: '',
		subtitle: 'Customer Review Images',
		techs: [
			TECH.REACT_JS,
			TECH.HTML,
			TECH.JAVASCRIPT,
			TECH.WEBPACK,
			TECH.LESS_CSS,
		],
		url: 'http://www.overstock.com/',
	},
	{
		itemKey: 'overstock-com-amp-featured-product',
		company: 'Overstock.com',
		contributions: [
			'Duplicate logic from the mobile product page to create the featured product section on the Search AMP page. Use amp-bind for event triggers when selecting options. Reduce and optimize CSS to fit within AMP specifications.',
		],
		description:
			'A version of the search/navigation page was built as an Accelerated Mobile Page for fast loading on mobile devices and for SEO.',
		gallery: [Images.ImgOverstockComAmpFeaturedProduct],
		learned: '',
		subtitle: 'AMP Featured Product',
		techs: [TECH.HTML, TECH.JAVASCRIPT, TECH.AMP, TECH.WEBPACK, TECH.LESS_CSS],
		url: 'http://www.overstock.com/',
	},
	{
		itemKey: 'overstock-com-admin-portal',
		company: 'Overstock.com',
		contributions: [
			'I incorporated React Router and set the project up to be extendable with future pages/tools.',
		],
		description:
			'Internal SEO tool that enables business employees to do things such as manipulate SEO titles for taxonomy display names.',
		gallery: [Images.ImgOverstockComAdminPortal],
		learned: 'I got a deeper understanding of the Redux flow.',
		subtitle: 'Admin Portal',
		techs: [
			TECH.REACT_JS,
			TECH.REDUX,
			TECH.NODE_JS,
			TECH.EXPRESS,
			TECH.HTML,
			TECH.LESS_CSS,
			TECH.JAVASCRIPT,
			TECH.WEBPACK,
		],
		url: 'http://www.overstock.com/',
	},
	{
		itemKey: 'overstock-com-hackathon-2017',
		company: 'Overstock.com',
		contributions: [
			'The initial project was built within a 24 hour period. Our project was chosen as a finalist. We had to get the project to production level quality within a 3 week time period. It was put into a 50/50 test where user conversion selected the winner. This project really pushed me to jump into new stacks that I had never done before and to prioritize time.',
		],
		description:
			'Project for the Overstock Hackathon. Its goal was to increase the amount of reviews and user generated images.',
		gallery: [Images.ImgOverstockComHackathon2017],
		learned: '',
		subtitle: 'Hackathon 2017',
		techs: [
			TECH.HTML,
			TECH.LESS_CSS,
			TECH.JAVASCRIPT,
			TECH.REACT_JS,
			TECH.REDUX,
			TECH.JQUERY,
			TECH.WEBPACK,
		],
		url: 'https://www.overstock.com/94864/static.html',
	},
	{
		itemKey: 'overstock-com-rewards-for-reviews',
		company: 'Overstock.com',
		contributions: 'Coordinate deployments with multiple departments.',
		description: 'Reward users for leaving a qualifying review.',
		gallery: [Images.ImgOverstockComRewardsForReviews],
		learned: '',
		subtitle: 'Rewards for Reviews',
		techs: [
			TECH.HTML,
			TECH.LESS_CSS,
			TECH.JAVASCRIPT,
			TECH.JQUERY,
			TECH.HANDLEBARS_JS,
			TECH.GRUNT,
		],
		url: 'https://www.overstock.com/rewards-for-reviews',
	},
	{
		itemKey: 'overstock-com-responsive-see-all-reviews-page',
		company: 'Overstock.com',
		contributions: [
			'I implemented an AB test that resulted in lift during a 2 week period.',
		],
		description: 'Site that resizes down to mobile devices',
		gallery: [Images.ImgOverstockComResponsiveSeeAllReviewsPage],
		learned:
			'The A/B site test originally failed due to routing errors. I had to be persistent at keeping the conversation going and getting help from the right people.',
		live: true,
		subtitle: 'Responsive See All Reviews Page',
		techs: [
			TECH.HTML,
			TECH.LESS_CSS,
			TECH.JAVASCRIPT,
			TECH.JQUERY,
			TECH.HANDLEBARS_JS,
			TECH.GRUNT,
		],
		url: 'http://www.overstock.com/',
	},
	{
		itemKey: 'overstock-com-see-all-reviews-page-mobile-add-to-cart',
		company: 'Overstock.com',
		contributions: [
			'Componentize the Add To Cart functionality into a react module.',
		],
		description: 'On mobile devices, an add to cart popup.',
		gallery: [Images.ImgOverstockComSeeAllReviewsPageMobileAddToCart],
		learned: 'This was my first production level ReactJs work.',
		live: true,
		subtitle: 'See All Reviews Page Mobile Add To Cart',
		techs: [TECH.HTML, TECH.LESS_CSS, TECH.JAVASCRIPT, TECH.REACT_JS],
		url: 'http://www.overstock.com/',
	},
	{
		itemKey: 'overstock-com-reviews-breakout',
		company: 'Overstock.com',
		contributions: 'Coordinate deployments with multiple departments.',
		description: 'Allowing a user to leave rating only reviews.',
		gallery: [Images.ImgOverstockComReviewsBreakout],
		learned:
			'This project was a huge undertaking. Previously at other companies I had been full-stack. This project helped me understand the limitations and responsibilities of being strictly front-end. I had to learn to coordinate with the back-end and understand what our roles are.',
		live: true,
		subtitle: 'Reviews Breakout',
		techs: [
			TECH.HTML,
			TECH.LESS_CSS,
			TECH.JAVASCRIPT,
			TECH.HANDLEBARS_JS,
			TECH.JQUERY,
		],
		url: 'http://www.overstock.com/',
	},
	{
		itemKey: 'overstock-com-star-ratings-color',
		company: 'Overstock.com',
		contributions: [
			'Wrap changes in feature flags',
			'Coordinate with multiple teams to deploy all the changes at once.',
		],
		description: [
			'I was tasked to change all of the star ratings from red to gold. That sounds like a simple task but the amount of coordination was intense!',
			"This was one of my first tasks in Overstock's shopping site, and at a company of this scale. I had to learn the process of many teams, it was a good initiation for me.",
		],
		gallery: [
			{
				caption: 'Updated gold star ratings',
				filename: Images.ImgOverstockComStarRatingsColor1,
			},
			{
				caption: 'Original red star ratings',
				filename: Images.ImgOverstockComStarRatingsColor2,
			},
		],
		learned:
			"I was able to get a deep dive into Overstock's processes across many different teams.",
		live: true,
		subtitle: 'Star Ratings Color',
		techs: [
			TECH.HTML,
			TECH.LESS_CSS,
			TECH.JAVASCRIPT,
			TECH.HANDLEBARS_JS,
			TECH.JQUERY,
		],
		url: 'http://www.overstock.com/',
	},
	{
		itemKey: 'overstock-com-affiliate-links',
		company: 'Overstock.com',
		contributions: 'Took the basic wordpress plugin and rearchitected it.',
		description: 'Embeddable affiliate links',
		gallery: [Images.ImgOverstockComAffiliateLinks],
		learned: '',
		live: true,
		subtitle: 'Affiliate Links',
		techs: [
			TECH.JAVASCRIPT,
			TECH.JQUERY,
			TECH.PHP,
			TECH.HTML,
			TECH.LESS_CSS,
			TECH.GRUNT,
		],
		url: 'http://www.overstock.com/',
	},
	{
		itemKey: 'lindseyhoki-com',
		company: 'LindseyHoki.com',
		contributions: ['Wordpress customization', 'Design and branding'],
		description:
			"Lindsey Hoki Photography is my wife's photography company. I am helping to brand her company.",
		gallery: [Images.ImgLindseyhokiCom],
		learned: '',
		live: true,
		techs: [TECH.WORDPRESS, TECH.HTML, TECH.CSS],
		url: 'http://www.lindseyhoki.com/',
	},
	{
		itemKey: 'hoki-skateboards',
		company: 'Hoki Skateboards',
		contributions: [
			'Custom Wordpress theme',
			'Design and branding',
			'Woocommerce integration',
		],
		description:
			'Passion project skateboard company I am building and branding.',
		gallery: [Images.ImgHokiSkateboards],
		learned: '',
		live: true,
		techs: [
			TECH.WORDPRESS,
			TECH.WOO_COMMERCE,
			TECH.STRIPE,
			TECH.PHP,
			TECH.JQUERY,
			TECH.HTML,
			TECH.CSS,
			TECH.REACT_JS,
		],
		url: 'http://www.hokiskateboards.com/',
	},
	{
		itemKey: 'truly-lindsey-photography',
		company: 'Truly Lindsey Photography',
		contributions: ['Wordpress customization', 'Design and branding'],
		description:
			"Truly Lindsey Photography is my wife's photography company. I am helping to brand her company.",
		gallery: [Images.ImgTrulyLindseyPhotography],
		learned: '',
		techs: [TECH.WORDPRESS, TECH.HTML, TECH.CSS],
		url: 'http://www.trulylindseyphotography.com/',
	},
	{
		itemKey: 'room-choice-student-housing-software',
		company: 'Room Choice',
		contributions: [
			'Full Stack Development',
			'Django and python',
			'Restful API calls.',
		],
		description:
			'Room Choice is a student housing property management software that allows you to see room assignments and reservation requests.',
		gallery: [Images.ImgRoomChoiceStudentHousingSoftware],
		learned:
			'At Room Choice I got my first experience with external developers. I had to learn to communicate effectively with a lot of details. | Previous to this company I had mostly done custom freelance-type work. This was my first time working as an internal dedicated team. I was able to help optimize, cleanup, and really build structure.',
		live: true,
		subtitle: 'Student Housing Software',
		techs: [
			TECH.PYTHON,
			TECH.DJANGO,
			TECH.ANGULAR_JS,
			TECH.JAVASCRIPT,
			TECH.COFFEE_SCRIPT,
			TECH.HTML,
			TECH.LESS_CSS,
		],
		url: 'http://www.roomchoice.com/',
	},
	{
		itemKey: 'rooke-capital-management-financial-planning',
		company: 'Rooke Capital Management',
		contributions: [
			'Dove into their custom wordpress theme and build out new pages',
			'Optimize page for all browsers including IE 6',
			'Connected the page to a custom contact form',
		],
		description:
			'Created additional pages on their custom Wordpress site, optimizing for SEO. Plugged in a contact form for their sales funnel.',
		gallery: [Images.ImgRookeCapitalManagementFinancialPlanning],
		learned: '',
		subtitle: 'Financial Planning',
		techs: [
			TECH.PHP,
			TECH.WORDPRESS,
			TECH.JAVASCRIPT,
			TECH.JQUERY,
			TECH.HTML,
			TECH.CSS,
		],
		url: 'http://www.rookecapital.com/',
	},
	{
		itemKey: 'rgdjanitorial',
		company: 'RGDJanitorial',
		contributions: [
			'Wordpress theme customization.',
			'WP Advanced Custom Fields.',
			"Custom design with the owner's feedback.",
		],
		description:
			'RGD Janitorial has been providing Janitorial Services in Utah for over 17 years.',
		gallery: [Images.ImgRgdjanitorial],
		learned: '',
		live: true,
		techs: [TECH.PHP, TECH.WORDPRESS, TECH.JAVASCRIPT, TECH.HTML, TECH.CSS],
		url: 'http://www.rgdjanitorial.com/',
	},
	{
		itemKey: 'wedding-website',
		company: 'Wedding Website',
		contributions: 'Site design and development',
		description: 'This is the wedding website that I made for my wedding.',
		gallery: [Images.ImgWeddingWebsite],
		learned:
			'This was a personal project of mine. I really wanted to present information about my wedding in a nice way.',
		live: true,
		techs: [TECH.ANGULAR_JS, TECH.JAVASCRIPT, TECH.HTML, TECH.SCSS],
		url: 'http://www.wedding.hokihappenings.com/',
	},
	{
		itemKey: 'eric-aroca-motivational-speaker',
		company: 'Eric Aroca',
		contributions: [
			'Set him up with a hosting plan.',
			'Built a custom Wordpress theme.',
			'Created a logo and branding',
			'Embedded testimonials from his clients.',
		],
		description:
			'Motivational speaker Eric Aroca, hired me to build out his promotional website. I created out a custom Wordpress theme for him.',
		gallery: [Images.ImgEricArocaMotivationalSpeaker],
		learned:
			'Eric was great to work with. He was prompt and proactive with the content. It felt like a collaborative effort to get his site put together.',
		subtitle: 'Motivational Speaker',
		techs: [
			TECH.PHP,
			TECH.WORDPRESS,
			TECH.JAVASCRIPT,
			TECH.JQUERY,
			TECH.HTML,
			TECH.CSS,
		],
		url: 'http://www.ericaroca.com/',
	},
	{
		itemKey: 'saints-and-sinners-half-marathon-and-team-relay',
		company: 'Saints and Sinners Half Marathon and Team Relay',
		contributions: [
			'Creation of registration form, authorize.net integration',
			'customization of wordpress theme.',
		],
		description:
			'This is a steady downhill race perfect for first time runners, as well as those looking to improve their time. Fun to be had includes saints and sinners aid stations and heaven and heck finish lines.',
		gallery: [Images.ImgSaintsAndSinnersHalfMarathonAndTeamRelay],
		learned: '',
		live: true,
		techs: [
			TECH.PHP,
			TECH.JAVASCRIPT,
			TECH.JQUERY,
			TECH.HTML,
			TECH.CSS,
			TECH.SQL,
		],
		url: 'http://www.saintsandsinnershalf.com/',
	},
	{
		itemKey: 'new-life-recovery',
		company: 'New Life Recovery',
		contributions: 'Bring the design image to life in the browser.',
		description: 'Build out the HTML and CSS for a new landing page.',
		gallery: [Images.ImgNewLifeRecovery],
		learned: '',
		techs: [
			TECH.PHP,
			TECH.WORDPRESS,
			TECH.JAVASCRIPT,
			TECH.JQUERY,
			TECH.HTML,
			TECH.CSS,
		],
		url: 'http://www.newlife-recovery.org/',
	},
	{
		itemKey: 'creative-media-education',
		company: 'Creative Media Education',
		contributions: [
			'Stripe Integration',
			'Front-end and Back-end',
			'integrating courses the custom LMS.',
		],
		description:
			'Creative Media Group is a full service media production house based in Orem, Utah. We specialize in high quality digital video production, post-production, and motion graphics.',
		gallery: [Images.ImgCreativeMediaEducation],
		learned: '',
		techs: [
			TECH.ANGULAR_JS,
			TECH.PHP,
			TECH.JAVASCRIPT,
			TECH.JQUERY,
			TECH.HTML,
			TECH.CSS,
		],
		url: 'http://www.cmeducation.org/',
	},
	{
		itemKey: 'lavavolt',
		company: 'LavaVolt',
		contributions: [
			'All of the back-end',
			'everything from user accounts, to film uploading, to querying from the film library.',
		],
		description:
			'LavaVolt is an online film festival and digital distribution solution for independent filmmakers.',
		gallery: [Images.ImgLavavolt],
		learned: '',
		techs: [TECH.PHP, TECH.JAVASCRIPT, TECH.JQUERY, TECH.HTML, TECH.CSS],
		url: 'http://www.lavavolt.com',
	},
	{
		itemKey: 'enspark-learning-management-system',
		company: 'Enspark',
		contributions: [
			'Finished the second version of the LMS. Restructured the user account and course tracking database. Made information requests dynamic with page jquery AJAX.',
		],
		description:
			'From Leadership Skills to Time Management, our interactive e-Learning courses make people better.',
		gallery: [Images.ImgEnsparkLearningManagementSystem],
		learned: 'This is one of my first full-stack projects.',
		subtitle: 'Learning Management System',
		techs: [TECH.PHP, TECH.JAVASCRIPT, TECH.JQUERY, TECH.HTML, TECH.CSS],
		url: 'http://www.lms.enspark.com',
	},
	{
		itemKey: 'first-mile',
		company: 'First Mile',
		contributions: [
			'All back-end. Worked with the Flash developer sending information to and from the mobile app. Creating a delivery route system, "text message like" system, and automated tasks.',
		],
		description:
			'We provide discounted integrated solutions to ship your products or your customers products for less money.',
		gallery: [Images.ImgFirstMile],
		learned: '',
		live: true,
		techs: [
			TECH.PHP,
			TECH.ANGULAR_JS,
			TECH.JAVASCRIPT,
			TECH.JQUERY,
			TECH.HTML,
			TECH.CSS,
		],
		url: 'http://www.enspark.net/internationalfulfillment/',
	},
	{
		itemKey: 'the-putting-tour',
		company: 'The Putting Tour',
		contributions: [
			'Created the user account system, sending information to and from the mobile app. Helped to develop the mobile app for the golf kiosk, as well as the bracket system for the online competitions.',
		],
		description:
			'The Putting Tour at Qualifiers Golf will train your nervous system by challenging you with dozens of such putts in a 30 minute round. It really works!',
		gallery: [Images.ImgThePuttingTour],
		learned: '',
		techs: [TECH.PHP, TECH.JAVASCRIPT, TECH.JQUERY, TECH.HTML, TECH.CSS],
		url: 'http://www.theputtingtour.com',
	},
	{
		itemKey: 'wininsights',
		company: 'WinInsights',
		contributions: [
			'Hand created a custom blog for communities to converse about their executive and cultural groups. Also created a custom slider, and several wordpress pages.',
		],
		description:
			'WIN Insights is a Diversity and Inclusion - focused learning management system that delivers training, networking, tools, resources, and analytics.',
		gallery: [Images.ImgWininsights],
		learned: '',
		techs: [TECH.PHP, TECH.JAVASCRIPT, TECH.JQUERY, TECH.HTML, TECH.CSS],
		url: 'http://www.wininsights.com',
	},
	{
		itemKey: 'barrier-pest-control',
		company: 'Barrier Pest Control',
		contributions: [
			'Created a cronjob to store customer transactions in a MYSQL database then email a list of those transactions in a daily report to the company owners. Front-end fixes to the wordpress site, fixing styles and updating images. ',
		],
		description:
			'Barrier Pest Control will proactively conquer your existing pest populations and prevent future invasions.',
		gallery: [Images.ImgBarrierPestControl],
		learned: '',
		live: true,
		techs: [TECH.JAVASCRIPT, TECH.JQUERY, TECH.HTML, TECH.CSS, TECH.SQL],
		url: 'http://www.barrierpc.com',
	},
	{
		itemKey: 'enspark-marketing-website',
		company: 'Enspark',
		contributions: [
			'Helping to push the second version of Enspark.com live. Implementing a feed, creating forms, and various front-end fixes.',
		],
		description:
			'From Leadership Skills to Time Management, our interactive e-Learning courses make people better.',
		gallery: [Images.ImgEnsparkMarketingWebsite],
		learned: '',
		live: true,
		subtitle: 'Marketing Website',
		techs: [
			TECH.JAVASCRIPT,
			TECH.JQUERY,
			TECH.HTML,
			TECH.CSS,
			TECH.PHP,
			TECH.SQL,
		],
		url: 'http://www.enspark.com',
	},
	{
		itemKey: 'beit-lehi',
		company: 'Beit Lehi',
		contributions: [
			'Our team met with the owners of the Beit Lehi foundation to collaborate on features and designs for the website.',
			'We built a flowchart and planned out each of the pages',
			'We created user personas and thought through the user experience',
			'Helped to make the custom Wordpress theme',
		],
		description:
			'This is my capstone (Senior) project. I worked with a team of other students to put this site together.',
		gallery: [
			{
				caption: 'Desktop homepage',
				filename: Images.ImgBeitLehi1,
			},
			{
				caption: 'Desktop homepage',
				filename: Images.ImgBeitLehi2,
			},
			{
				caption: 'Mobile homepage',
				filename: Images.ImgBeitLehiMobile1,
			},
			{
				caption: 'Mobile homepage',
				filename: Images.ImgBeitLehiMobile2,
			},
			{
				caption: 'Mobile homepage',
				filename: Images.ImgBeitLehiMobile3,
			},
		],
		learned: '',
		techs: [TECH.HTML, TECH.CSS, TECH.PHP, TECH.JAVASCRIPT, TECH.WORDPRESS],
	},
	{
		itemKey: 'utah-casa',
		company: 'Utah Casa',
		contributions: [
			'Helped to fix the blog functionality and structure in wordpress as well as front-end fixes.',
		],
		description:
			'Casa is a volunteer organization that empowers everyday citizens with the ability to transform the lives of abused and neglected children.',
		gallery: [Images.ImgUtahCasa],
		learned: '',
		live: true,
		techs: [TECH.PHP, TECH.HTML, TECH.CSS],
		url: 'http://www.utahcasa.org/',
	},
	{
		itemKey: 'paradigm-life',
		company: 'Paradigm Life',
		contributions: [
			'Helped with the wordpress theme and structure architecture.',
		],
		description:
			'Infinite Banking is a concept that allows individuals to utilize Permanent Life Insurance in ways that most individuals and even insurance professionals could never have imagined.',
		gallery: [Images.ImgParadigmLife],
		learned: '',
		live: true,
		techs: [
			TECH.PHP,
			TECH.JAVASCRIPT,
			TECH.JQUERY,
			TECH.HTML,
			TECH.CSS,
			TECH.SQL,
		],
		url: 'http://www.paradigmlife.net/',
	},
	{
		itemKey: 'debt-free-planning',
		company: 'Debt Free Planning',
		contributions: [
			'Front-end construction. Creating a email form for user information requests.',
		],
		description:
			'Get a Free Online Report and recommended solution to your debt problem.',
		gallery: [Images.ImgDebtFreePlanning],
		learned: '',
		techs: [TECH.PHP, TECH.LESS_CSS, TECH.HTML, TECH.JAVASCRIPT],
		url: 'http://www.debt-free-planning.com',
	},
	{
		itemKey: 'southam-consulting',
		company: 'Southam Consulting',
		contributions: [
			'Creating a email form for user information requests. Other front-end fixes.',
		],
		description:
			'Southam Consulting is a consortium of business specialists in several states who have extensive experience and expertise in helping clients achieve peak performance.',
		gallery: [Images.ImgSouthamConsulting],
		learned: '',
		techs: [TECH.PHP, TECH.CSS, TECH.HTML, TECH.JAVASCRIPT],
		url: 'http://www.southamconsulting.net',
	},
	{
		itemKey: 'enspark-elearning-courses',
		company: 'Enspark',
		contributions: 'I was on a team building out HR courses in Action Script.',
		description: [
			'Enspark is a Learning Management System (LMS) that provides HR courses',
			'The courses were interactive and built in Flash. Flash pretty quickly died after I started working at Enspark. I miss flash. It was fun. RIP.',
		],
		gallery: [
			Images.ImgEnsparkArtOfNegotiation,
			Images.ImgEnsparkConflictResolution,
			Images.ImgEnsparkEmailEtiquette,
		],
		learned:
			"This was my first tech job. I had a lot of fun learning and growing. I'm thankful for those at Enspark that gave me a change and got my career started.",
		subtitle: 'eLearning Courses',
		techs: [TECH.ACTION_SCRIPT],
	},
	{
		itemKey: 'enspark-flash-banner',
		company: 'Enspark',
		contributions: [
			'I got to animate the assets in Adobe Flash.',
			'I had learned flash in school and was so excited to be able to work on a project for a real client.',
		],
		description:
			'Animated banner ads that would populate on the side of websites. ',
		gallery: [
			Images.ImgEnsparkFlashBanner1,
			Images.ImgEnsparkFlashBanner2,
			Images.ImgEnsparkFlashBanner3,
		],
		learned:
			'As an intern I had mentors directly working with me on these projects.',
		subtitle: 'Flash Banner',
		techs: [TECH.ACTION_SCRIPT],
	},
];

export const PROJECTS_DATA: ProjectType[] = PROJECTS.map((project) => ({
	...project,
	companySlug: slugify(project.company),
}));

type ProjectInput = Omit<ProjectType, 'companySlug'>;
