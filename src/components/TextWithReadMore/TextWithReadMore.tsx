import React, { useState } from 'react';

import { ReadMoreButton } from '~components/ReadMoreButton/ReadMoreButton';

type TextWithReadMoreProps = {
	buttonClassName?: string;
	initiallyExpanded?: boolean;
	paragraphs: string[];
};

export const TextWithReadMore = ({
	buttonClassName,
	initiallyExpanded = false,
	paragraphs,
}: TextWithReadMoreProps) => {
	const [expanded, setExpanded] = useState(initiallyExpanded);

	const hasMore = paragraphs.length > 1;

	const visibleParagraphs = expanded ? paragraphs : paragraphs.slice(0, 1);

	return (
		<>
			{visibleParagraphs.map((paragraph, index) => (
				<p key={index} className="indent">
					{paragraph}
				</p>
			))}

			{hasMore && (
				<ReadMoreButton
					className={buttonClassName}
					expanded={expanded}
					onToggle={() => setExpanded(!expanded)}
				/>
			)}
		</>
	);
};
