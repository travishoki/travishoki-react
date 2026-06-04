import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';

import { Form } from './Form';

const meta: Meta<typeof Form> = {
	component: Form,
	tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
	args: {
		children: <button type="submit">Submit</button>,
		onSubmit: fn(),
	},
	play: async ({ canvas }) => {
		const button = canvas.getByRole('button', { name: /submit/i });
		await expect(button).toBeInTheDocument();
	},
};
