import React from 'react';

import { CURRENT_TECH_INTERESTS } from './CurrentTechInterests.data';
import { InterestItem } from './InterestItem/InterestItem';
import './CurrentTechInterests.scss';

export const CurrentTechInterests = () => (
	<section className="blue center current-tech-interests-component">
		<div className="current-tech-interests-component-header mb-3">
			<h2>Current Tech Interests</h2>
			<p>Things that I&apos;m interested in learning more about</p>
		</div>

		<div className="row g-4 interest-columns">
			{CURRENT_TECH_INTERESTS.map((item, index) => (
				<InterestItem key={index} {...item} />
			))}
		</div>
	</section>
);
