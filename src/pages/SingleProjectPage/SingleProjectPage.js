import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import { ProjectsData } from '../ProjectsPage/ProjectsPage.data';
import ProjectItemList from '../ProjectsPage/ProjectItemList/ProjectItemList';

const SingleProjectPage = ({
	params
}) => {
    const singleProject = ProjectsData.find((project) => project.key === params.key);

    return (
        <div
			id="container"
			className="projects"
		>
            <div className="projects-container grid">
                <Link
					to="/projects"
					className="btn btn-primary"
				>View All</Link>
                <ProjectItemList project={singleProject}/>
            </div>
        </div>
    );
};

SingleProjectPage.propTypes = {
    params: PropTypes.string.isRequired
};

export default SingleProjectPage;
