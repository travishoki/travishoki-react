import React from 'react';

import classNames from 'classnames';

import { ReadMoreList } from '~components/ReadMoreList/ReadMoreList';
import { getFirstParagraph } from '~helpers/arrays';

import { ProjectType } from '../../../../ProjectsPage/ProjectsPage.types';
import { AnswerSection } from '../../AnswerSection/AnswerSection';

import styles from './Contributions.module.scss';

export const Contributions = ({ contributions }: ContributionsProps) => {
	if (!contributions || contributions.length === 0) return null;

	const isList = Array.isArray(contributions) && contributions.length > 1;
	const bullets = Array.isArray(contributions) ? contributions : [];

	return (
		<>
			<p className="label">Contributions:</p>
			<AnswerSection>
				{isList ? (
					<ReadMoreList
						buttonClassName={styles.contributionsReadMore}
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
