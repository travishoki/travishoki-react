import React from 'react';

import imgScoutingAmerica from '~images/volunteer/scouting-america.png';
import './Volunteer.scss';

export const Volunteer = () => (
	<section className="center primary volunteer-component">
		<h2 className="mb-2">Scouting America</h2>

		<img
			className="center mb-2"
			height="200"
			src={imgScoutingAmerica}
			width="177"
		/>
		<h3 className="mb-2">Volunteering in Cub Scouts Since 2025</h3>
		<div className="row justify-content-center">
			<div className="col-auto">
				<p>Bear&apos;s Assistant Den Leader</p>
				<p>Since Spring of 2025</p>
			</div>
			<div className="col-auto">
				<p>Webelos&apos; Den Leader</p>
				<p>Summer of 2026</p>
			</div>
		</div>
	</section>
);
