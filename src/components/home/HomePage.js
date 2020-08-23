import React from 'react';
import { Link } from 'react-router';

import Projects from '../projects/ProjectsPage.data';
import Education from '../common/Education';
import HokiSkateboards from '../common/HokiSkateboards';
import ListSection from '../common/ListSection';
import SocialIcons from '../common/SocialIcons';

const img_profile_pic = require('../../../images/global/travis-hoki.png');
const img_tech_icons = require('../../../images/icons/tech-icons/tech-icons.jpg');
const images = require.context('../../../images/websites', true);

const experienceYears = () => {
	const MONTH = 11;
	const YEAR = 2011;
	const d = new Date();
	const monthNum = d.getMonth() + 1;
	const yearNum = d.getFullYear();
	const fullYearsExperience = yearNum - YEAR;

	if (monthNum < MONTH) {
		return fullYearsExperience - 1;
	}

	return fullYearsExperience;
};

const skillsList = [
	'React JS and Redux',
    'Preprocessed CSS (Less and SCSS)',
    'Responsive CSS with Media Queries',

	'Node JS Server-side rendering for SEO and optimization',
    'Small and large business experience',
    'SQL and restful API integration'
];

const HomePage = () => {
    const currentProjects = [Projects[0], Projects[1], Projects[2]];

    return (
        <div
			id="container"
			className="home"
		>
            <div className="banner">
                <div className="banner-cont">
                    <h1>Web Developer</h1>
                    <SocialIcons/>
                    <Link
						className="btn btn-primary btn-lg"
						to="/contact"
					>Contact Me</Link>
                </div>
                <div className="banner-bg"></div>
                <img className="banner-pic" src={img_profile_pic}/>
            </div>

            <section className="white skills">
                <img
					src={img_tech_icons}
					className="center"
				/>
            </section>

            <section className="projects">
                <h3>Projects</h3>
                <div className="boxed boxed-lg">
                    <ul>
                        {currentProjects.map((project, index) => (
                            <li key={index}>
                                <div className="project-header">
                                    <div className="project-header-inner">
                                        <h2>{project.title}</h2>
                                        <h3>{project.subtitle}</h3>
                                    </div>
                                </div>
                                <img
                                    src={images(`./${project.key}/sm.jpg`)}
                                    className="project-img"
                                />
                            </li>
                        ))}
                    </ul>
                    <Link
						to="/projects"
						activeClassName="active"
						className="btn btn-primary btn-lg"
					>View All Projects</Link>
                </div>
            </section>

            <ListSection
				title={experienceYears() + "+ Years Experience"}
				list={skillsList}
			/>

            <Education />

			<HokiSkateboards />
      </div>
    );
};

export default HomePage;
