import React from 'react';

import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import styles from './TechCatalogueButton.module.scss';

export const TechCatalogueButton = ({
	expanded,
	onClick,
}: TechCatalogueButtonProps) => (
	<button
		className={classNames('btn btn-primary', styles.techCatalogueButton)}
		onClick={onClick}
	>
		<FontAwesomeIcon icon={expanded ? faChevronUp : faChevronDown} />
		{expanded ? 'Close' : 'Open'}
	</button>
);

type TechCatalogueButtonProps = {
	expanded: boolean;
	onClick: () => void;
};
