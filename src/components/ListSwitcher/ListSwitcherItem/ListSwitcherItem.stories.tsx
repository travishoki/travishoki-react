import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { ListSwitcherItem } from './ListSwitcherItem';

const meta: Meta<typeof ListSwitcherItem> = {
	component: ListSwitcherItem,
	decorators: [
		(Story) => (
			<ul>
				<Story />
			</ul>
		),
	],
	tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof ListSwitcherItem>;

export const Default: Story = {
	args: {
		expanded: false,
		iconClass: 'list-switcher-icon',
		image: 'https://via.placeholder.com/40',
		label: 'React',
	},
	play: async ({ canvas }) => {
		const img = canvas.getByRole('img', { name: /react/i });
		await expect(img).toBeInTheDocument();
	},
};

export const WithLink: Story = {
	args: {
		expanded: false,
		iconClass: 'list-switcher-icon',
		image: 'https://via.placeholder.com/40',
		label: 'React',
		to: '/projects/react',
	},
};

export const Expanded: Story = {
	args: {
		expanded: true,
		iconClass: 'list-switcher-icon',
		image: 'https://via.placeholder.com/40',
		label: 'React',
	},
	play: async ({ canvas }) => {
		const text = canvas.getByText('React');
		await expect(text).toBeInTheDocument();
	},
};
