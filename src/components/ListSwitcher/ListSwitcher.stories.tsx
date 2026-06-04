import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { TECH } from '~const/Tech.const';
import { ListSwitcher } from './ListSwitcher';

const meta: Meta<typeof ListSwitcher> = {
	component: ListSwitcher,
	tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof ListSwitcher>;

const sampleItems = [
	{
		image: TECH.REACT_JS.image,
		label: TECH.REACT_JS.label,
		type: 'frontend' as const,
	},
	{
		image: TECH.NODE_JS.image,
		label: TECH.NODE_JS.label,
		type: 'backend' as const,
	},
];

export const Default: Story = {
	args: {
		items: sampleItems,
	},
	play: async ({ canvas }) => {
		const list = canvas.getByRole('list');
		await expect(list).toBeInTheDocument();
	},
};

export const WithHeader: Story = {
	args: {
		header: 'Tech Stack',
		items: sampleItems,
	},
	play: async ({ canvas }) => {
		const header = canvas.getByText('Tech Stack');
		await expect(header).toBeInTheDocument();
	},
};
