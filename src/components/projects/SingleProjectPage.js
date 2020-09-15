import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import { ProjectsData } from './ProjectsPage.data';
import ProjectItemList from './ProjectItemList';

let singleProject;

class SingleProjectPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            grid: true
        };

        singleProject = ProjectsData.find((project) => {
            return project.key === props.params.key;
        });
    }

    render() {
        return (
            <div
				id="container"
				className="projects"
			>
                <div className={'projects-container '+(this.state.grid ? 'grid' : 'list')}>
                    <Link
						to="/projects"
						className="btn btn-primary"
					>View All</Link>
                    <ProjectItemList project={singleProject}/>
                </div>
            </div>
        );
    }
}

SingleProjectPage.propTypes = {
    params: PropTypes.string.isRequired
};

export default SingleProjectPage;
