import React, { forwardRef } from 'react';

import { CURRENT_TECH_INTERESTS } from '../CurrentTechInterests.data';
import { InterestItem } from '../InterestItem/InterestItem';

import './InterestColumns.scss';

type InterestColumnsProps = {
	onScroll: React.UIEventHandler<HTMLDivElement>;
};

export const InterestColumns = forwardRef<HTMLDivElement, InterestColumnsProps>(
	({ onScroll }, ref) => (
		<div className="row g-4 interest-columns" onScroll={onScroll} ref={ref}>
			{CURRENT_TECH_INTERESTS.map((item, index) => (
				<InterestItem key={index} {...item} />
			))}
		</div>
	),
);

InterestColumns.displayName = 'InterestColumns';
