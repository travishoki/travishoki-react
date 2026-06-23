import React, { useState } from 'react';

import { MotionAutoHeight } from './MotionAutoHeight';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof MotionAutoHeight> = {
	component: MotionAutoHeight,
	title: 'Animations/MotionAutoHeight',
};

export default meta;
type Story = StoryObj<typeof MotionAutoHeight>;

const InteractiveDemo = () => {
	const [expanded, setExpanded] = useState(false);

	return (
		<div>
			<button
				onClick={() => setExpanded((prev) => !prev)}
				style={{ marginBottom: '10px' }}
			>
				{expanded ? 'Collapse' : 'Expand'}
			</button>
			<MotionAutoHeight trigger={expanded}>
				<p>Always visible content.</p>
				{expanded && (
					<p>
						Extra content that causes the container height to animate when it
						appears or disappears.
					</p>
				)}
			</MotionAutoHeight>
		</div>
	);
};

export const Default: Story = {
	render: () => <InteractiveDemo />,
};
