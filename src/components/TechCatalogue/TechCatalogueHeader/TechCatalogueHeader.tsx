import React from 'react';

import classNames from 'classnames';

import styles from './TechCatalogueHeader.module.scss';

export const TechCatalogueHeader = ({
	onToggle,
	open,
	title,
}: TechCatalogueHeaderProps) => (
	<button
		className={classNames('px-3 py-2', styles.techCatalogueHeader)}
		onClick={onToggle}
	>
		{title}
		<i className={`fa fa-${open ? 'chevron-up' : 'chevron-down'}`} />
	</button>
);

type TechCatalogueHeaderProps = {
	onToggle: () => void;
	open: boolean;
	title: string;
};
