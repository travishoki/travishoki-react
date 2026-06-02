import React from 'react';

import { CURRENT_TECH_INTERESTS } from './CurrentTechInterests.data';
import { InterestItem } from './InterestItem/InterestItem';
import './CurrentTechInterests.scss';

export const CurrentTechInterests = () => (
	<section className="blue center current-tech-interests-component">
		<div className="current-tech-interests-component-header">
			<h3>Current Tech Interests</h3>
			<p>Things that I&apos;m interested in learning more about</p>
		</div>

		<div className="interest-columns">
			{CURRENT_TECH_INTERESTS.map((item, index) => (
				<InterestItem key={index} {...item} />
			))}
		</div>
	</section>
);
