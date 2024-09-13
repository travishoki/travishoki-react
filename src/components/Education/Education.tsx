import React from 'react';

import imgUvu from '~images/education/uvu.png';

import './Education.scss';

export const Education = () => (
	<section className="white center education-component">
		<h3>Utah Valley University</h3>
		<img className="center" src={imgUvu} />

		<p>Digital Media Major</p>
		<p className="degree">Bachelor of Science</p>
		<p>Internet Technology Emphasis</p>
	</section>
);
