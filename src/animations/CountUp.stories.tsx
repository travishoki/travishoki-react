import React from 'react';

import { CountUp } from './CountUp';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof CountUp> = {
	component: CountUp,
	title: 'Animations/CountUp',
};

export default meta;
type Story = StoryObj<typeof CountUp>;

export const Default: Story = {
	args: {
		value: 20,
	},
	render: (args) => (
		<p>
			Counting up to Twenty: <CountUp {...args} />
		</p>
	),
};

export const WithSuffix: Story = {
	args: {
		suffix: '+',
		value: 10,
	},
	render: (args) => (
		<p>
			Counting up to Ten: <CountUp {...args} />
		</p>
	),
};
