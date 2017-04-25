import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import ProjectsData from './ProjectsData';
import ProjectItemList from './ProjectItemList';
import ProjectItemGrid from './ProjectItemGrid';

const filterList = ['jQuery', 'WordPress', 'Python', 'AngularJs', 'PHP', 'SCSS', 'LESS-CSS'];

class ProjectsPage extends React.Component {
    constructor(props) {
        super(props);
        this.toggleView = this.toggleView.bind(this);
        this.selectFilter = this.selectFilter.bind(this);
        this.state = {
            grid: true,
            filter: this.props.params.filter || null,
            projects: this.checkFilter(this.props.params.filter)
        };
        this.checkFilter();
    }
    checkFilter(filter){
        function inArr(item, arr){
            return arr.filter((thing) => {
                return thing === item;
            }).length > 0;
        }
        return ProjectsData.filter((item) => {
            return inArr(filter, item.techs);
        });
    }
    toggleView(){
        this.setState({ grid: !this.state.grid });
    }
    selectFilter(filter){
        if(filter === this.state.filter){
            this.setState({ filter: null });
        }else{
            let filteredItems = this.checkFilter(filter);
            this.setState({ filter });
            this.setState({ projects: filteredItems });
        }
    }
    render() {
        return (
            <div id="container" className="projects">
                <div className={'projects-container '+(this.state.grid ? 'grid' : 'list')}>
                    <h1 onClick={this.toggleView}>Projects</h1>

                    <div className="filter-section">
                        <ul className="filters">
                        {filterList.map((item, index) => {
                            return (
                                <li key={index} onClick={this.selectFilter.bind(this, item)} className={item+' '+(this.state.filter==item ? 'active' : '')}></li>
                            )
                        })}
                        </ul>
                        {this.state.filter &&
                            <p className="filter-text">Filter: {this.state.filter}</p>
                        }
                    </div>

                    <ul className="projects">
                        {this.state.projects.map((project, index) => {
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

ProjectsPage.propTypes = {
    params: PropTypes.object
};

export default ProjectsPage;
