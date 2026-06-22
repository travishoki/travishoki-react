import React from 'react';

import classNames from 'classnames';

import styles from './CareerOverview.module.scss';

export const CareerOverview = () => {
	return (
		<section className="primary-three">
			<div className="boxed-xl">
				<h2>Career Overview</h2>
				<p className={classNames('indent', styles.careerOverviewParagraph)}>
					Accomplished Senior Software Engineer with over 14 years of experience
					building, scaling, and optimizing enterprise-grade web applications.
					Proven track record of architecting robust internationalization
					infrastructure, automating engineering code cleanliness, and leading
					high-leverage framework migrations while establishing standards and
					mentoring technical teams.
				</p>
			</div>
		</section>
	);
};
