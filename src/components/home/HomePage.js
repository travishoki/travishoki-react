import React from 'react';
import { Link } from 'react-router';
import Projects from '../projects/ProjectsData';
import Education from '../common/Education';

import SocialIcons from '../common/SocialIcons';

const img_profile_pic = require('../../../images/home/travis-hoki.jpg');
const img_tech_icons = require('../../../images/icons/tech-icons/tech-icons-filters.png');

class HomePage extends React.Component {
  render() {
    const currentProjects = [Projects[0], Projects[1], Projects[2]];
    return (
        <div id="container" className="home">
            <div className="banner">
                <div className="contact-info">
                    <h1>Web Developer</h1>
                    <SocialIcons/>
                    <a className="btn btn-primary btn-lg" ng-click="setRoute('contact')">Contact Me</a>
                </div>
                <img className="profile-pic" src={img_profile_pic}/>
            </div>

            <section className="white skills">
                <img src={img_tech_icons} className="center"/>
            </section>

            <section className="projects">
                <h3>Projects</h3>
                <div className="boxed boxed-lg">
                    <ul>
                        {currentProjects.map((project, index)=>{
                            return (
                                <li key={index}>
                                    <div className="project-header">
                                        <div className="project-header-inner">
                                            <h2>{project.title}</h2>
                                            <h3>{project.subtitle}</h3>
                                        </div>
                                    </div>
                                    <img src={project.imgThumb}/>
                                </li>
                            );
                        })}
                    </ul>
                    <Link to="/projects" activeClassName="active" className="btn btn-primary btn-lg">View All Projects</Link>
                </div>
            </section>

            <section className="primary experience">
                <h3>5+ Years Experience</h3>
                <div className="boxed boxed-md">
                    <div className="row">
                        <div className="col-sm-6">
                            <ul>
                                <li>Preprocessed CSS (Less and SCSS)</li>
                                <li>Responsive CSS with Media Queries</li>
                                <li>JavaScript and CoffeeScript</li>
                                <li>JavaScript Framework in Angular</li>
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <ul>
                                <li>Small and Large business experience</li>
                                <li>Content Management Systems</li>
                                <li>Custom Wordpress Themes</li>
                                <li>SQL and restful API integration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Education />
      </div>
    );
  }
}

export default HomePage;
