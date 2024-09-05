import React from 'react';

import { Link } from 'react-router-dom';
import { ProjectType } from '../ProjectsPage.data';

const images = require.context('../../../images/websites', true);
const logos = require.context('../../../images/clients', true);

const ProjectItemGrid = ({ company, itemKey }: ProjectItemGridProps) => (
	<div className="grid-item">
		<div className="popup">
			<Link to={`/project/${itemKey}`}>
				<div className="popup-inner">
					<div className="popup-cont">
						<img src={logos(`./${company}.jpg`)} />
						<p className="project-link">View</p>
					</div>
					<div className="popup-overlay" />
				</div>
			</Link>
		</div>

		<img className="project-img" src={images(`./${itemKey}/sm.jpg`)} />
	</div>
);

type ProjectItemGridProps = Pick<ProjectType, 'company' | 'itemKey'>;

export default ProjectItemGrid;
