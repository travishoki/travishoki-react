import React from 'react';

import styles from './CoreCompetencies.module.scss';

const COMPETENCIES = [
	{
		items: 'JavaScript (ES6+), TypeScript, HTML5, CSS3, SQL',
		label: 'Languages',
	},
	{
		items: 'React JS, React Native, Redux, Node.js, AngularJS',
		label: 'Frameworks',
	},
	{
		items: 'Webpack, Vite, ESLint, Git, Less, Sass, SCSS',
		label: 'Build Systems',
	},
	{
		items:
			'Enterprise Architecture, Unit Testing, Server-Side Rendering (SSR), Responsive UI',
		label: 'Methodologies',
	},
];

export const CoreCompetencies = () => {
	return (
		<>
			<h2>Skills &amp; Core Competencies</h2>
			<ul className={styles.list}>
				{COMPETENCIES.map(({ items, label }) => (
					<li key={label}>
						<strong>{label}:</strong> {items}
					</li>
				))}
			</ul>
		</>
	);
};
