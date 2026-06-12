import React from 'react';

import { CarouselDot } from './CarouselDot/CarouselDot';

import styles from './CarouselDots.module.scss';

type CarouselDotsProps = {
	activeIndex: number;
	count: number;
	onSelect: (index: number) => void;
};

export const CarouselDots = ({
	activeIndex,
	count,
	onSelect,
}: CarouselDotsProps) => (
	<ul className={styles.carouselDots}>
		{Array.from({ length: count }, (_, index) => (
			<CarouselDot
				key={index}
				isActive={activeIndex === index}
				label={`Show slide ${index + 1}`}
				onClick={() => onSelect(index)}
			/>
		))}
	</ul>
);
