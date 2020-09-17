import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const images = require.context('../../../../images/websites', true);
const logos = require.context('../../../../images/clients', true);

const ProjectItemGrid = ({
	company,
	itemKey,
}) => (
	<div className="grid-item">
		<div className="popup">
			<Link to={`/project/${itemKey}`}>

			<div className="popup-inner">
				<div className="popup-cont">
					<img
						src={logos(`./${company}.jpg`)}
					/>
					<p className="project-link">View</p>
				</div>
				<div className="popup-overlay" />
			</div>

			</Link>
		</div>

		<img
			src={images(`./${itemKey}/sm.jpg`)}
			className="project-img"
		/>
	</div>
);

ProjectItemGrid.propTypes = {
	company: PropTypes.string,
	itemKey: PropTypes.string,
};

export default ProjectItemGrid;
