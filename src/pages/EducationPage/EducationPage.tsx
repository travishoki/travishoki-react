import React from 'react';

import { Diploma } from './Diploma';
import { Timpanogos } from './Timpanogos';
import { Uvu } from './Uvu';
import './EducationPage.scss';

export const EducationPage = () => (
	<div className="education" id="container">
		<h1>Education</h1>
		<Uvu />
		<Diploma />
		<Timpanogos />
	</div>
);
