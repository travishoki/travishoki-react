import React, { ReactNode } from 'react';

import { ParagraphLabel } from '~components/ParagraphLabel/ParagraphLabel';
import { ParagraphList } from '~components/ParagraphList/ParagraphList';
import { TextWithReadMore } from '~components/TextWithReadMore/TextWithReadMore';
import { makeArray } from '~helpers/arrays';

import styles from './ParagraphBlock.module.scss';

export const ParagraphBlock = ({
	collapsible = false,
	label,
	text,
}: ParagraphBlockProps) => {
	const textList = makeArray(text);

	return (
		<div className="mb-3">
			<ParagraphLabel>{label}:</ParagraphLabel>
			{collapsible ? (
				<TextWithReadMore
					buttonClassName={styles.readMoreButton}
					initiallyExpanded
					paragraphs={textList}
				/>
			) : (
				<ParagraphList paragraphs={textList} />
			)}
		</div>
	);
};

type ParagraphBlockProps = {
	collapsible?: boolean;
	label: string | ReactNode;
	text: string | string[];
};
