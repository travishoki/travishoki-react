import React from 'react';

import classNames from 'classnames';

import styles from './TechCatalogueButton.module.scss';

type TechCatalogueButtonProps = {
	expanded: boolean;
	onClick: () => void;
};

export const TechCatalogueButton = ({
	expanded,
	onClick,
}: TechCatalogueButtonProps) => (
	<button
		className={classNames('btn btn-primary', styles.techCatalogueButton)}
		onClick={onClick}
	>
		<i className={`fa fa-chevron-${expanded ? 'up' : 'down'}`} />
		{expanded ? 'Close' : 'Open'}
	</button>
);
