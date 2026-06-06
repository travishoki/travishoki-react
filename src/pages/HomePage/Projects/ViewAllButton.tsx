import React from 'react';
import { Link } from 'react-router-dom';

import './ViewAllButton.scss';

export const ViewAllButton = () => (
	<Link className="btn btn-primary btn-lg view-all-button" to="/projects">
		View All Projects
	</Link>
);
