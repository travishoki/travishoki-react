import React, { useRef, useState } from 'react';

import { CarouselDots } from '~components/CarouselDots/CarouselDots';

import { CURRENT_TECH_INTERESTS } from './CurrentTechInterests.data';
import { CurrentTechInterestsHeader } from './CurrentTechInterestsHeader/CurrentTechInterestsHeader';
import { InterestColumns } from './InterestColumns/InterestColumns';
import './CurrentTechInterests.scss';

export const CurrentTechInterests = () => {
	const trackRef = useRef<HTMLDivElement>(null);
	const [activeIndex, setActiveIndex] = useState(0);

	const handleScroll = () => {
		const track = trackRef.current;
		if (!track) return;

		setActiveIndex(Math.round(track.scrollLeft / track.clientWidth));
	};

	const scrollToIndex = (index: number) => {
		const track = trackRef.current;
		if (!track) return;

		track.scrollTo({ behavior: 'smooth', left: index * track.clientWidth });
	};

	return (
		<section className="blue center current-tech-interests-component">
			<CurrentTechInterestsHeader />

			<InterestColumns onScroll={handleScroll} ref={trackRef} />

			<CarouselDots
				activeIndex={activeIndex}
				count={CURRENT_TECH_INTERESTS.length}
				onSelect={scrollToIndex}
			/>
		</section>
	);
};
