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
		aiIntegration: [
			'This project has an AI-Powered Natural Language Food Filter. I integrated Claude (Anthropic\'s LLM) to let users search a food card collection using plain English instead of traditional dropdowns and form inputs. A user can type something like "easy breakfast ideas" or "difficult desserts alphabetically" and the app intelligently maps that to structured filter state, including category, difficulty, sort order, and keyword search, all at once.',
			'Under the hood, the query is sent to Claude Haiku with a carefully engineered system prompt that enforces strict JSON output and defines parsing rules (e.g. "easy" maps to a sort order, not a difficulty rating). The response is validated before being applied, so ambiguous or incomplete AI output degrades gracefully rather than breaking the UI.',
			'Skills demonstrated: prompt engineering, LLM API integration (@anthropic-ai/sdk), structured output parsing, and translating unstructured user intent into typed application state.',
		],
		company: 'Food Cards',
		contributions: [
			'Connected to Firebase to inventory and manage food data.',
			'Designed the website and sourced food images',
			"Integrated Claude (Anthropic's LLM) to power a natural language food search experience.",
		],
		description: [
			"My son has Avoidant/Restrictive Food Intake Disorder (ARFID). In simple terms, he's extremely difficult to feed. It's far beyond him just being a picky eater. He had such strong aversions to foods and smells that he will gag and throw up if he sees or smells food that he doesn't like. It causes him anxiety having to figure out what to eat. It's a struggle every day, practically every meal.",
			'This is a website that catalogues his "Safe Foods", foods that he will reliably eat. That makes it easier for him to visually see a menu of the foods he likes, making the decision process a little less painful.',
			'The cards are styled like Pokemon cards, just for fun.',
			"This project is a work in progress. It's just a little site for my son and me. I've been pulling him into the dev process to teach him coding as well.",
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
		learned: [
			'I tied into an Anthropic LLM to search the food cards with plain English',
			'I haven\'t programmed a "fuzzy" search. It was interesting learning how matches are scored.',
		],
		live: true,
		subtitle: 'Safe Foods',
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
			TECH.VITE,
		],
		url: 'https://food-cards.travishoki.com/',
	},
	{
		itemKey: 'spiff-documents',
		company: 'Spiff',
		contributions: [
			'Researched and evaluated multiple WYSIWYG editors to find the best fit for the use case.',
			'Implemented and customized a WYSIWYG editor integration.',
			"Built merge field functionality to replace Handlebars syntax with dynamic values from the user's profile.",
			'Extended server-side Ruby code to customize PDF output.',
		],
		description: [
			'Users needed to compose their own custom documents, so we built a homegrown document editor solution.',
			'Dynamic text was embedded via "merge fields", Handlebars-style placeholders that resolve to live profile values at render time.',
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
			'Migrated hundreds of hardcoded strings across the codebase to use the i18n translation system.',
		],
		description: [
			'Developed the infrastructure for string translations, expanding global platform accessibility.',
			'Internationalization was a high-priority value add for Spiff and Salesforce, enabling the product to serve a worldwide customer base.',
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
		contributions: [
			"Built a recursive component tree to represent each level of a company's team structure.",
		],
		description: [
			"Built a hierarchical org chart that recursively renders a company's team structure at any depth.",
		],
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
			"This is a website for a family friend's salon on wheels.",
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
			'Integrated existing APIs to support creating a new book.',
			'Built reusable UI components used across the book creation flow.',
		],
		description:
			'Revamped the book creation page with a new React UI, improving the user experience for one of the core product flows.',
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
			'Created Branch links for deep-linking to iOS and Android apps.',
			'Built the data source selection screen and platform-specific info screens.',
		],
		description:
			"Helped create individual quickflows for platform-specific custom books. Customers come to the quickflow from Instagram's storefront, then create a book by picking a data source.",
		gallery: [Images.ImgChatbooksComCardsQuickFlowSources],
		learned: '',
		subtitle: 'Cards Quick Flow Sources',
		techs: [TECH.REACT_JS, TECH.REDUX, TECH.JAVASCRIPT, TECH.HTML, TECH.SCSS],
	},
	{
		itemKey: 'chatbooks-com-premium-layflat',
		company: 'Chatbooks.com',
		contributions:
			'Integrated existing APIs to unlock Premium layflat book support on desktop.',
		description:
			'Enabled Premium layflat book creation on desktop, a significant product breakthrough that delivered a far better experience for customers creating large-format books.',
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
			'Implemented server-side rendering to maximize SEO value.',
			'Collaborated closely with designers and marketing to align on UI and content.',
			'Integrated new APIs to power category and search filter data.',
		],
		description:
			'Built Cards taxonomy pages with category browsing and search filters, leveraging SSR for SEO discoverability.',
		gallery: [Images.ImgChatbooksComCardsTaxonomyPages],
		learned: '',
		subtitle: 'Cards Taxonomy Pages',
		techs: [TECH.REACT_JS, TECH.REDUX, TECH.JAVASCRIPT, TECH.HTML, TECH.SCSS],
	},
	{
		itemKey: 'overstock-com-customer-review-images',
		company: 'Overstock.com',
		contributions: [
			'Validated and formatted customer images client-side before uploading to AWS.',
		],
		description: [
			'As part of the User Generated Content (UGC) Team, I helped own the product review experience. Customer review images was one of the projects I was most proud of, a meaningful trust signal for shoppers and a significant value add for Overstock.',
			'Worked with my team to enable customers to submit photos alongside their reviews, then A/B tested the feature to confirm a positive impact on revenue.',
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
			'Ported featured product logic from the mobile product page into the Search AMP page. Used amp-bind for option-selection event triggers and optimized CSS to meet strict AMP size specifications.',
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
			'Integrated React Router and architected the project to be easily extensible with future pages and tools.',
		],
		description:
			'Internal SEO tool that allowed business employees to manage SEO titles and taxonomy display names across the site.',
		gallery: [Images.ImgOverstockComAdminPortal],
		learned:
			"Deepened my understanding of the Redux data flow while building out the tool's state management.",
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
			'Built the initial project within 24 hours, earning a finalist selection.',
			'Elevated the project to production quality within 3 weeks.',
			'Shipped into a 50/50 A/B test. Our version won on user conversion.',
			'Rapidly learned new tech stacks under tight time constraints to deliver.',
		],
		description:
			'Hackathon project aimed at increasing the volume of customer reviews and user-generated images on the Overstock platform.',
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
		contributions:
			'Coordinated deployments across multiple departments to ship the feature.',
		description:
			'Built a feature that rewarded users with points for leaving qualifying reviews, incentivizing user-generated content.',
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
			'Implemented an A/B test that produced measurable conversion lift over a 2-week period.',
		],
		description:
			'Responsive redesign of the See All Reviews page, making it fully functional across mobile and desktop screen sizes.',
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
			'Extracted Add To Cart functionality into a reusable React module embedded in the mobile review page.',
		],
		description:
			'Added a mobile Add To Cart popup to the See All Reviews page, letting shoppers convert without leaving the review experience.',
		gallery: [Images.ImgOverstockComSeeAllReviewsPageMobileAddToCart],
		learned:
			'This was my first production-level React work, marking a turning point in my front-end career.',
		live: true,
		subtitle: 'See All Reviews Page Mobile Add To Cart',
		techs: [TECH.HTML, TECH.LESS_CSS, TECH.JAVASCRIPT, TECH.REACT_JS],
		url: 'http://www.overstock.com/',
	},
	{
		itemKey: 'overstock-com-reviews-breakout',
		company: 'Overstock.com',
		contributions:
			'Coordinated a multi-department deployment to ship the rating-only review feature.',
		description:
			'Introduced rating-only reviews, lowering the barrier for customers to leave feedback and increasing overall review volume.',
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
			'Wrapped all changes behind feature flags to enable a safe, coordinated rollout.',
			'Coordinated with multiple teams to deploy all changes simultaneously across the site.',
		],
		description: [
			"Led the migration of all star ratings from red to gold across Overstock's shopping site. Deceptively simple in scope, but requiring intense cross-team coordination to execute.",
			'One of my first tasks at Overstock, this project gave me a deep initiation into how a large-scale retail engineering organization operates across many teams.',
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
			"Gained deep visibility into Overstock's cross-team deployment processes and learned how to navigate a large engineering organization.",
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
		contributions:
			'Took an existing WordPress plugin and rearchitected it into a more scalable, maintainable solution.',
		description:
			'Built an embeddable affiliate links widget that allowed external partners to drive traffic and revenue to Overstock product pages.',
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
			"Lindsey Hoki Photography is my wife's photography company. I designed and built her brand and web presence.",
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
			'A personal passion project. I designed, branded, and built a full e-commerce skateboard company from the ground up.',
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
			"Truly Lindsey Photography is my wife's photography company. I designed and built her brand and web presence.",
		gallery: [Images.ImgTrulyLindseyPhotography],
		learned: '',
		techs: [TECH.WORDPRESS, TECH.HTML, TECH.CSS],
		url: 'http://www.trulylindseyphotography.com/',
	},
	{
		itemKey: 'room-choice-student-housing-software',
		company: 'Room Choice',
		contributions: [
			'Full-stack feature development across the entire application.',
			'Built and maintained backend services using Django and Python.',
			'Developed RESTful API integrations between front-end and back-end layers.',
		],
		description:
			'Student housing property management software for viewing room assignments and processing reservation requests.',
		gallery: [Images.ImgRoomChoiceStudentHousingSoftware],
		learned:
			'Gained my first experience collaborating with external developers, learning to communicate technical details clearly and precisely. This was also my first role on a dedicated internal team. I shifted from freelance habits to structured team workflows and helped optimize and bring architecture to the codebase.',
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
			'Motivational speaker Eric Aroca hired me to build out his promotional website. I built a custom Wordpress theme for him.',
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
		description: 'Built out the HTML and CSS for a new landing page.',
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
			'Enspark is a Learning Management System (LMS) that provides HR courses.',
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
			'Animated banner ads that would populate on the side of websites.',
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
