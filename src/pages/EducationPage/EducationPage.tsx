import React from 'react';

import imgUvu from '~images/global/uvu.png';

import './EducationPage.scss';

const EducationPage = () => (
	<section className="white center education">
		<h3>Utah Valley University</h3>
		<img className="center" src={imgUvu} />

		<div className="text-block">
			<p>Digital Media Major</p>
			<p className="degree">Bachelor of Science</p>
			<p>Internet Technology Emphasis</p>
		</div>

		<div className="text-block">
			<p className="degree">Associate in Applied Science</p>
			<p>Digital Communication Technology</p>
		</div>
	</section>
);

export default EducationPage;
