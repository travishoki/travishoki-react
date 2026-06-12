import React from 'react';

import classNames from 'classnames';

import { TechListCatalogue } from '~components/TechListCatalogue/TechListCatalogue';
import { TextWithReadMore } from '~components/TextWithReadMore/TextWithReadMore';
import { makeArray } from '~helpers/arrays';

import { Contributions } from './Contributions/Contributions';
import { ProjectInfo } from './ProjectInfo/ProjectInfo';
import { ProjectType } from '../../../ProjectsPage/ProjectsPage.types';
import { AnswerSection } from '../AnswerSection/AnswerSection';

const logos = require.context('../../../../images/clients', true);

import styles from './ProjectInfoSection.module.scss';

export const ProjectInfoSection = ({
	company,
	companySlug,
	contributions,
	date,
	description,
	learned,
	techs,
}: ProjectInfoSectionProps) => {
	return (
		<>
			<img
				alt={company}
				className={classNames('center', styles.logo)}
				src={logos(`./${companySlug}.jpg`)}
			/>

			{date && (
				<>
					<ProjectInfo answer={<p>{date}</p>} label="Date Range" />
				</>
			)}

			{description.length && (
				<>
					<ProjectInfo
						answer={
							<TextWithReadMore
								buttonClassName={styles.readMoreButton}
								initiallyExpanded
								paragraphs={makeArray(description)}
							/>
						}
						label="Description"
					/>
				</>
			)}

			<Contributions contributions={contributions} />

			{learned && (
				<>
					<ProjectInfo
						answer={
							<TextWithReadMore
								initiallyExpanded
								paragraphs={makeArray(learned)}
							/>
						}
						label="What I Learned"
					/>
				</>
			)}

			{techs && techs.length > 0 && (
				<TechListCatalogue initialExpanded list={techs} />
			)}
		</>
	);
};

type ProjectInfoSectionProps = Pick<
	ProjectType,
	| 'company'
	| 'companySlug'
	| 'contributions'
	| 'date'
	| 'description'
	| 'learned'
	| 'techs'
>;
