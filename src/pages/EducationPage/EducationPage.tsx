import React from 'react';

import { Diploma } from './Diploma';
import { SalesforceTrailhead } from './SalesforceTrailhead';
import { Timpanogos } from './Timpanogos';
import { Uvu } from './Uvu';
import './EducationPage.scss';

export const EducationPage = () => (
	<div className="education" id="container">
		<h1>Education</h1>
		<SalesforceTrailhead />
		<Uvu />
		<Diploma />
		<Timpanogos />
	</div>
);
