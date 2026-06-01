import React from 'react';

import imgScoutingAmerica from '~images/volunteer/scouting-america.png';
import './Volunteer.scss';

export const Volunteer = () => (
	<section className="center primary volunteer-component">
		<h3>Scouting America</h3>

		<img className="center" height="200" src={imgScoutingAmerica} width="177" />
		<h4>Volunteering in Cub Scouts Since 2025</h4>
		<p>Bear&apos;s Assistant Den Leader since spring of 2025</p>
		<p>Tentative Webelos Den Leader Spring of 2026</p>
	</section>
);
