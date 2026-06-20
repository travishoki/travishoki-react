import React, { Suspense } from 'react';

import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from 'react-router-dom';

import { ROUTE_PATTERNS } from '~const/Routes.const';

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
const MobileAppPage = React.lazy(() =>
	import('./pages/PassionPage/MobileAppPage/MobileAppPage').then((m) => ({
		default: m.MobileAppPage,
	})),
);
const HokiSkateboardsPage = React.lazy(() =>
	import('./pages/PassionPage/HokiSkateboardsPage/HokiSkateboardsPage').then(
		(m) => ({ default: m.HokiSkateboardsPage }),
	),
);
const PassionPage = React.lazy(() =>
	import('./pages/PassionPage/PassionPage').then((m) => ({
		default: m.PassionPage,
	})),
);
const HomePage = React.lazy(() =>
	import('./pages/HomePage/HomePage').then((m) => ({ default: m.HomePage })),
);
const HowItsMadePage = React.lazy(() =>
	import('./pages/HowItsMadePage/HowItsMadePage').then((m) => ({
		default: m.HowItsMadePage,
	})),
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
			<Suspense fallback={null}>
				<Routes>
					<Route element={<HomePage />} path={ROUTE_PATTERNS.HOME} />
					<Route element={<ProjectsPage />} path={ROUTE_PATTERNS.PROJECTS} />
					<Route
						element={<SingleProjectPage />}
						path={ROUTE_PATTERNS.PROJECT}
					/>
					<Route element={<ResumePage />} path={ROUTE_PATTERNS.RESUME} />
					<Route
						element={<HowItsMadePage />}
						path={ROUTE_PATTERNS.HOW_ITS_MADE}
					/>
					<Route element={<EducationPage />} path={ROUTE_PATTERNS.EDUCATION} />
					<Route element={<ContactPage />} path={ROUTE_PATTERNS.CONTACT} />
					<Route element={<AboutPage />} path={ROUTE_PATTERNS.ABOUT} />
					<Route element={<PassionPage />} path="/passion">
						<Route
							element={
								<Navigate replace to={ROUTE_PATTERNS.HOKI_SKATEBOARDS} />
							}
							index
						/>
						<Route element={<HokiSkateboardsPage />} path="hoki-skateboards" />
						<Route
							element={<FightForYourDreamsPage />}
							path="fight-for-your-dreams"
						/>
						<Route element={<MobileAppPage />} path="mobile-app" />
					</Route>
					<Route element={<NotFoundPage />} path="*" />
				</Routes>
			</Suspense>
		</App>
	</Router>
);
