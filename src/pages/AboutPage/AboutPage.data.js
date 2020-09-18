const imgProfilePic = require('../../../images/about/travis-and-lindsey-hoki.png');
const imgFamily = require('../../../images/about/family.png');
const imgWedding = require('../../../images/about/wedding.png');
const imgGuitar = require('../../../images/about/guitar.png');
const imgSkateboard = require('../../../images/about/skateboarding.png');
const imgBallroom = require('../../../images/about/ballroom.png');
const imgBreakdance = require('../../../images/about/breakdance.png');

const BIRTH_YEAR = 1990;
const AGE = new Date().getFullYear() - BIRTH_YEAR;

const AboutData = [
	{
		title: 'Hey',
		desc: `My name is Travis. I\'m from Orem. I\'m ${AGE} years old.`,
		img: imgProfilePic,
	},
	{
		title: 'Family',
		desc: 'My baby boy is my pride and joy. I love that kid so much.',
		img: imgFamily,
	},
	{
		title: 'Wife',
		desc: 'I am married to my best friend and high school sweet heart Lindsey. We’ve had many adventures together in the last 9 years.',
		img: imgWedding,
	},
	{
		title: 'Skateboarding',
		desc: 'Skating is a big stress reliever for me. I always have my board in the trunk of my car and use it whenever possible. Why walk anywhere when you can skateboard.',
		img: imgSkateboard,
	},
	{
		title: 'Guitar',
		desc: 'I like to play the guitar. There\'s nothing more calming then playing those six strings.',
		img: imgGuitar,
	},
	{
		title: 'Breakdance',
		desc: 'Breakdancing is my favorite form of exercise. Other developer don\'t seem to have the need to spin on the ground like I do, wierd.',
		img: imgBreakdance,
	},
	{
		title: 'Ballroom',
		desc: 'Though my wife and I don\'t dance as much as we did back in highschool. We still love to dance together.',
		img: imgBallroom,
	},
];

export default AboutData;
