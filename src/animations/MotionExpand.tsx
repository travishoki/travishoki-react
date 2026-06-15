import React, { ReactNode } from 'react';

import { AnimatePresence, motion } from 'motion/react';

export const MotionExpand = ({ children, isOpen }: MotionExpandProps) => (
	<AnimatePresence initial={false}>
		{isOpen && (
			<motion.div
				animate={{ height: 'auto', opacity: 1 }}
				exit={{ height: 0, opacity: 0 }}
				initial={{ height: 0, opacity: 0 }}
				style={{ overflow: 'hidden' }}
				transition={{ duration: 0.3, ease: 'easeInOut' }}
			>
				{children}
			</motion.div>
		)}
	</AnimatePresence>
);

type MotionExpandProps = {
	children: ReactNode;
	isOpen: boolean;
};
