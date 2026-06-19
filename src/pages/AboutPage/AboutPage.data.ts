import { getYearsSince } from '~helpers/years';

import {
	ImgBallroom,
	ImgBallroomSmall,
	ImgBreakdance,
	ImgBreakdanceSmall,
	ImgChildrensBook,
	ImgChildrensBookSmall,
	ImgCubScouts,
	ImgCubScoutsSmall,
	ImgEagleScout,
	ImgEagleScoutSmall,
	ImgFamily,
	ImgFamilySmall,
	ImgGuitar,
	ImgGuitarSmall,
	ImgKoda,
	ImgKodaSmall,
	ImgProfilePic,
	ImgProfilePicSmall,
	ImgSkateboard,
	ImgSkateboardSmall,
	ImgStandupComedy,
	ImgStandupComedySmall,
	ImgTaeKwonDo,
	ImgTaeKwonDoSmall,
	ImgWedding,
	ImgWeddingSmall,
} from './AboutPage.data.images';

const MARRIAGE_YEAR = '2015-06-06';
const YEARS_MARRIED = getYearsSince(MARRIAGE_YEAR);

const DATING_YEAR = '2008-04-15';
const YEARS_DATING = getYearsSince(DATING_YEAR);

const KODA_DOB = '2017-06-07';
const KODA_AGE = getYearsSince(KODA_DOB);

/* eslint-disable no-magic-numbers */
export const ABOUT_PAGE_DATA: AboutType[] = [
	{
		description:
			'When I’m not staring at a code editor or building things for the web, here is a little look at what keeps me busy, what I love doing, and who I am outside of work.',
		imgLarge: ImgProfilePic,
		imgLargeDimensions: [300, 300],
		imgSmall: ImgProfilePicSmall,
		itemKey: 'intro',
	},
	{
		description:
			'We have two crazy kids that keep us busy! If they were the two additional dwarves, they would be "chatty" and "screamy"! I love my family, even if we are all a little "Hoki"!',
		imgLarge: ImgFamily,
		imgLargeDimensions: [1463, 2048],
		imgSmall: ImgFamilySmall,
		itemKey: 'family',
		title: 'Family',
	},
	{
		description:
			"In 2025, I started volunteering with Cub Scouts. I'm happy the scouting program that I loved as a kid is still around for my sons. Each of us parents are active in the pack. I'm the Bear's den leader. I've enjoyed working with the kids and other leaders.",
		imgLarge: ImgCubScouts,
		imgLargeDimensions: [1518, 2024],
		imgSmall: ImgCubScoutsSmall,
		itemKey: 'cub-scouts',
		title: 'Cub Scouts',
	},
	{
		description: [
			"I've always enjoyed reading books with my kids when putting them to bed. I have illustrated two children's books, and self published each of them. They are available on Amazon and other book platforms.",
			'This is the video from my Kickstarter campaign when I launched my book. I spent 2 years learning how to illustrate, author, and publish the book. It was so fun seeing everything starting to come together.',
		],
		imgLarge: ImgChildrensBook,
		imgLargeDimensions: [960, 1200],
		imgSmall: ImgChildrensBookSmall,
		itemKey: 'childrens-book-illustrator',
		title: "Children's Book Illustrator",
		video: 'videos/you-should-always-skateboard.mp4',
	},
	{
		description: [
			'In 2021, I graduated from the Improv Broadway Stand-up Comedy class! In a six month series of classes, we studied joke writing and storytelling. We analyzed bits from other comedians and worked on creating our own bits. We took turns pitching our sets, and receiving feedback from everyone else in the class.',
			'It was really cool to see how classmates would take feedback and improve their stories. Every time a story was pitched it was better than before. You quickly grow a comradery with people in the stand up community. It was so awesome to see classmates develop their sets then get up at open mic and actually perform!',
			'Watching comedy and creative writing has helped me through the last couple of years. Sharing my humor and creativity with others has been a way of coping with my own anxiety and depression. I’ve had fun being able to dabble in it myself now. This was an awesome experience!',
			'In 2019, I completed a five-week workshop at Comedy Sports. 2 hours a week we practiced improv exercises and skits, and pushed ourselves to change the way we think and communicate.',
			'I wanted to challenge myself to get out side of my comfort zone, loosen up, and put myself out there. I wanted to improve my public speaking skills, and gain some more confidence.',
			'This was a fun experience, and I’m glad I was able to do it. It’s such a positive atmosphere. Everyone collaborated and builds off of each other.',
		],
		imgLarge: ImgStandupComedy,
		imgLargeDimensions: [1440, 1440],
		imgSmall: ImgStandupComedySmall,
		itemKey: 'standup-comedy',
		title: 'Standup Comedy',
	},
	{
		description: `My Australian son. Koda is our Australian Shepherd doggy. My oldest son called him “Diggy “. We adopted him from the Puppy Barn ${KODA_AGE} years ago. He is an important part of our family.`,
		imgLarge: ImgKoda,
		imgLargeDimensions: [1536, 2048],
		imgSmall: ImgKodaSmall,
		itemKey: '6',
		title: 'Doggo',
	},
	{
		description:
			'Skatingboarding is a big stress reliever for me. I always have my board in the trunk of my car and use it whenever possible. Why walk anywhere when you can skateboard?',
		imgLarge: ImgSkateboard,
		imgLargeDimensions: [2048, 1367],
		imgSmall: ImgSkateboardSmall,
		itemKey: 'skateboarding',
		title: 'Skateboarding',
		video: 'videos/skate-clip.MP4',
	},
	{
		description: `I am married to my best friend and high school sweetheart, Lindsey. We’ve been married for ${YEARS_MARRIED} years, but been together for ${YEARS_DATING}, we celebrate both anniversaries!`,
		imgLarge: ImgWedding,
		imgLargeDimensions: [2048, 1367],
		imgSmall: ImgWeddingSmall,
		itemKey: 'wife',
		title: 'Wife',
	},
	{
		description: [
			"I learned how to play the guitar to propose to my wife. I knew how I wanted to propose but didn't know when. I secretly took guitar and vocal lessons for 1.5 years before the actual proposal.",
			'In 2015, at The Festival of Trees they gave me the stage.',
			"Nowadays I still play the guitar just for fun and as a way to relax and de-stress. A few times I've accompanied family sing-alongs around the camp fire.",
		],
		imgLarge: ImgGuitar,
		imgLargeDimensions: [2048, 1366],
		imgSmall: ImgGuitarSmall,
		itemKey: 'guitar',
		title: 'Guitar',
	},
	{
		description: [
			"Breakdancing is one of my favorite form of exercise. Other developers don't seem to have the need to spin on the ground like I do, weird!",
			'I started breakdancing in Jr High. I got really involved in the HipHop culture and scene. I went to as many breakdance clubs as I could and competed in breakdance battles.',
			"In college, I joined the Green Man Group. They are UVU's Drum Line. We performed at UVU basketball games, a variety of UVU events, Grizzly Hockey games, the Olympic Oval, the Hope of America, and Jazz Basketball games.",
		],
		imgLarge: ImgBreakdance,
		imgLargeDimensions: [620, 413],
		imgSmall: ImgBreakdanceSmall,
		itemKey: 'breakdance',
		title: 'Breakdance',
		video: 'videos/green-man.MP4',
	},
	{
		description: [
			'I met my wife in the ballroom of our high school. She was a ballroom dancer and I was a breakdancer. I ended up taking some ballroom classes and joining the Timpanogos High School team.',
			'In high school, I interned at the Academy of Ballet and ended up as their breakdance instructor. My wife (Girlfriend at the time) helped to teach the class.',
		],
		imgLarge: ImgBallroom,
		imgLargeDimensions: [453, 604],
		imgSmall: ImgBallroomSmall,
		itemKey: 'ballroom-dance',
		title: 'Ballroom Dance',
	},
	{
		description: [
			'I loved the scouting program and so many of the lessons it taught me about leadership, service, and seeing a project through from start to finish.',
			'For my Eagle service project, I organized painting house addresses on neighborhood curbs, making homes easier for emergency responders to find.',
		],
		imgLarge: ImgEagleScout,
		imgLargeDimensions: [1688, 2000],
		imgSmall: ImgEagleScoutSmall,
		itemKey: 'eagle-scout',
		title: 'Eagle Scout',
	},
	{
		description: [
			'TaeKwonDo was such a valuable part of my childhood, teaching me discipline, perseverance, and respect. Stepping onto the mat each week taught me how to push through physical and mental challenges, build unwavering focus, and carry myself with confidence both on and off the mat. I believe that those early lessons shaped who I am today.',
			"It brings me so much joy to see my own kids tie their belts and step onto the mat and train at the same studio a couple decades later. Watching them embrace the same traditions, face their own challenges, and learn those same invaluable life lessons that I did as a kid. I'm so grateful we get to share this powerful legacy as a family.",
		],
		imgLarge: ImgTaeKwonDo,
		imgLargeDimensions: [563, 750],
		imgSmall: ImgTaeKwonDoSmall,
		itemKey: 'taekwondo',
		title: 'TaeKwonDo',
	},
];
/* eslint-enable no-magic-numbers */

export type AboutType = {
	alt?: string;
	description: string | string[];
	imgLarge: string;
	imgLargeDimensions: number[];
	imgSmall: string;
	itemKey: string;
	title?: string;
	video?: string;
};
