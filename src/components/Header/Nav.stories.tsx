import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Nav } from './Nav';

const meta: Meta<typeof Nav> = {
	component: Nav,
	tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof Nav>;

export const Default: Story = {
	play: async ({ canvas }) => {
		const nav = canvas.getByRole('list');
		await expect(nav).toBeInTheDocument();
	},
};
