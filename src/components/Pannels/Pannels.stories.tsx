import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Pannels } from './Pannels';

const meta: Meta<typeof Pannels> = {
	component: Pannels,
	tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof Pannels>;

export const Default: Story = {
	args: {
		children: <p>Panels content</p>,
	},
	play: async ({ canvas }) => {
		const content = canvas.getByText('Panels content');
		await expect(content).toBeInTheDocument();
	},
};
