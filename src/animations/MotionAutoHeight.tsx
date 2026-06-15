import React, { ReactNode, useLayoutEffect, useRef } from 'react';

import { useAnimate } from 'motion/react';

const DURATION = 0.3;

// Smoothly animates its height whenever `trigger` changes — measuring the
// content before and after, animating between the two, then releasing back to
// `auto`. Releasing to auto keeps nested content (e.g. collapsible sections)
// free to grow/shrink on their own between triggers. overflow is only clipped
// during the animation so hover tooltips aren't cut off while idle.
export const MotionAutoHeight = ({
	children,
	trigger,
}: MotionAutoHeightProps) => {
	const [scope, animate] = useAnimate<HTMLDivElement>();
	const contentRef = useRef<HTMLDivElement>(null);
	const previousHeight = useRef<number | null>(null);

	useLayoutEffect(() => {
		const wrapper = scope.current;
		const content = contentRef.current;
		if (!wrapper || !content) return;

		const nextHeight = content.offsetHeight;
		const prevHeight = previousHeight.current;
		previousHeight.current = nextHeight;

		if (prevHeight === null || prevHeight === nextHeight) return;

		wrapper.style.height = `${prevHeight}px`;
		wrapper.style.overflow = 'hidden';

		animate(
			wrapper,
			{ height: `${nextHeight}px` },
			{
				duration: DURATION,
				ease: 'easeInOut',
				onComplete: () => {
					wrapper.style.height = 'auto';
					wrapper.style.overflow = '';
				},
			},
		);
	}, [animate, scope, trigger]);

	return (
		<div ref={scope}>
			<div ref={contentRef}>{children}</div>
		</div>
	);
};

type MotionAutoHeightProps = {
	children: ReactNode;
	trigger: unknown;
};
