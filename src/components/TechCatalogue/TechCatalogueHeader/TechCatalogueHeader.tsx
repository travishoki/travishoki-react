import React from 'react';

import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
		<FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
	</button>
);

type TechCatalogueHeaderProps = {
	onToggle: () => void;
	open: boolean;
	title: string;
};
