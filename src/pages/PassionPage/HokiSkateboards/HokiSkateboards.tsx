import React from 'react';

import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable/ImageMaximizable';
import ImgHokiSkateboardsSmall from '~images/passion/hoki-skateboards-small.jpg';
import ImgHokiSkateboards from '~images/passion/hoki-skateboards.jpg';

import { Content } from './Content/Content';
import { Logo } from './Logo/Logo';
import { MobileApp } from './MobileApp/MobileApp';
import { SocialMedia } from './SocialMedia/SocialMedia';

import styles from './HokiSkateboards.module.scss';

const SMALL_WIDTH = 600;
const SMALL_HEIGHT = 400;

const LARGE_WIDTH = 1541;
const LARGE_HEIGHT = 1030;

export const HokiSkateboards = () => (
	<section className="hoki-skateboards p-3">
		<div className="boxed">
			<Logo />
			<ImageMaximizable
				alt="Hoki Skateboards"
				className={styles.mainImage}
				dimensions={[SMALL_WIDTH, SMALL_HEIGHT]}
				src={ImgHokiSkateboardsSmall}
				srcLarge={ImgHokiSkateboards}
				srcLargeDimensions={[LARGE_WIDTH, LARGE_HEIGHT]}
			/>
			<p className={styles.passionProjectDescription}>
				Hoki Skateboards is my passion project. Through the years I have enjoyed
				building to my little company. I&apos;ve made and sold skateboards,
				wrote a children&apos;s book, build an app, and met so many cool people
			</p>
			<SocialMedia />
			<Content />
			<MobileApp />
		</div>
	</section>
);
