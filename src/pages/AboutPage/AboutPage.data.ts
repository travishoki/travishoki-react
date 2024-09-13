import ImgProfilePic from '~images/about/travis-and-lindsey-hoki.png';
import ImgFamily from '~images/about/family.png';
import ImgWedding from '~images/about/wedding.png';
import ImgGuitar from '~images/about/guitar.png';
import ImgSkateboard from '~images/about/skateboarding.png';
import ImgBallroom from '~images/about/ballroom.png';
import ImgBreakdance from '~images/about/breakdance.png';
import { getYearsSince } from './AboutPage.helpers';

const BIRTH_YEAR = 1990;
const AGE = getYearsSince(BIRTH_YEAR);

const MARRIAGE_YEAR = 2015;
const YEARS_MARRIED = getYearsSince(MARRIAGE_YEAR);

const DATING_YEAR = 2008;
const YEARS_DATING = getYearsSince(DATING_YEAR);

export const AboutPageData: AboutType[] = [
	{
		desc: [
			`My name is Travis Hoki. I'm from Orem. I'm ${AGE} years old. I drive a grey Honda Accord, its name is Bruce like the shark in Finding Nemo. I’ve been told I look like Mike Shinoda from Linkin Park, or like a less attractive version of Keanu Reeves. I look tired and unshaven but am nice. I’m rocking a dad bod, but people that don’t like ice cream can’t be trusted.`,
		],
		img: ImgProfilePic,
		title: 'Hey,',
	},
	{
		desc: [
			'We have two crazy kids that keep us busy! If they were the two additional dwarves, they would be "chatty" and "scream"! I love my family, even if we are all a little "Hoki"!',
		],
		img: ImgFamily,
		title: 'Family',
	},
	{
		desc: [
			`I am married to my best friend and high school sweet heart, Lindsey. We’ve been married for ${YEARS_MARRIED} years, but been together for ${YEARS_DATING}.`,
		],
		img: ImgWedding,
		title: 'Wife',
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
			"I learned how to play the guitar to propose to my wife. I knew how I wanted to propose but didn't know when. I secretly took guitar and vocal lessons for 1.5 years before the actual proposal.",
			'In 2015, at The Festival of Trees they gave me the stage.',
			"Now days I still play the guitar just for fun and as a way to relax and destress. A few times I've accopanied family sing alongs around the camp fire.",
		],
		img: ImgGuitar,
		title: 'Guitar',
	},
	{
		desc: [
			"Breakdancing is my favorite form of exercise. Other developer don't seem to have the need to spin on the ground like I do, wierd!",
			'I started breakdancing in Jr High. I got really involved in the HipHop culture and scene. I went to as many breakdance clubs as I could and competed in breakdance battles.',
			"In college, I joined the Green Man Group. They are UVU's Drum Line. We performed at UVU basketball games, a variety of UVU events, Grizzly Hockey games, the Olympic Oval, the Hope of America, and Jazz Basketball games.",
		],
		img: ImgBreakdance,
		title: 'Breakdance',
	},
	{
		desc: [
			'I met my wife in the ballroom of our high school. She was a ballroom dancer and I was a breakdancer. I ended up taking some ballroom classes and joinging the Timpanogos High School team.',
			'In high school, I interned at the Academy of Ballet and ended up as their breakdance instructor. My wife (Girlfriend at the time) helped to teach the class',
		],
		img: ImgBallroom,
		title: 'Ballroom',
	},
];

export type AboutType = {
	desc: string[];
	img: string;
	title: string;
};
