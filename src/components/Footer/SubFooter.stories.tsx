import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { SubFooter } from './SubFooter';

const meta: Meta<typeof SubFooter> = {
	component: SubFooter,
	tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof SubFooter>;

export const Default: Story = {
	play: async ({ canvas }) => {
		const link = canvas.getByRole('link', { name: /contact me/i });
		await expect(link).toBeInTheDocument();
	},
};
