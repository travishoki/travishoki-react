import React from 'react';

import { ParagraphBlock } from '~components/ParagraphBlock/ParagraphBlock';

const paragraphs = [
	"Kaytlin was my wife's roommate in college and her bridesmaid at our wedding. She was then a professional MMA fighter! Over the course of 11 years Lindsey and I had been to many of her fights in person, or watched her fights on TV.",
	'This book was my pandemic project. Kaytlin talked to me about an idea she had for a book. It was 3 years from the initial sketches to the book launch.',
	'I had a lot of help and critiques from my wife, niece, family, and friends. Big thanks to everyone that helped out!',
	"The book launch event was at Beyond Sports TaeKwonDo studio, the same studio I practiced at 20 years ago! It is still ran by the Sorenson family. The book was sponsored by Kaytlin's athletic sponsor, Century Martial Arts.",
	'People came to help us celebrate! Kaytlin offered a free Kickboxing lesson and book reading. Books were available at the event, and Kaytlin and I signed them. It was fun!',
];

export const About = () => (
	<ParagraphBlock label="About The Project" text={paragraphs} />
);
