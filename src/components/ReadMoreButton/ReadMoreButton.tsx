import React from 'react';

import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import styles from './ReadMoreButton.module.scss';

export const ReadMoreButton = ({
	className,
	expanded,
	onToggle,
}: ReadMoreButtonProps) => (
	<button
		className={classNames(styles.readMoreButton, className)}
		onClick={onToggle}
	>
		<FontAwesomeIcon icon={expanded ? faChevronUp : faChevronDown} />
		{expanded ? 'Read Less' : 'Read More'}
	</button>
);

type ReadMoreButtonProps = {
	className?: string;
	expanded: boolean;
	onToggle: () => void;
};
