import React from 'react';

import classNames from 'classnames';

import { getExperienceYears } from '~helpers/years';

import styles from './CareerOverview.module.scss';

export const CareerOverview = () => {
	const yearsOfExperience = getExperienceYears();

	return (
		<>
			<h2>Career Overview</h2>
			<p className={classNames('indent', styles.careerOverviewParagraph)}>
				Accomplished Senior Software Engineer with over {yearsOfExperience}{' '}
				years of experience building, scaling, and optimizing enterprise-grade
				web applications. Proven track record of helping build robust
				internationalization infrastructure, automating engineering code
				cleanliness, and leading high-leverage framework migrations while
				establishing standards and mentoring technical teams.
			</p>
		</>
	);
};
