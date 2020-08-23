import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
const images = require.context('../../../images/websites', true);
const logos = require.context('../../../images/clients', true);

const ProjectGridItem = ({ project}) => (
	<div className="grid-item">
		<div className="popup">
			<Link to={"/project/"+project.key}>
			<div className="popup-inner">
				<div className="popup-cont">
					<img
						src={logos(`./${project.company}.jpg`)}
					/>
					<p className="project-link">View</p>
				</div>
				<div className="popup-overlay"></div>
			</div>
			</Link>
		</div>

		<img
			src={images(`./${project.key}/sm.jpg`)}
			className="project-img"
		/>
	</div>
);

ProjectGridItem.propTypes = {
    project: PropTypes.object.isRequired
};

export default ProjectGridItem;
