import ImgBallroom from '~images/about/ballroom.jpg';
import ImgBallroomSmall from '~images/about/ballroom-small.jpg';
import ImgBreakdance from '~images/about/green-man-group.jpg';
import ImgBreakdanceSmall from '~images/about/green-man-group-small.jpg';
import ImgChildrensBook from '~images/about/childrens-book.jpg';
import ImgChildrensBookSmall from '~images/about/childrens-book-small.jpg';
import ImgEagleScout from '~images/about/eagle-scout.jpg';
import ImgEagleScoutSmall from '~images/about/eagle-scout-small.jpg';
import ImgFamily from '~images/about/family.jpg';
import ImgFamilySmall from '~images/about/family-small.jpg';
import ImgGuitar from '~images/about/guitar.jpg';
import ImgGuitarSmall from '~images/about/guitar-small.jpg';
import ImgProfilePic from '~images/about/travis-and-lindsey-hoki.png';
import ImgSkateboard from '~images/about/skateboarding.png';
import ImgStandupComedy from '~images/about/standup-comedy.jpg';
import ImgStandupComedySmall from '~images/about/standup-comedy-small.jpg';
import ImgWedding from '~images/about/wedding.jpg';
import ImgWeddingSmall from '~images/about/wedding-small.jpg';

import { getYearsSince } from './AboutPage.helpers';

const BIRTH_YEAR = '1990-07-08';
const AGE = getYearsSince(BIRTH_YEAR);

const MARRIAGE_YEAR = '2015-06-06';
const YEARS_MARRIED = getYearsSince(MARRIAGE_YEAR);

const DATING_YEAR = '2008-04-15';
const YEARS_DATING = getYearsSince(DATING_YEAR);

export const ABOUT_PAGE_DATA: AboutType[] = [
	{
		alt: 'Travis Hoki',
		desc: [
			`My name is Travis Hoki. I'm from Orem. I'm ${AGE} years old. I drive a grey Honda Accord, its name is Bruce like the shark in Finding Nemo. I’ve been told I look like Mike Shinoda from Linkin Park, or like a less attractive version of Keanu Reeves. I look tired and unshaven but am nice. I’m rocking a dad bod, but people that don’t like ice cream can’t be trusted.`,
		],
		img: ImgProfilePic,
		title: 'Hey,',
	},
	{
		desc: [
			"I've always enjoyed reading books with my kids when putting them to bed. I have illustrated two children's books, and self published each of them. They are available on Amazon and other book platforms.",
		],
		img: ImgChildrensBookSmall,
		imgLarge: ImgChildrensBook,
		imgLargeDimensions: [960, 1200],
		title: "Children's Book Illustrator",
	},
	{
		desc: [
			'In 2021, I graduated from the Improv Broadway Stand-up Comedy class! In a six month serries of classes, we studied joke writing and story telling. We analyzed bits from other comedians and worked on creating our own bits. We took turns pitching our sets, and receiving feedback from everyone else in the class.',
			'It was really cool to see how classmates would take feedback and improve their stories. Every time a story was pitched it was better than before. You quickly grow a comradery with people in the stand up community. It was so awesome to see classmates develop their sets then get up at open mic and actually perform!',
			'Watching comedy and creative writing has helped me through the last couple of years. Sharing my humor and creativity with others has been a way of coping with my own anxiety and depression. I’ve had fun being able to dabble in it myself now. This was an awesome experience!',
			'In 2019, I completed a five-week workshop at Comedy Sports. 2 hours a week we practiced improv exercises and skits, and pushed ourselves to change the way we think and communicate.',
			'I wanted to challenge myself to get out side of my comfort zone, loosen up, and put myself out there. I wanted to improve my public speaking skills, and gain some more confidence.',
			'This was a fun experience, and I’m glad I was able to do it. It’s such a positive atmosphere. Everyone collaborated and builds off of each other.',
		],
		img: ImgStandupComedySmall,
		imgLarge: ImgStandupComedy,
		imgLargeDimensions: [1440, 1440],
		title: 'Standup Comedy',
	},
	{
		desc: [
			'We have two crazy kids that keep us busy! If they were the two additional dwarves, they would be "chatty" and "scream"! I love my family, even if we are all a little "Hoki"!',
		],
		img: ImgFamilySmall,
		imgLarge: ImgFamily,
		imgLargeDimensions: [1463, 2048],
		title: 'Family',
	},
	{
		desc: [
			'Skating is a big stress reliever for me. I always have my board in the trunk of my car and use it whenever possible. Why walk anywhere when you can skateboard.',
		],
		img: ImgSkateboard,
		title: 'Skateboarding',
	},
	{
		desc: [
			`I am married to my best friend and high school sweet heart, Lindsey. We’ve been married for ${YEARS_MARRIED} years, but been together for ${YEARS_DATING}, we celebrate both anniversaries!`,
		],
		img: ImgWeddingSmall,
		imgLarge: ImgWedding,
		imgLargeDimensions: [2048, 1367],
		title: 'Wife',
	},
	{
		desc: [
			"I learned how to play the guitar to propose to my wife. I knew how I wanted to propose but didn't know when. I secretly took guitar and vocal lessons for 1.5 years before the actual proposal.",
			'In 2015, at The Festival of Trees they gave me the stage.',
			"Now days I still play the guitar just for fun and as a way to relax and destress. A few times I've accopanied family sing alongs around the camp fire.",
		],
		img: ImgGuitarSmall,
		imgLarge: ImgGuitar,
		imgLargeDimensions: [2048, 1366],
		title: 'Guitar',
	},
	{
		desc: [
			"Breakdancing is my favorite form of exercise. Other developer don't seem to have the need to spin on the ground like I do, wierd!",
			'I started breakdancing in Jr High. I got really involved in the HipHop culture and scene. I went to as many breakdance clubs as I could and competed in breakdance battles.',
			"In college, I joined the Green Man Group. They are UVU's Drum Line. We performed at UVU basketball games, a variety of UVU events, Grizzly Hockey games, the Olympic Oval, the Hope of America, and Jazz Basketball games.",
		],
		img: ImgBreakdanceSmall,
		imgLarge: ImgBreakdance,
		imgLargeDimensions: [620, 413],
		title: 'Breakdance',
	},
	{
		desc: [
			'I met my wife in the ballroom of our high school. She was a ballroom dancer and I was a breakdancer. I ended up taking some ballroom classes and joinging the Timpanogos High School team.',
			'In high school, I interned at the Academy of Ballet and ended up as their breakdance instructor. My wife (Girlfriend at the time) helped to teach the class.',
		],
		img: ImgBallroomSmall,
		imgLarge: ImgBallroom,
		imgLargeDimensions: [453, 604],
		title: 'Ballroom',
	},
	{
		desc: [
			'I loved the scouting program and so many of the lessons it taught me.',
		],
		img: ImgEagleScoutSmall,
		imgLarge: ImgEagleScout,
		imgLargeDimensions: [1688, 2000],
		title: 'Eagle Scout',
	},
];

export type AboutType = {
	alt?: string;
	desc: string[];
	img: string;
	imgLarge?: string;
	imgLargeDimensions?: number[];
	title: string;
};
