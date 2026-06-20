import React, { useState } from 'react';

import { MotionExpand } from '~animations/MotionExpand';
import { ParagraphList } from '~components/ParagraphList/ParagraphList';
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
			<ParagraphList paragraphs={[firstParagraph]} />

			<MotionExpand isOpen={expanded}>
				<ParagraphList paragraphs={restParagraphs} />
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
