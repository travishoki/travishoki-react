import React, { useState } from 'react';

import { MotionExpand } from './MotionExpand';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof MotionExpand> = {
	component: MotionExpand,
	title: 'Animations/MotionExpand',
};

export default meta;
type Story = StoryObj<typeof MotionExpand>;

const InteractiveDemo = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<button
				onClick={() => setIsOpen((prev) => !prev)}
				style={{ marginBottom: '10px' }}
			>
				{isOpen ? 'Collapse' : 'Expand'}
			</button>
			<MotionExpand isOpen={isOpen}>
				<p style={{ padding: '10px' }}>
					This content animates in and out with height and opacity.
				</p>
			</MotionExpand>
		</div>
	);
};

export const Default: Story = {
	render: () => <InteractiveDemo />,
};
