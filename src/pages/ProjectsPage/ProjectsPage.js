import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NoResults from './NoResults/NoResults';
import { filterList, ProjectsData } from './ProjectsPage.data';
import ProjectItemList from './ProjectItemList/ProjectItemList';
import ProjectItemGrid from './ProjectItemGrid/ProjectItemGrid';
import TechIcon from './TechIcon/TechIcon';
import FilterItem from './Filter/FilterItem';

class ProjectsPage extends Component {
    constructor(props) {
        super(props);

		this.onChangeFilter = this.onChangeFilter.bind(this);
		this.onChangeSearch = this.onChangeSearch.bind(this);
		this.onClearAndCloseFilter = this.onClearAndCloseFilter.bind(this);
		this.onClearFilter = this.onClearFilter.bind(this);
        this.onClearSearchTerm = this.onClearSearchTerm.bind(this);
		this.onSelectFilter = this.onSelectFilter.bind(this);
		this.toggleOpenFilter = this.toggleOpenFilter.bind(this);
		this.toggleView = this.toggleView.bind(this);

        const filter = (props.params.filter === 'all') ? null : props.params.filter;

        this.state = {
			filter: filter || null,
			filterTerm: filter || null,
            grid: true,
			isFilterOpen: false,
            searchTerm: props.params.search || ''
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
                    const itemKey = a[i];
                    const str = String(item[itemKey]).toLowerCase();

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

        const filterTerm = filter;

        this.setState({ filter, filterTerm });
    }

    onChangeSearch(e) {
        const searchTerm = e.currentTarget.value;

        this.setState({ searchTerm });
    }

    onClearFilter() {
        const filter = null;
        const filterTerm = null;

        this.setState({ filter, filterTerm });
    }

    onClearSearchTerm() {
        const searchTerm = '';

        this.setState({ searchTerm });
    }

    getResultsCountClass(num) {
        const maxColumnCount = 4;

        if (num < maxColumnCount) {
            return `results-${num}`;
        }

        return 'results-full';
    }

    onChangeFilter(e) {
        const filterTerm = e.target.value;

        this.setState({ filterTerm });
    }

    toggleOpenFilter() {
        this.setState({ isFilterOpen: !this.state.isFilterOpen });
    }

    onClearAndCloseFilter() {
        this.onClearFilter();
        this.toggleOpenFilter();
    }

    render() {
        const projects = this.filterProjects();
        const resultsCountClass = this.getResultsCountClass(projects.length);
        const showResultsCount = (this.state.filter || this.state.searchTerm) && projects.length > 0;
        const filterListFiltered = filterList.filter((item) => {
            return this.state.filterTerm === null || item.toLowerCase().indexOf(this.state.filterTerm.toLowerCase()) > -1;
        });

        return (
            <div id="container" className="projects">
                <div className={'projects-container '+(this.state.grid ? 'grid' : 'list')}>
                    <h1>Projects</h1>

                    <div className="filter-section">
                        <p className="center">Click on the icons below to filter my work by different technologies</p>

                        {this.state.filter ? (
                            <div className="tech-icon-item">
                                <TechIcon name={this.state.filter} />
                                <p>{this.state.filter}</p>
                                <i
									className="fa fa-close pointer f-right"
									onClick={this.onClearAndCloseFilter}
								/>
                            </div>
                        ):(
                            <div>
                                {this.state.isFilterOpen ? (
                                    <div>
                                        <form>
                                            <input
                                                type="text"
                                                className="form-control"
                                                maxLength="25"
                                                placeholder="Tech Filter"
                                                value={this.state.filterTerm}
                                                onChange={this.onChangeFilter}
                                            />
                                        </form>
                                        {filterListFiltered.length > 0 ? (
                                            <ul className="tech-icon-list filters">
                                                {!this.state.filterTerm && (
                                                    <li
                                                        onClick={this.onClearAndCloseFilter}
                                                        className="filter-item tech-icon-item"
                                                    >
                                                        <p>All</p>
                                                    </li>
                                                )}

                                                {filterListFiltered.map((item, index) => (
                                                    <FilterItem
                                                        key={index}
                                                        item={item}
                                                        filter={this.state.filter}
                                                        onSelectFilter={this.onSelectFilter}
                                                    />
                                                ))}
                                            </ul>
                                        ):(
                                            <p className="center">No Results</p>
                                        )}
                                    </div>
                                ) : (
                                    <div
										onClick={this.toggleOpenFilter}
										className="filter-item pointer"
									>
                                        <p className="f-left">Filter by Tech</p>
                                        <i className="fa fa-chevron-down f-right"/>
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="clearfix" />

                        <form>
                            <div
                                id="input-holder"
                                className={this.state.searchTerm ? 'hasSearchTerm' : ''}
                            >
                                <input
                                    type="text"
                                    className="form-control"
                                    maxLength="25"
                                    placeholder="Search Term"
                                    value={this.state.searchTerm}
                                    onChange={this.onChangeSearch}
                                />
                                {this.state.searchTerm && (
                                    <i className="fa fa-close" onClick={this.onClearSearchTerm} />
                                )}
                            </div>
                        </form>

                        {showResultsCount && (
                            <p className="results-count">Results: {projects.length}</p>
                        )}

                        {projects.length > 0 && (
                            <p
								className="view-controls"
								onClick={this.toggleView}
							>
								View: <i className={`fa fa-${(this.state.grid) ? 'th-large' : 'th-list'}`} />
							</p>
                        )}
                    </div>

                    {projects.length > 0 ? (
                        <ul className={`projects ${resultsCountClass}`}>
                            {projects.map((project, index) => (
                                <li key={index} className="project">
                                    {this.state.grid ? (
                                        <ProjectItemGrid {...project} />
                                    ) : (
                                        <ProjectItemList {...project}/>
                                    )}
                                </li>
                            ))}
                        </ul>
                    ) : (
						<NoResults
							filter={this.state.filter}
							onClearFilter={this.onClearFilter}
							onClearSearchTerm={this.onClearSearchTerm}
							searchTerm={this.state.searchTerm}
						/>
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
