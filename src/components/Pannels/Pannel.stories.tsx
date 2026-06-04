import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Pannel } from './Pannel';

const meta: Meta<typeof Pannel> = {
	component: Pannel,
	tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof Pannel>;

export const Default: Story = {
	args: {
		children: <p>Panel content</p>,
	},
	play: async ({ canvas }) => {
		const content = canvas.getByText('Panel content');
		await expect(content).toBeInTheDocument();
	},
};
