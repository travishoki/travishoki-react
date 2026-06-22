import React, { useState } from 'react';

import classNames from 'classnames';

import { MotionExpand } from '~animations/MotionExpand';
import { ParagraphList } from '~components/ParagraphList/ParagraphList';
import { ReadMoreButton } from '~components/ReadMoreButton/ReadMoreButton';

export const TextWithReadMore = ({
	buttonClassName,
	className,
	initiallyExpanded = false,
	paragraphs,
}: TextWithReadMoreProps) => {
	const [expanded, setExpanded] = useState(initiallyExpanded);

	const hasMore = paragraphs.length > 1;

	const [firstParagraph, ...restParagraphs] = paragraphs;

	return (
		<div className={classNames('mb-3', className)}>
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
		</div>
	);
};

type TextWithReadMoreProps = {
	buttonClassName?: string;
	className?: string;
	initiallyExpanded?: boolean;
	paragraphs: string[];
};
