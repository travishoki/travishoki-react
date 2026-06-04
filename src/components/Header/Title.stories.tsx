import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Title } from './Title';

const meta = {
	component: Title,
	tags: ['ai-generated'],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	play: async ({ canvas }) => {
		const link = canvas.getByRole('link', { name: 'Travis Hoki' });
		await expect(link).toBeVisible();
	},
};
