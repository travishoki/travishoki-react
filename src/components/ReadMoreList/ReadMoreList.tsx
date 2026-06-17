import React, { useState } from 'react';

import { AnimatePresence } from 'motion/react';

import { MotionListItem } from '~animations/MotionListItem';
import { ReadMoreButton } from '~components/ReadMoreButton/ReadMoreButton';

export const ReadMoreList = ({
	buttonClassName,
	collapsedCount,
	initiallyExpanded = false,
	items,
	listClassName,
}: ReadMoreListProps) => {
	const [expanded, setExpanded] = useState(initiallyExpanded);

	const hasReadMore = items.length > collapsedCount;
	const baseItems = hasReadMore ? items.slice(0, collapsedCount) : items;
	const extraItems = hasReadMore ? items.slice(collapsedCount) : [];

	return (
		<>
			<ul className={listClassName}>
				{baseItems.map((item, index) => (
					<li key={index}>{item}</li>
				))}

				<AnimatePresence initial={false}>
					{expanded &&
						extraItems.map((item, index) => (
							<MotionListItem key={`extra-${index}`}>{item}</MotionListItem>
						))}
				</AnimatePresence>
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

type ReadMoreListProps = {
	buttonClassName?: string;
	collapsedCount: number;
	initiallyExpanded?: boolean;
	items: string[];
	listClassName?: string;
};
