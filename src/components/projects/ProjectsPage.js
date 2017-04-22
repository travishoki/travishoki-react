import React from 'react';
import { Link } from 'react-router';
import Projects from './ProjectsData';
import ProjectItemList from './ProjectItemList';
import ProjectItemGrid from './ProjectItemGrid';

class ProjectsPage extends React.Component {
    constructor(props) {
        super(props);
        this.toggleView = this.toggleView.bind(this);
        this.state = {
            grid: true
        };
    }
    toggleView(){
        this.setState({ grid: !this.state.grid });
    }
    render() {
        return (
            <div id="container" className="projects">
                <div className={'projects-container '+(this.state.grid ? 'grid' : 'list')}>
                    <h1 onClick={this.toggleView}>Projects</h1>
                    <ul className="projects">
                        {Projects.map((project, index)=>{
                            return (
                                <li key={index} className="project">
                                    {this.state.grid &&
                                        <ProjectItemGrid project={project} index={index} />
                                    }
                                    {!this.state.grid &&
                                        <ProjectItemList project={project}/>
                                    }
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ProjectsPage;
