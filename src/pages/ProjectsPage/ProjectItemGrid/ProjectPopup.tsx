import React from 'react';

import { Link } from 'react-router-dom';
import { ProjectLink } from '../ProjectLink';
import './ProjectPopup.scss';

type ProjectPopupProps = {
	companySlug: string;
	itemKey: string;
	projectLink: string;
};

const logos = require.context('../../../images/clients', true);

export const ProjectPopup = ({
	companySlug,
	itemKey,
	projectLink,
}: ProjectPopupProps) => (
	<div className="popup">
		<Link to={`${projectLink}/${itemKey}`}>
			<div className="popup-inner">
				<div className="popup-cont">
					<img src={logos(`./${companySlug}.jpg`)} />
					<ProjectLink />
				</div>
				<div className="popup-overlay" />
			</div>
		</Link>
	</div>
);
