import React from 'react';
import PropTypes from 'prop-types';

import ProjectItemList from '../ProjectItemList/ProjectItemList';
import ProjectItemGrid from '../ProjectItemGrid/ProjectItemGrid';

const Projects = ({
	grid,
	projects,
}) => (
	<div>
		{projects.map((project, index) => (
			<li key={index} className="project">
				{grid ? (
					<ProjectItemGrid {...project} />
				) : (
					<ProjectItemList {...project}/>
				)}
			</li>
		))}
	</div>
);

Projects.propTypes = {
	grid: PropTypes.bool,
    projects: PropTypes.array,
};

Projects.defaultProps = {
	grid: false,
};

export default Projects;
