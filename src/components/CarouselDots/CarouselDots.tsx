import React from 'react';
import classNames from 'classnames';

import './CarouselDots.scss';

type CarouselDotsProps = {
	activeIndex: number;
	labels: string[];
	onSelect: (index: number) => void;
};

export const CarouselDots = ({
	activeIndex,
	labels,
	onSelect,
}: CarouselDotsProps) => (
	<ul className="carousel-dots">
		{labels.map((label, index) => (
			<li key={label}>
				<button
					aria-label={`Show ${label}`}
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
