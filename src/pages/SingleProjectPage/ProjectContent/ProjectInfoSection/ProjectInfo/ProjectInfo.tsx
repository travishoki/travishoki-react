import React, { ReactNode } from 'react';

import { ParagraphLabel } from '~components/ParagraphLabel/ParagraphLabel';
import { TextWithReadMore } from '~components/TextWithReadMore/TextWithReadMore';
import { makeArray } from '~helpers/arrays';

import styles from './ProjectInfo.module.scss';

export const ProjectInfo = ({ label, text }: ProjectInfoProps) => {
	return (
		<>
			<ParagraphLabel>{label}:</ParagraphLabel>
			<TextWithReadMore
				buttonClassName={styles.readMoreButton}
				initiallyExpanded
				paragraphs={makeArray(text)}
			/>
		</>
	);
};

type ProjectInfoProps = {
	label: string | ReactNode;
	text: string | string[];
};
