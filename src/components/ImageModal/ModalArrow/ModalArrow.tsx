import React from 'react';

import classNames from 'classnames';

import './ModalArrow.scss';

type ModalArrowProps = {
	direction: 'next' | 'prev';
	onClick: () => void;
};

export const ModalArrow = ({ direction, onClick }: ModalArrowProps) => (
	<button
		className={classNames('modal-arrow', `modal-arrow-${direction}`)}
		onClick={(event) => {
			event.stopPropagation();
			onClick();
		}}
	>
		<i className={`fa fa-chevron-${direction === 'prev' ? 'left' : 'right'}`} />
	</button>
);
