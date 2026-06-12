import React, { useState } from 'react';

import { ReadMoreButton } from '~components/ReadMoreButton/ReadMoreButton';

import { ItemLink } from './ItemLink/ItemLink';
import { ReadMoreListItem } from './ReadMoreList.types';

type ReadMoreListProps = {
	buttonClassName?: string;
	collapsedCount?: number;
	initiallyExpanded?: boolean;
	items: ReadMoreListItem[];
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
					<li key={index}>
						{item.text}
						{item.link && <ItemLink link={item.link} text={item.text} />}
					</li>
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
