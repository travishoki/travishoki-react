import React from 'react';
import { Link } from 'react-router-dom';

import './BackButton.scss';

export const BackButton = () => (
	<div className="back-button">
		<Link className="btn btn-primary" to="/projects">
			View All
		</Link>
	</div>
);
