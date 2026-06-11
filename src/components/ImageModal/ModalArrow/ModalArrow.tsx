import React from 'react';

import classNames from 'classnames';

import styles from './ModalArrow.module.scss';

type ModalArrowProps = {
	direction: 'next' | 'prev';
	onClick: () => void;
};

export const ModalArrow = ({ direction, onClick }: ModalArrowProps) => (
	<button
		className={classNames(styles.modalArrow, styles[direction])}
		onClick={(event) => {
			event.stopPropagation();
			onClick();
		}}
	>
		<i className={`fa fa-chevron-${direction === 'prev' ? 'left' : 'right'}`} />
	</button>
);
