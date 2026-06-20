import React from 'react';

import { Link } from 'react-router-dom';

import { ROUTES } from '~const/Routes.const';

export const BackButton = () => (
	<div className="mt-3 mb-3">
		<Link className="btn btn-primary" to={ROUTES.PROJECTS}>
			<i className="fa fa-chevron-left" /> View All Projects
		</Link>
	</div>
);
