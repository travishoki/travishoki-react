import React from 'react';

import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import styles from './ModalArrow.module.scss';

export const ModalArrow = ({ direction, onClick }: ModalArrowProps) => {
	return (
		<button
			className={classNames(styles.modalArrow, {
				[styles.next]: direction === 'next',
				[styles.prev]: direction === 'prev',
			})}
			onClick={(event) => {
				event.stopPropagation();
				onClick();
			}}
		>
			<FontAwesomeIcon
				icon={direction === 'prev' ? faChevronLeft : faChevronRight}
			/>
		</button>
	);
};

type ModalArrowProps = {
	direction: 'next' | 'prev';
	onClick: () => void;
};
