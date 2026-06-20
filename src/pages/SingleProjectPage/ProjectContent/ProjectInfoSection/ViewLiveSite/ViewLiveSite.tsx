import React from 'react';

import classNames from 'classnames';

import styles from './ViewLiveSite.module.scss';

export const ViewLiveSite = ({ url }: ViewLiveSiteProps) => (
	<a
		className={classNames('btn btn-primary btn-lg', styles.button)}
		href={url}
		rel="noreferrer"
		target="_blank"
	>
		View Live Site
	</a>
);

type ViewLiveSiteProps = {
	url?: string;
};
