import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Projects from './ProjectsData';
import ProjectItemList from './ProjectItemList';

let singleProject;

class SingleProjectPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: true
        };
        singleProject = Projects.filter((project, index) => {
            return index.toString() === this.props.params.id;
        })[0];
    }
    render() {
        return (
            <div id="container" className="projects">
                <div className={'projects-container '+(this.state.grid ? 'grid' : 'list')}>
                    <Link to="/projects" className="btn btn-primary">View All</Link>
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
