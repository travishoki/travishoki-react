import React from 'react';
import {Link} from 'react-router';
import Projects from './ProjectsData';

const imgOvestock = require('../../../images/websites/overstock-thumbnail.jpg');

class ProjectsPage extends React.Component {
  render() {
    return (
        <div className="boxed boxed-md">
            <h1>Projects</h1>
            <ul className="projects">
                {Projects.map((project, index)=>{
                    return (
                        <li key={index} className="project">
                            <div className="projectHeading">
                                <h2>{project.title}</h2>
                                <h3>{project.subtitle}</h3>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <img src={imgOvestock}/>
                                </div>
                                <div className="col-sm-6">
                                    <p>{project.desc}</p>
                                    <p className="list-heading">Contributions</p>
                                    <ul>
                                        {project.contributions.map((contribution, index)=>{
                                            return (
                                                <li key={index}>{contribution}</li>
                                            );
                                        })}
                                    </ul>
                                    <p className="list-heading">Technology</p>
                                    <ul>
                                        {project.techs.map((tech, index)=>{
                                            return (
                                                <li key={index}>{tech}</li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                            {project.live &&
                                <a href="{project.url}" className="btn btn-primary btn-lg">View Live Site</a>
                            }
                        </li>
                    );
                })}
            </ul>
        </div>
    );
  }
}

export default ProjectsPage;
