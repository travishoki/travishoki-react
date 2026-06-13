import React from 'react';

import classNames from 'classnames';

import styles from './CarouselDot.module.scss';

export const CarouselDot = ({ isActive, label, onClick }: CarouselDotProps) => (
	<li>
		<button
			aria-label={label}
			className={classNames(styles.carouselDot, {
				[styles.active]: isActive,
			})}
			onClick={() => {
				onClick();
			}}
			type="button"
		/>
	</li>
);

type CarouselDotProps = {
	isActive: boolean;
	label: string;
	onClick: () => void;
};
