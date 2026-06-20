import React from 'react';

import styles from './ParagraphList.module.scss';

export const ParagraphList = ({ paragraphs }: ParagraphListProps) => (
	<>
		{paragraphs.map((paragraph, index) => (
			<p key={`${index}-${paragraph}`} className={`indent ${styles.paragraph}`}>
				{paragraph}
			</p>
		))}
	</>
);

type ParagraphListProps = {
	paragraphs: string[];
};
