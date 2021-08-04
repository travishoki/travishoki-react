import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { PROJECTS_DATA } from '../ProjectsPage/ProjectsPage.data';
import ProjectItemList from '../ProjectsPage/ProjectItemList/ProjectItemList';

const SingleProjectPage = () => {
	const { paramItemKey } = useParams();
    const singleProject = PROJECTS_DATA.find((project) => project.itemKey === paramItemKey);

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
                <ProjectItemList {...singleProject}/>
            </div>
        </div>
    );
};

export default SingleProjectPage;
