import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { SocialIcons } from './SocialIcons';

const meta = {
	component: SocialIcons,
	tags: ['ai-generated'],
} satisfies Meta<typeof SocialIcons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	play: async ({ canvas }) => {
		const links = canvas.getAllByRole('link');
		await expect(links.length).toBeGreaterThan(0);
	},
};

export const CssCheck: Story = {
	play: async ({ canvas }) => {
		const list = canvas.getByRole('list');
		await expect(list).toBeVisible();
	},
};
