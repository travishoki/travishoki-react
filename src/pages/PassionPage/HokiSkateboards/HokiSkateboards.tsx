import React from 'react';

import ImgHokiSkateboardsSmall from '~images/passion/hoki-skateboards-small.jpg';
import ImgHokiSkateboards from '~images/passion/hoki-skateboards.jpg';
import { MobileApp } from './MobileApp/MobileApp';
import { Content } from './Content/Content';
import { Logo } from './Logo/Logo';
import { SocialMedia } from './SocialMedia/SocialMedia';

import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable';
import './HokiSkateboards.scss';

export const HokiSkateboards = () => (
	<section className="hoki-skateboards p-3">
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
