import React from 'react';

import classNames from 'classnames';

import { ExternalLink } from '~components/ExternalLink/ExternalLink';
import ImgGearUp from '~images/education/gear-up.jpg';

import styles from './Scholarships.module.scss';

export const Scholarships = () => (
	<div className={classNames(styles.scholarships, 'mb-2')}>
		<img alt="Gear Up Logo" src={ImgGearUp} />{' '}
		<p className={styles.scholarshipDescription}>
			Recipient of the{' '}
			<ExternalLink href="https://www.uvu.edu/gear-up/index.html">
				Gear Up
			</ExternalLink>{' '}
			scholarship.
		</p>
	</div>
);
