import React, { useState } from 'react';

import classNames from 'classnames';

import { ParagraphLabel } from '~components/ParagraphLabel/ParagraphLabel';
import { WHITE } from '~const/colors.const';
import { makeArray } from '~helpers/arrays';
import { SvgIconSparkle } from '~svg/SvgIconSparkle';

import { AnswerSection } from '../../AnswerSection/AnswerSection';

import styles from './AiInfo.module.scss';

export const AitInfo = ({ text }: AitInfoProps) => {
	const [expanded, setExpanded] = useState(true);

	return (
		<div className={styles.aiInfo}>
			<div className={styles.aiInfoContent}>
				<ParagraphLabel>
					<SvgIconSparkle color={WHITE} size={22} />
					AI Integration:
				</ParagraphLabel>
				{expanded && (
					<AnswerSection>
						{makeArray(text).map((paragraph, index) => (
							<p key={`${index}-${paragraph}`} className="indent">
								{paragraph}
							</p>
						))}
					</AnswerSection>
				)}
			</div>

			<button
				className={classNames('btn btn-secondary', styles.toggleButton)}
				onClick={() => setExpanded(!expanded)}
			>
				<i className={`fa fa-chevron-${expanded ? 'up' : 'down'}`} />
				{expanded ? 'Close' : 'Open'}
			</button>
		</div>
	);
};

type AitInfoProps = {
	text: string | string[];
};
