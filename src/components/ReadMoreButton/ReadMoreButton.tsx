import React from 'react';

import classNames from 'classnames';

import styles from './ReadMoreButton.module.scss';

type ReadMoreButtonProps = {
	className?: string;
	expanded: boolean;
	onToggle: () => void;
};

export const ReadMoreButton = ({
	className,
	expanded,
	onToggle,
}: ReadMoreButtonProps) => (
	<button
		className={classNames(styles.readMoreButton, className)}
		onClick={onToggle}
	>
		<i className={`fa fa-chevron-${expanded ? 'up' : 'down'}`} />
		{expanded ? 'Read Less' : 'Read More'}
	</button>
);
