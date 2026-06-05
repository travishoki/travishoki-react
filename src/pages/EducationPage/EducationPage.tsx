import React from 'react';

import { Diploma } from './Diploma/Diploma';
import { SalesforceTrailhead } from './SalesforceTrailhead/SalesforceTrailhead';
import { Timpanogos } from './Timpanogos/Timpanogos';
import { Uvu } from './Uvu/Uvu';
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
