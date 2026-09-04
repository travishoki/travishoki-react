import React from 'react';

import classNames from 'classnames';

import { getYearsSince } from '~helpers/years';

import { MikeShinoda } from './MikeShinoda/MikeShinoda';
import { Signature } from './Signature/Signature';

import styles from './About.module.scss';

const MY_BIRTH_YEAR = '1990-07-08';
const MY_AGE = getYearsSince(MY_BIRTH_YEAR);

export const About = () => (
	<section className="primary-three">
		<div className={classNames('boxed', styles.about)}>
			<p className={styles.salutation}>Hey,</p>
			<p className="indent mb-0">
				My name is Travis Hoki. I&apos;m from Pleasant Grove, UT. I&apos;m{' '}
				{MY_AGE} years old. I drive a gray Honda Accord, its name is Bruce like
				the shark in Finding Nemo. I&apos;ve been told I look like{' '}
				<MikeShinoda /> from Linkin Park, or like a less attractive version of
				Keanu Reeves. I look tired and unshaven but am nice. I&apos;m rocking a
				dad bod, but people that don&apos;t like ice cream can’t be trusted.
			</p>
			<Signature />
		</div>
	</section>
);
