import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent } from 'storybook/test';

import { CarouselDots } from './CarouselDots';

const labels = [
	'AI-Assisted Development with Claude',
	'React Native',
	'Firebase',
];

const meta: Meta<typeof CarouselDots> = {
	component: CarouselDots,
	decorators: [
		(Story) => (
			<div style={{ background: '#7c8fce', padding: '2rem' }}>
				<Story />
			</div>
		),
	],
	tags: ['ai-generated'],
	title: 'Components/CarouselDots',
};

export default meta;
type Story = StoryObj<typeof CarouselDots>;

export const Interactive: Story = {
	play: async ({ canvas }) => {
		const dots = canvas.getAllByRole('button');
		await userEvent.click(dots[2]);
		await expect(dots[2]).toHaveClass('active');
		await expect(dots[0]).not.toHaveClass('active');
	},
	render: () => {
		const [activeIndex, setActiveIndex] = useState(0);

		return (
			<CarouselDots
				activeIndex={activeIndex}
				labels={labels}
				onSelect={setActiveIndex}
			/>
		);
	},
};
