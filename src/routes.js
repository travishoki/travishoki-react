import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import ProjectsPage from './components/projects/ProjectsPage';
import SingleProjectPage from './components/projects/SingleProjectPage';
import ResumePage from './components/resume/ResumePage';
import ContactPage from './components/contact/ContactPage';
import AboutPage from './components/about/AboutPage';
import notFoundPage from './components/notFound/NotFoundPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="projects(/:filter/:search)" component={ProjectsPage} />
		<Route path="project/:key" component={SingleProjectPage} />
		<Route path="resume" component={ResumePage} />
		<Route path="contact" component={ContactPage} />
		<Route path="about" component={AboutPage} />
		<Route path="*" component={notFoundPage} />
	</Route>
);
