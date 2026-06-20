import React from 'react';

import classNames from 'classnames';

import { ImgPopIn } from '~animations/ImgPopIn';
import ImgUvu from '~images/education/uvu.png';

import styles from './Education.module.scss';

export const Education = () => (
	<section className={classNames('white', styles.educationComponent)}>
		<h2>Utah Valley University</h2>
		<ImgPopIn
			alt="Utah Valley University Logo"
			className="center"
			src={ImgUvu}
		/>
		<p>Digital Media Major</p>
		<p className="bold">Bachelor of Science</p>
		<p>Internet Technology Emphasis</p>
	</section>
);
