import React from 'react';

import classNames from 'classnames';

import { TechListCatalogue } from '~components/TechListCatalogue/TechListCatalogue';

import { Contributions } from './Contributions/Contributions';
import { ProjectInfo } from './ProjectInfo/ProjectInfo';
import { ProjectType } from '../../../ProjectsPage/ProjectsPage.types';

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

			{date && <ProjectInfo label="Date Range" text={date} />}

			{description.length && (
				<ProjectInfo label="Description" text={description} />
			)}

			<Contributions contributions={contributions} />

			{learned && <ProjectInfo label="What I Learned" text={learned} />}

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
