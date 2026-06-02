import React from 'react';

import imgScoutingAmerica from '~images/volunteer/scouting-america.png';
import './Volunteer.scss';

export const Volunteer = () => (
	<section className="center primary volunteer-component">
		<h2>Scouting America</h2>

		<img className="center" height="200" src={imgScoutingAmerica} width="177" />
		<h3>Volunteering in Cub Scouts Since 2025</h3>
		<div className="volunteer-roles">
			<div>
				<p>Bear&apos;s Assistant Den Leader</p>
				<p>Since Spring of 2025</p>
			</div>
			<div>
				<p>Webelos&apos; Den Leader</p>
				<p>Summer of 2026</p>
			</div>
		</div>
	</section>
);
