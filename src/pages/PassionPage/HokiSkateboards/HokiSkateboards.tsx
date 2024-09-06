import React from 'react';

import App from './App';
import Content from './Content';
import Logo from './Logo';
import SocialMedia from './SocialMedia';

import './HokiSkateboards.scss';

const HokiSkateboards = () => (
	<section className="hoki-skateboards">
		<div className="hoki-skateboards-inner">
			<Logo />
			<SocialMedia />
			<Content />
			<App />
		</div>
	</section>
);

export default HokiSkateboards;
