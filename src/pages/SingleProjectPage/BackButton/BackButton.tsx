import React from 'react';
import { Link } from 'react-router-dom';

export const BackButton = () => (
	<div className="mt-3">
		<Link className="btn btn-primary" to="/projects">
			View All
		</Link>
	</div>
);
