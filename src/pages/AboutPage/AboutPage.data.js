import ImgProfilePic from "~images/about/travis-and-lindsey-hoki.png";
import ImgFamily from "~images/about/family.png";
import ImgWedding from "~images/about/wedding.png";
import ImgGuitar from "~images/about/guitar.png";
import ImgSkateboard from "~images/about/skateboarding.png";
import ImgBallroom from "~images/about/ballroom.png";
import ImgBreakdance from "~images/about/breakdance.png";

const BIRTH_YEAR = 1990;
const AGE = new Date().getFullYear() - BIRTH_YEAR;

const AboutData = [
  {
    title: "Hey",
    desc: `My name is Travis. I\'m from Orem. I\'m ${AGE} years old.`,
    img: ImgProfilePic,
  },
  {
    title: "Family",
    desc: "I have too crazy kids that keep me busy!",
    img: ImgFamily,
  },
  {
    title: "Wife",
    desc: "I am married to my best friend and high school sweet heart Lindsey. We’ve had many adventures together in the last 9 years.",
    img: ImgWedding,
  },
  {
    title: "Skateboarding",
    desc: "Skating is a big stress reliever for me. I always have my board in the trunk of my car and use it whenever possible. Why walk anywhere when you can skateboard.",
    img: ImgSkateboard,
  },
  {
    title: "Guitar",
    desc: "I like to play the guitar. There's nothing more calming then playing those six strings.",
    img: ImgGuitar,
  },
  {
    title: "Breakdance",
    desc: "Breakdancing is my favorite form of exercise. Other developer don't seem to have the need to spin on the ground like I do, wierd.",
    img: ImgBreakdance,
  },
  {
    title: "Ballroom",
    desc: "Though my wife and I don't dance as much as we did back in highschool. We still love to dance together.",
    img: ImgBallroom,
  },
];

export default AboutData;
