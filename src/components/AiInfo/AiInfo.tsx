import React, { useState } from 'react';

import classNames from 'classnames';

import { ParagraphLabel } from '~components/ParagraphLabel/ParagraphLabel';
import { ParagraphList } from '~components/ParagraphList/ParagraphList';
import { WHITE } from '~const/colors.const';
import { makeArray } from '~helpers/arrays';
import { SvgIconSparkle } from '~svg/SvgIconSparkle';

import styles from './AiInfo.module.scss';

export const AitInfo = ({ text }: AitInfoProps) => {
	const [expanded, setExpanded] = useState(false);

	const textArray = makeArray(text);

	return (
		<div className={styles.aiInfo}>
			<div className={styles.aiInfoContent}>
				<ParagraphLabel>
					<SvgIconSparkle color={WHITE} size={22} />
					<span className={styles.label}>AI Integration</span>
				</ParagraphLabel>
				{expanded && <ParagraphList paragraphs={textArray} />}
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
