import React from 'react';

import { MobileApp } from './MobileApp';
import { Content } from './Content';
import { Logo } from './Logo';
import { SocialMedia } from './SocialMedia';

import './HokiSkateboards.scss';

export const HokiSkateboards = () => (
	<section className="hoki-skateboards">
		<div className="hoki-skateboards-inner">
			<Logo />
			<SocialMedia />
			<Content />
			<MobileApp />
		</div>
	</section>
);
