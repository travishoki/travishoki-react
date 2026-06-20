import React from 'react';

import classNames from 'classnames';

import styles from './ParagraphList.module.scss';

export const ParagraphList = ({ paragraphs }: ParagraphListProps) => (
	<>
		{paragraphs.map((paragraph, index) => (
			<p
				key={`${index}-${paragraph}`}
				className={classNames('indent', styles.paragraph)}
			>
				{paragraph}
			</p>
		))}
	</>
);

type ParagraphListProps = {
	paragraphs: string[];
};
