import React from 'react';
import classNames from 'classnames';

import './CarouselDots.scss';

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
	<ul className="carousel-dots">
		{Array.from({ length: count }, (_, index) => (
			<li key={index}>
				<button
					aria-label={`Show slide ${index + 1}`}
					className={classNames('carousel-dot', {
						active: activeIndex === index,
					})}
					onClick={() => {
						onSelect(index);
					}}
					type="button"
				/>
			</li>
		))}
	</ul>
);
