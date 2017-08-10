import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import ProjectsData from './ProjectsData';
import ProjectItemList from './ProjectItemList';
import ProjectItemGrid from './ProjectItemGrid';
import FilterItem from './FilterItem';

const filterList = ['jQuery', 'WordPress', 'Python', 'AngularJs', 'PHP', 'SCSS', 'LESS-CSS'];

class ProjectsPage extends React.Component {
    constructor(props) {
        super(props);

        this.toggleView = this.toggleView.bind(this);
        this.onSelectFilter = this.onSelectFilter.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.onClearFilter = this.onClearFilter.bind(this);
        this.onClearSearchTerm = this.onClearSearchTerm.bind(this);

        this.state = {
            grid: true,
            filter: props.params.filter || null,
            searchTerm: ''
        };
    }
    inArr(item, arr) {
        return arr.filter((thing) => {
            return thing === item;
        }).length > 0;
    }
    filterProjects(){
        const { filter, searchTerm } = this.state;
        let projects = ProjectsData;

        //Filter
        if (filter !== null){
            projects = projects.filter((item) => {
                return this.inArr(filter, item.techs);
            });
        }

        //Search
        if (searchTerm !== '') {
            projects = projects.filter((item) => {
                const a = ["title", "subtitle", "desc", "contributions"];
                for (let i = 0 ; i < a.length ; i++) {
                    const key = a[i];
                    const str = String(item[key]).toLowerCase();
                    if (str.indexOf(searchTerm.toLowerCase()) > -1) {
                        return true;
                    }
                }
                return false;
            });
        }

        return projects;
    }
    toggleView(){
        this.setState({ grid: !this.state.grid });
    }
    onSelectFilter(filter){
        if(filter === this.state.filter){
            filter = null;
        }
        this.setState({ filter });
    }
    onChangeSearch(e) {
        const searchTerm = e.currentTarget.value;
        this.setState({ searchTerm });
    }
    onClearFilter() {
        const filter = null;
        this.setState({ filter });
    }
    onClearSearchTerm() {
        const searchTerm = '';
        this.setState({ searchTerm });
    }
    render() {
        const projects = this.filterProjects();
        return (
            <div id="container" className="projects">
                <div className={'projects-container '+(this.state.grid ? 'grid' : 'list')}>
                    <h1 onClick={this.toggleView}>Projects</h1>

                    <div className="filter-section">
                        <p>Click on the icons below to filter my work by different technologies</p>
                        <ul className="filters">
                            {filterList.map((item, index) => {
                                return (
                                    <FilterItem
                                        key={index}
                                        item={item}
                                        filter={this.state.filter}
                                        onSelectFilter={this.onSelectFilter}
                                    />
                                );
                            })}
                        </ul>
                        {this.state.filter &&
                            <p className="filter-text">Filter: {this.state.filter}</p>
                        }
                        <form>
                            <div
                                id="input-holder"
                                className={this.state.searchTerm ? 'hasSearchTerm' : ''}
                            >
                                <input
                                    type="text"
                                    className="form-control"
                                    maxLength="25"
                                    placeholder="Search"
                                    value={this.state.searchTerm}
                                    onChange={this.onChangeSearch}
                                />
                                {this.state.searchTerm &&
                                    <i className="fa fa-close" onClick={this.onClearSearchTerm} />
                                }
                            </div>
                        </form>
                    </div>

                    {projects.length > 0 ? (
                        <ul className="projects">
                            {projects.map((project, index) => {
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
                    ) : (
                        <div className="no-results">
                            <h3>No results</h3>
                            {this.state.filter &&
                                <p onClick={this.onClearFilter}>Clear Filter: {this.state.filter} <i className="fa fa-close" /></p>
                            }
                            {this.state.searchTerm &&
                                <p onClick={this.onClearSearchTerm}>Clear Search Term: {this.state.searchTerm} <i className="fa fa-close" /></p>
                            }
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

ProjectsPage.propTypes = {
    params: PropTypes.object
};

export default ProjectsPage;
