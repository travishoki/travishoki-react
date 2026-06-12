import React from 'react';

import { TextWithReadMore } from '~components/TextWithReadMore/TextWithReadMore';
import { makeArray } from '~helpers/arrays';

import { AnswerSection } from '../../AnswerSection/AnswerSection';

import styles from './ProjectInfo.module.scss';

export const ProjectInfo = ({ label, text }: ProjectInfoProps) => {
	return (
		<>
			<p className="label">{label}:</p>
			<AnswerSection>
				<TextWithReadMore
					buttonClassName={styles.readMoreButton}
					initiallyExpanded
					paragraphs={makeArray(text)}
				/>
			</AnswerSection>
		</>
	);
};

type ProjectInfoProps = {
	label: string;
	text: string | string[];
};
