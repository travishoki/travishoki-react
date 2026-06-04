import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { NavItem } from './NavItem';

const meta = {
	component: NavItem,
	tags: ['ai-generated'],
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Home',
		to: '/',
	},
	play: async ({ canvas }) => {
		const link = canvas.getByRole('link', { name: 'Home' });
		await expect(link).toBeVisible();
	},
};

export const Projects: Story = {
	args: {
		title: 'Projects',
		to: '/projects',
	},
};

export const Contact: Story = {
	args: {
		title: 'Contact',
		to: '/contact',
	},
};
