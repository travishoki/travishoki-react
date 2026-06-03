import React, { useState } from 'react';

import './TextWithReadMore.scss';

type TextWithReadMoreProps = {
	paragraphs: string[];
};

export const TextWithReadMore = ({ paragraphs }: TextWithReadMoreProps) => {
	const [expanded, setExpanded] = useState(false);

	const hasMore = paragraphs.length > 1;
	const onToggle = () => setExpanded(!expanded);

	const visibleParagraphs = expanded ? paragraphs : paragraphs.slice(0, 1);

	return (
		<>
			{visibleParagraphs.map((paragraph, index) => (
				<p key={index} className="indent">
					{paragraph}
				</p>
			))}

			{hasMore && (
				<p className="pointer read-more" onClick={onToggle}>
					<i className={`fa fa-chevron-${expanded ? 'up' : 'down'}`} />
					{expanded ? 'Read Less' : 'Read More'}
				</p>
			)}
		</>
	);
};
