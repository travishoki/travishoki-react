import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
	component: Footer,
	tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
	play: async ({ canvas }) => {
		const footer = canvas.getByText(/All Rights Reserved/i);
		await expect(footer).toBeInTheDocument();
	},
};
