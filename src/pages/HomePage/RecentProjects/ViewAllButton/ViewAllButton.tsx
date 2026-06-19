import React from 'react';

import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { ROUTES } from '~const/Routes.const';

import styles from './ViewAllButton.module.scss';

export const ViewAllButton = () => (
	<Link
		className={classNames('btn btn-primary btn-lg', styles.viewAllButton)}
		to={ROUTES.PROJECTS}
	>
		View All Projects
	</Link>
);
