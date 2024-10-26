import React from 'react';

import ImgHokiSkateboardsSmall from '~images/passion/hoki-skateboards-small.jpg';
import ImgHokiSkateboards from '~images/passion/hoki-skateboards.jpg';
import { MobileApp } from './MobileApp';
import { Content } from './Content';
import { Logo } from './Logo';
import { SocialMedia } from './SocialMedia';

import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable';
import './HokiSkateboards.scss';

export const HokiSkateboards = () => (
	<section className="hoki-skateboards">
		<div className="boxed">
			<Logo />
			<ImageMaximizable
				alt="Hoki Skateboards"
				className="main-image"
				dimensions={[600, 400]}
				src={ImgHokiSkateboardsSmall}
				srcLarge={ImgHokiSkateboards}
				srcLargeDimensions={[1541, 1030]}
			/>
			<SocialMedia />
			<Content />
			<MobileApp />
		</div>
	</section>
);
