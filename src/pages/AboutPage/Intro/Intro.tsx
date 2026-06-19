import React from 'react';

import { AboutImage } from '../AboutItem/AboutImage/AboutImage';
import { ImgProfilePic, ImgProfilePicSmall } from '../AboutPage.data.images';

import styles from './Intro.module.scss';

const IMG_SIZE = 300;
const image = {
	description: '',
	imgLarge: ImgProfilePic,
	imgLargeDimensions: [IMG_SIZE, IMG_SIZE],
	imgSmall: ImgProfilePicSmall,
	itemKey: 'intro',
	title: 'Profile Pic',
};

export const Intro = () => (
	<section className="primary-three">
		<div className="boxed">
			<div className={styles.intro}>
				<div className={styles.image}>
					<AboutImage item={image} />
				</div>
				<p className={`indent m-0 ${styles.text}`}>
					When I&apos;m not staring at a code editor or building things for the
					web, here is a look at what keeps me busy. This is what I love doing,
					and who I am outside of work.
				</p>
			</div>
		</div>
	</section>
);
