import React, { useState } from 'react';

import { MotionExpand } from 'src/animations/MotionExpand';

import { ReadMoreButton } from '~components/ReadMoreButton/ReadMoreButton';

export const TextWithReadMore = ({
	buttonClassName,
	initiallyExpanded = false,
	paragraphs,
}: TextWithReadMoreProps) => {
	const [expanded, setExpanded] = useState(initiallyExpanded);

	const hasMore = paragraphs.length > 1;

	const [firstParagraph, ...restParagraphs] = paragraphs;

	return (
		<>
			<p className="indent">{firstParagraph}</p>

			<MotionExpand isOpen={expanded}>
				{restParagraphs.map((paragraph, index) => (
					<p key={index} className="indent">
						{paragraph}
					</p>
				))}
			</MotionExpand>

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

type TextWithReadMoreProps = {
	buttonClassName?: string;
	initiallyExpanded?: boolean;
	paragraphs: string[];
};
