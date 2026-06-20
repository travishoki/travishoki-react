import React from 'react';

import classNames from 'classnames';

import styles from './CurrentTechInterestsHeader.module.scss';

export const CurrentTechInterestsHeader = () => (
	<div className={classNames(styles.currentTechInterestsHeader, 'mb-3')}>
		<h2>Current Tech Interests</h2>
		<p>
			I&apos;m highly motivated to deepen my knowledge and refine my skills in
			these key areas:
		</p>
	</div>
);
