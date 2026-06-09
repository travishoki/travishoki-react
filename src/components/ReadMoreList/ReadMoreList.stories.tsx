import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { ReadMoreList } from './ReadMoreList';

const items = [
	'Connect to Firebase for inventorying food',
	'Design the website and collect food images',
	'Wrap changes in feature flags',
	'Coordinate with multiple teams to deploy at once',
	'Write unit tests for the new components',
];

const meta: Meta<typeof ReadMoreList> = {
	component: ReadMoreList,
	decorators: [
		(Story) => (
			<div style={{ background: '#404040', color: '#fff', padding: '2rem' }}>
				<Story />
			</div>
		),
	],
	tags: ['ai-generated'],
	title: 'Components/ReadMoreList',
};

export default meta;
type Story = StoryObj<typeof ReadMoreList>;

export const Collapsed: Story = {
	args: {
		items,
	},
	play: async ({ canvas }) => {
		await expect(canvas.getAllByRole('listitem')).toHaveLength(3);
		await expect(canvas.getByText('Read More')).toBeVisible();
	},
};

export const Expanded: Story = {
	args: {
		initiallyExpanded: true,
		items,
	},
	play: async ({ canvas }) => {
		await expect(canvas.getAllByRole('listitem')).toHaveLength(items.length);
		await expect(canvas.getByText('Read Less')).toBeVisible();
	},
};

export const FewItems: Story = {
	args: {
		items: items.slice(0, 2),
	},
	play: async ({ canvas }) => {
		await expect(canvas.getAllByRole('listitem')).toHaveLength(2);
		await expect(canvas.queryByText('Read More')).not.toBeInTheDocument();
	},
};
