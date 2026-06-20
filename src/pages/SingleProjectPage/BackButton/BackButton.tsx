import React from 'react';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { ROUTES } from '~const/Routes.const';

export const BackButton = () => (
	<div className="mt-3 mb-3">
		<Link className="btn btn-primary" to={ROUTES.PROJECTS}>
			<FontAwesomeIcon icon={faChevronLeft} /> View All Projects
		</Link>
	</div>
);
