import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Header } from './Header';

const meta: Meta<typeof Header> = {
	component: Header,
	tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
	play: async ({ canvas }) => {
		const nav = canvas.getByRole('list');
		await expect(nav).toBeInTheDocument();
	},
};
