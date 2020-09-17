import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import SingleProjectPage from './pages/SingleProjectPage/SingleProjectPage';
import ResumePage from './pages/ResumePage/ResumePage';
import ContactPage from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutPage/AboutPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="projects(/:filter/:search)" component={ProjectsPage} />
		<Route path="project/:itemKey" component={SingleProjectPage} />
		<Route path="resume" component={ResumePage} />
		<Route path="contact" component={ContactPage} />
		<Route path="about" component={AboutPage} />
		<Route path="*" component={NotFoundPage} />
	</Route>
);
