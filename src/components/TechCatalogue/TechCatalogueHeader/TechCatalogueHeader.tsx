import React from 'react';

import classNames from 'classnames';

import styles from './TechCatalogueHeader.module.scss';

type TechCatalogueHeaderProps = {
	label: string;
	onToggle: () => void;
	open: boolean;
};

export const TechCatalogueHeader = ({
	label,
	onToggle,
	open,
}: TechCatalogueHeaderProps) => (
	<button
		className={classNames('px-3 py-2', styles.techCatalogueHeader)}
		onClick={onToggle}
	>
		{label}
		<i className={`fa fa-${open ? 'minus' : 'plus'}`} />
	</button>
);
