import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { BulletedList } from './BulletedList';

const meta: Meta<typeof BulletedList> = {
	component: BulletedList,
	tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof BulletedList>;

export const Default: Story = {
	args: {
		list: ['Item one', 'Item two', 'Item three'],
	},
	play: async ({ canvas }) => {
		const items = canvas.getAllByRole('listitem');
		await expect(items).toHaveLength(3);
	},
};
