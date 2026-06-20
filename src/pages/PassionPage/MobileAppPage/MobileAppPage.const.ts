import { GalleryImage } from '~components/ImageGallery/types';
import * as TECH from '~const/Tech.const';

import * as Images from '../../ProjectsPage/ProjectsPage.data.images';

export const hokiSkateboardsMobileAppTechAppList: TECH.TechKey[] = [
	TECH.REACT_JS,
	TECH.REACT_NATIVE,
	TECH.TYPESCRIPT,
	TECH.JAVASCRIPT,
	TECH.JEST,
	TECH.CSS,
	TECH.HTML,
	TECH.FIREBASE,
	TECH.CLAUDE_CODE,
	TECH.CURSOR_AI,
	TECH.STORYBOOK,
];

export const hokiSkateboardsMobileAppDescription = [
	"Hoki Skateboards is my passion project. I'm teaching myself React Native through this project.",
	"My first 2 years of college was in the Gaming and Animation program, this projects has been super fun being able to flex and build upon those skills. I illustrated all of the graphics myself. This is the perfect application to advertise both the products that I sell, and the kid's book that I created.",
	"I've really enjoyed learning Firebase. The document database is just what I needed for this project.",
	"Kid's skateboarding game. Built in React Native, this game is deployed in both of the major mobile app stores.",
	'My son helped me test and brainstorm features. It was fun to include him in the process.',
	"It's so exciting to see this app come together! I'm really proud of it!",
];

export const hokiSkateboardsMobileAppGallery: GalleryImage[] = [
	{
		alt: 'Hoki Skateboards App Home',
		filename: Images.ImgHokiSkateboards1Home,
	},
	{
		alt: 'Hoki Skateboards App Levels',
		filename: Images.ImgHokiSkateboards2Levels,
	},
	{
		alt: 'Hoki Skateboards App Game',
		filename: Images.ImgHokiSkateboards3Game,
	},
	{
		alt: 'Hoki Skateboards App Game 2',
		filename: Images.ImgHokiSkateboards4Game,
	},
	{
		alt: 'Hoki Skateboards App Coloring',
		filename: Images.ImgHokiSkateboards5Coloring,
	},
	{
		alt: 'Hoki Skateboards App Book',
		filename: Images.ImgHokiSkateboards6Book,
	},
	{
		alt: 'Hoki Skateboards App Shop',
		filename: Images.ImgHokiSkateboards7Shop,
	},
	{
		alt: 'Hoki Skateboards App Build A Board',
		filename: Images.ImgHokiSkateboards8BuildABoard,
	},
	{
		alt: 'Hoki Skateboards App Login',
		filename: Images.ImgHokiSkateboards9Login,
	},
];
