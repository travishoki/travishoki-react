import React from 'react';

import classNames from 'classnames';

import { ExternalLink } from '~components/ExternalLink/ExternalLink';

import styles from './ViewLiveSite.module.scss';

export const ViewLiveSite = ({ url }: ViewLiveSiteProps) => (
	<ExternalLink
		className={classNames('btn btn-primary btn-lg', styles.button)}
		href={url}
	>
		View Live Site
	</ExternalLink>
);

type ViewLiveSiteProps = {
	url?: string;
};
