import React, { Suspense } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { PageLoader } from '~components/PageLoader/PageLoader';

import { App } from './App';

const AboutPage = React.lazy(() =>
	import('./pages/AboutPage/AboutPage').then((m) => ({ default: m.AboutPage })),
);
const ContactPage = React.lazy(() =>
	import('./pages/ContactPage/ContactPage').then((m) => ({
		default: m.ContactPage,
	})),
);
const EducationPage = React.lazy(() =>
	import('./pages/EducationPage/EducationPage').then((m) => ({
		default: m.EducationPage,
	})),
);
const FightForYourDreamsPage = React.lazy(() =>
	import('./pages/PassionPage/FightForYourDreamsPage/FightForYourDreamsPage').then(
		(m) => ({ default: m.FightForYourDreamsPage }),
	),
);
const HokiSkateboardsPage = React.lazy(() =>
	import('./pages/PassionPage/HokiSkateboardsPage/HokiSkateboardsPage').then(
		(m) => ({ default: m.HokiSkateboardsPage }),
	),
);
const HomePage = React.lazy(() =>
	import('./pages/HomePage/HomePage').then((m) => ({ default: m.HomePage })),
);
const NotFoundPage = React.lazy(() =>
	import('./pages/NotFoundPage/NotFoundPage').then((m) => ({
		default: m.NotFoundPage,
	})),
);
const ProjectsPage = React.lazy(() =>
	import('./pages/ProjectsPage/ProjectsPage').then((m) => ({
		default: m.ProjectsPage,
	})),
);
const ResumePage = React.lazy(() =>
	import('./pages/ResumePage/ResumePage').then((m) => ({
		default: m.ResumePage,
	})),
);
const SingleProjectPage = React.lazy(() =>
	import('./pages/SingleProjectPage/SingleProjectPage').then((m) => ({
		default: m.SingleProjectPage,
	})),
);

export const AppRoutes = () => (
	<Router>
		<App>
			<Suspense fallback={<PageLoader />}>
				<Routes>
					<Route element={<HomePage />} path="/" />
					<Route
						element={<ProjectsPage />}
						path="/projects/:paramFilter?/:paramSearch?"
					/>
					<Route
						element={<SingleProjectPage />}
						path="/project/:paramItemKey"
					/>
					<Route element={<ResumePage />} path="/resume" />
					<Route element={<EducationPage />} path="/education" />
					<Route element={<ContactPage />} path="/contact" />
					<Route element={<AboutPage />} path="/about" />
					<Route
						element={<HokiSkateboardsPage />}
						path="/passion/hoki-skateboards"
					/>
					<Route
						element={<FightForYourDreamsPage />}
						path="/passion/fight-for-your-dreams"
					/>
					<Route element={<NotFoundPage />} path="*" />
				</Routes>
			</Suspense>
		</App>
	</Router>
);
