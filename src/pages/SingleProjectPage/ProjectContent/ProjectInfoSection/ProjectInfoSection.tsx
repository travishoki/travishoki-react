import React from 'react';

import classNames from 'classnames';

import { TechListCatalogue } from '~components/TechListCatalogue/TechListCatalogue';
import { TextWithReadMore } from '~components/TextWithReadMore/TextWithReadMore';
import { makeArray } from '~helpers/arrays';

import { Contributions } from './Contributions/Contributions';
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
					<p className="label">Date Range:</p>
					<AnswerSection>
						<p>{date}</p>
					</AnswerSection>
				</>
			)}

			{description.length && (
				<>
					<p className="label">Description:</p>
					<AnswerSection>
						<TextWithReadMore
							buttonClassName={styles.readMoreButton}
							initiallyExpanded
							paragraphs={makeArray(description)}
						/>
					</AnswerSection>
				</>
			)}

			<Contributions contributions={contributions} />

			{learned && (
				<>
					<p className="label">What I Learned:</p>
					<AnswerSection>
						<TextWithReadMore
							initiallyExpanded
							paragraphs={makeArray(learned)}
						/>
					</AnswerSection>
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
