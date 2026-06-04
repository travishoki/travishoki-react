import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { TECH } from '~const/Tech.const';
import { ListSwitcherList } from './ListSwitcherList';

const meta: Meta<typeof ListSwitcherList> = {
	component: ListSwitcherList,
	tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof ListSwitcherList>;

const sampleItems = [
	{ image: TECH.REACT_JS.image, label: TECH.REACT_JS.label },
	{ image: TECH.TYPESCRIPT.image, label: TECH.TYPESCRIPT.label },
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
