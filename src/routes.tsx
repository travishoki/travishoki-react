import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import PassionPage from './pages/PassionPage/AboutPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ResumePage from './pages/ResumePage/ResumePage';
import SingleProjectPage from './pages/SingleProjectPage/SingleProjectPage';

export default (
	<Router>
		<App>
			<Routes>
				<Route element={<HomePage />} path="/" />
				<Route
					element={<ProjectsPage />}
					path="/projects/:paramFilter?/:paramSearch?"
				/>
				<Route element={<SingleProjectPage />} path="/project/:paramItemKey" />
				<Route element={<ResumePage />} path="/resume" />
				<Route element={<ContactPage />} path="/contact" />
				<Route element={<AboutPage />} path="/about" />
				<Route element={<PassionPage />} path="/passion" />
				<Route element={<NotFoundPage />} path="*" />
			</Routes>
		</App>
	</Router>
);
