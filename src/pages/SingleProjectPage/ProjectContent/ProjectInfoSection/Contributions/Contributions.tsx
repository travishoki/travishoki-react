import React from 'react';

import classNames from 'classnames';

import { ReadMoreList } from '~components/ReadMoreList/ReadMoreList';
import { getFirstParagraph } from '~helpers/arrays';

import { ProjectType } from '../../../../ProjectsPage/ProjectsPage.types';
import { AnswerSection } from '../../AnswerSection/AnswerSection';

import styles from './Contributions.module.scss';

const COLLAPSE_COUNT = 2;

export const Contributions = ({ contributions }: ContributionsProps) => {
	if (!contributions || contributions.length === 0) return null;

	const isList = Array.isArray(contributions) && contributions.length > 1;
	const bullets = Array.isArray(contributions) ? contributions : [];

	return (
		<>
			<p className="m-0">Contributions:</p>
			<AnswerSection>
				{isList ? (
					<ReadMoreList
						buttonClassName={styles.contributionsReadMore}
						collapsedCount={COLLAPSE_COUNT}
						initiallyExpanded
						items={bullets}
						listClassName={classNames('disc', styles.answerSectionList)}
					/>
				) : (
					<p className="indent">{getFirstParagraph(contributions)}</p>
				)}
			</AnswerSection>
		</>
	);
};

type ContributionsProps = Pick<ProjectType, 'contributions'>;
