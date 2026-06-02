import React from 'react';

import { InterestItem as InterestItemType } from '../CurrentTechInterests.data';

export const InterestItem = ({ desc, img, title }: InterestItemType) => (
	<div className="col-12 col-md-4 interest-item">
		<img alt={title} className="center interest-image" src={img} />
		<h4>{title}</h4>
		{desc.map((paragraph, i) => (
			<p key={i}>{paragraph}</p>
		))}
	</div>
);
