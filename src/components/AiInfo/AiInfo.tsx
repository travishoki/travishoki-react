import React, { useState } from 'react';

import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { MotionExpand } from '~animations/MotionExpand';
import { ParagraphLabel } from '~components/ParagraphLabel/ParagraphLabel';
import { ParagraphList } from '~components/ParagraphList/ParagraphList';
import { WHITE } from '~const/colors.const';
import { makeArray } from '~helpers/arrays';
import { SvgIconSparkle } from '~svg/SvgIconSparkle';

import styles from './AiInfo.module.scss';

export const AitInfo = ({ text }: AitInfoProps) => {
	const [expanded, setExpanded] = useState(false);

	const paragraphs = makeArray(text);
	const [firstParagraph, ...restParagraphs] = paragraphs;
	const hasMore = restParagraphs.length > 0;

	return (
		<div className={styles.aiInfo}>
			<div className={styles.aiInfoContent}>
				<ParagraphLabel>
					<SvgIconSparkle color={WHITE} size={22} />
					<span className={styles.label}>AI Integration</span>
				</ParagraphLabel>
				<ParagraphList paragraphs={[firstParagraph]} />
				<MotionExpand isOpen={expanded}>
					<ParagraphList paragraphs={restParagraphs} />
				</MotionExpand>
			</div>

			{hasMore && (
				<button
					className={classNames('btn btn-secondary', styles.toggleButton)}
					onClick={() => setExpanded(!expanded)}
				>
					<FontAwesomeIcon icon={expanded ? faChevronUp : faChevronDown} />
					{expanded ? 'Close' : 'Open'}
				</button>
			)}
		</div>
	);
};

type AitInfoProps = {
	text: string | string[];
};
