import React from 'react';

import { TextWithReadMore } from '~components/TextWithReadMore/TextWithReadMore';

import { InterestItem as InterestItemType } from '../CurrentTechInterests.data';

export const InterestItem = ({ desc, img, title }: InterestItemType) => (
	<div className="col-12 col-md-4 interest-item">
		<img alt={title} className="center interest-image mb-3" src={img} />
		<h3>{title}</h3>
		<TextWithReadMore
			buttonClassName="current-tech-interests-read-more"
			paragraphs={desc}
		/>
	</div>
);
