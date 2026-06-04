import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { ListSwitcherList } from './ListSwitcherList';

const meta: Meta<typeof ListSwitcherList> = {
	component: ListSwitcherList,
	tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof ListSwitcherList>;

const sampleItems = [
	{ image: 'https://via.placeholder.com/40', label: 'React' },
	{ image: 'https://via.placeholder.com/40', label: 'TypeScript' },
];

export const Default: Story = {
	args: {
		expanded: false,
		iconClass: 'list-switcher-icon',
		items: sampleItems,
	},
	play: async ({ canvas }) => {
		const list = canvas.getByRole('list');
		await expect(list).toBeInTheDocument();
	},
};
