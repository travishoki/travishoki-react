import React from 'react';

import { ProjectType } from '../ProjectsPage.data';
import { ProjectInfoSection } from './ProjectInfoSection/ProjectInfoSection';
import './ProjectItemList.scss';

const images = require.context('../../../images/websites', true);

export const ProjectItemList = ({
	company,
	companySlug,
	contributions,
	date,
	desc,
	itemKey,
	learned,
	live = false,
	subtitle,
	techs,
	url,
}: ProjectItemListProps) => (
	<div className="list-item">
		<div className="project-heading">
			<h2>{company}</h2>
			<h3>{subtitle}</h3>
		</div>

		<div className="row">
			<div className="col-sm-6">
				<img className="project-img" src={images(`./${itemKey}/lg.jpg`)} />
			</div>
			<ProjectInfoSection
				companySlug={companySlug}
				contributions={contributions}
				date={date}
				desc={desc}
				learned={learned}
				techs={techs}
			/>
		</div>

		{live && (
			<a
				className="btn btn-primary btn-lg"
				href={url}
				rel="noreferrer"
				target="_blank"
			>
				View Live Site
			</a>
		)}
	</div>
);

type ProjectItemListProps = ProjectType;
