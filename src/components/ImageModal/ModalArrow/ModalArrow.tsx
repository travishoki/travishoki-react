import React from 'react';

import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

import styles from './ModalArrow.module.scss';

export const ModalArrow = ({ direction, onClick }: ModalArrowProps) => {
	const label = direction === 'next' ? 'Next' : 'Previous';
	const className = {
		[styles.next]: direction === 'next',
		[styles.prev]: direction === 'prev',
	};
	const icon = direction === 'prev' ? faChevronLeft : faChevronRight;

	return (
		<ButtonIcon
			className={classNames(styles.modalArrow, className)}
			icon={icon}
			label={label}
			onClick={onClick}
			size="lg"
		/>
	);
};

type ModalArrowProps = {
	direction: 'next' | 'prev';
	onClick: () => void;
};
