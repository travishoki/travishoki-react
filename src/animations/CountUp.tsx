import React, { useEffect, useRef, useState } from 'react';

import { AnimatePresence, animate, motion, useInView } from 'motion/react';

// Tuning value kept named so the no-magic-numbers rule stays happy.
const DURATION_SECONDS = 1.2;
const SUFFIX_DURATION_SECONDS = 0.3;

export const CountUp = ({ className, suffix, value }: CountUpProps) => {
	const [count, setCount] = useState(0);
	const [isDone, setIsDone] = useState(false);
	// Don't arm the in-view check until the page has fully loaded. During initial
	// load the images above this section haven't been sized yet, so the layout is
	// short and this element can momentarily fall inside the viewport — which would
	// otherwise fire the animation while it's really still below the fold.
	const [isLoaded, setIsLoaded] = useState(false);
	const ref = useRef<HTMLSpanElement>(null);
	const controlsRef = useRef<ReturnType<typeof animate>>(undefined);
	const hasRun = useRef(false);
	// Non-latching (no `once`) so a transient intersection during load can't stick;
	// `hasRun` is what guarantees the count animation only ever plays once.
	const isInView = useInView(ref);

	useEffect(() => {
		if (document.readyState === 'complete') {
			setIsLoaded(true);

			return;
		}

		const onLoad = () => setIsLoaded(true);
		window.addEventListener('load', onLoad);

		return () => window.removeEventListener('load', onLoad);
	}, []);

	useEffect(() => {
		if (!isLoaded || !isInView || hasRun.current) return;

		hasRun.current = true;
		controlsRef.current = animate(0, value, {
			duration: DURATION_SECONDS,
			ease: 'easeOut',
			onComplete: () => setIsDone(true),
			onUpdate: (latest) => setCount(Math.round(latest)),
		});
	}, [isLoaded, isInView, value]);

	// Stop the animation only on unmount, so scrolling away mid-count doesn't
	// freeze it partway.
	useEffect(() => () => controlsRef.current?.stop(), []);

	return (
		<span className={className} ref={ref}>
			{count}
			<AnimatePresence>
				{suffix && isDone && (
					<motion.span
						animate={{ opacity: 1 }}
						initial={{ opacity: 0 }}
						transition={{ duration: SUFFIX_DURATION_SECONDS, ease: 'easeOut' }}
					>
						{suffix}
					</motion.span>
				)}
			</AnimatePresence>
		</span>
	);
};

type CountUpProps = {
	className?: string;
	suffix?: string;
	value: number;
};
