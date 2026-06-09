import React, { useState } from 'react';

import { ReadMoreButton } from '~components/ReadMoreButton/ReadMoreButton';

type ReadMoreListProps = {
	buttonClassName?: string;
	collapsedCount?: number;
	initiallyExpanded?: boolean;
	items: string[];
	listClassName?: string;
};

export const ReadMoreList = ({
	buttonClassName,
	collapsedCount = 3,
	initiallyExpanded = false,
	items,
	listClassName,
}: ReadMoreListProps) => {
	const [expanded, setExpanded] = useState(initiallyExpanded);

	const hasReadMore = items.length > collapsedCount;
	const visibleItems =
		expanded || !hasReadMore ? items : items.slice(0, collapsedCount);

	return (
		<>
			<ul className={listClassName}>
				{visibleItems.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>

			{hasReadMore && (
				<ReadMoreButton
					className={buttonClassName}
					expanded={expanded}
					onToggle={() => setExpanded(!expanded)}
				/>
			)}
		</>
	);
};
