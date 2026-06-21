import React from 'react';

import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import styles from './ButtonIcon.module.scss';

export const ButtonIcon = ({
	className,
	icon,
	label,
	onClick,
	size = 'sm',
}: ButtonIconProps) => (
	<button
		aria-label={label}
		className={classNames(styles.buttonIcon, styles[size], className)}
		onClick={(event) => {
			event.stopPropagation();
			onClick(event);
		}}
	>
		<FontAwesomeIcon icon={icon} />
	</button>
);

type ButtonIconProps = {
	className?: string;
	icon: IconDefinition;
	label: string;
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	size?: 'sm' | 'lg';
};
