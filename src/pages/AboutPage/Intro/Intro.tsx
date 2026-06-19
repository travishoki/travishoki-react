import React from 'react';

import { AboutImage } from '../AboutItem/AboutImage/AboutImage';
import { ImgProfilePic, ImgProfilePicSmall } from '../AboutPage.data.images';

const IMG_SIZE = 300;
const image = {
	description:
		"When I'm not staring at a code editor or building things for the web, here is a little look at what keeps me busy, what I love doing, and who I am outside of work.",
	imgLarge: ImgProfilePic,
	imgLargeDimensions: [IMG_SIZE, IMG_SIZE],
	imgSmall: ImgProfilePicSmall,
	itemKey: 'intro',
	title: 'Profile Pic',
};

export const Intro = () => (
	<div className="boxed p-3">
		<AboutImage item={image} />
		<p className="indent">
			When I&apos;m not staring at a code editor or building things for the web,
			here is a little look at what keeps me busy, what I love doing, and who I
			am outside of work.
		</p>
	</div>
);
