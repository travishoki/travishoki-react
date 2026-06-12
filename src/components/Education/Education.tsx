import React from 'react';

import imgUvu from '~images/education/uvu.png';

import styles from './Education.module.scss';

export const Education = () => (
	<section className={`white center ${styles.educationComponent}`}>
		<h2>Utah Valley University</h2>
		<img className="center" src={imgUvu} />

		<p>Digital Media Major</p>
		<p className="bold">Bachelor of Science</p>
		<p>Internet Technology Emphasis</p>
	</section>
);
