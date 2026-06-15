import React, { ReactNode } from 'react';

import { motion } from 'motion/react';

export const MotionListItem = ({ children }: MotionListItemProps) => (
	<motion.li
		animate={{ height: 'auto', opacity: 1 }}
		exit={{ height: 0, opacity: 0 }}
		initial={{ height: 0, opacity: 0 }}
		// Animate the whole li (marker line included) so it collapses to nothing
		// with no leftover snap. clip-path clips only vertically (following the
		// animated height) while leaving the horizontal axis open, so an outside
		// list marker isn't cut off the way overflow:hidden would.
		style={{ clipPath: 'inset(0px -100px)' }}
		transition={{ duration: 0.3, ease: 'easeInOut' }}
	>
		{children}
	</motion.li>
);

type MotionListItemProps = {
	children: ReactNode;
};
