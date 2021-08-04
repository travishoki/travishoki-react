import React from 'react';

import imgUvu from '../../../images/global/uvu.png';

const Education = () => (
	<section className="white center education">
		<h3>Utah Valley University</h3>
		<img
			className="center"
			src={imgUvu}
		/>

		<p>Digital Media Major</p>
		<p className="degree">Bachelor of Science</p>
		<p>Internet Technology Emphasis</p>
	</section>
);

export default Education;
