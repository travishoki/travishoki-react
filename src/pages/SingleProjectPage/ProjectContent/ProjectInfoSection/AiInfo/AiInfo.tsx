import React from 'react';

import { ParagraphLabel } from '~components/ParagraphLabel/ParagraphLabel';
import { TextWithReadMore } from '~components/TextWithReadMore/TextWithReadMore';
import { makeArray } from '~helpers/arrays';
import { SvgIconSparkle } from '~svg/SvgIconSparkle';

import { AnswerSection } from '../../AnswerSection/AnswerSection';

import styles from './AiInfo.module.scss';

export const AitInfo = ({ text }: AitInfoProps) => {
	return (
		<>
			<ParagraphLabel>
				<SvgIconSparkle color="#ffffff" size={22} />
				AI Integration:
			</ParagraphLabel>
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

type AitInfoProps = {
	text: string | string[];
};
