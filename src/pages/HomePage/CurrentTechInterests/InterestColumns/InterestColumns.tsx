import React, { forwardRef } from 'react';

import { CURRENT_TECH_INTERESTS } from '../CurrentTechInterests.data';
import { InterestItem } from '../InterestItem/InterestItem';

import styles from './InterestColumns.module.scss';

type InterestColumnsProps = {
	onScroll: React.UIEventHandler<HTMLDivElement>;
};

export const InterestColumns = forwardRef<HTMLDivElement, InterestColumnsProps>(
	({ onScroll }, ref) => (
		<div
			className={`row g-4 ${styles.interestColumns}`}
			onScroll={onScroll}
			ref={ref}
		>
			{CURRENT_TECH_INTERESTS.map((item, index) => (
				<InterestItem key={index} {...item} />
			))}
		</div>
	),
);

InterestColumns.displayName = 'InterestColumns';
