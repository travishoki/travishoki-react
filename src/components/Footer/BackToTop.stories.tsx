import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { BackToTop } from './BackToTop';

const meta = {
	component: BackToTop,
	tags: ['ai-generated'],
} satisfies Meta<typeof BackToTop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	play: async ({ canvas }) => {
		const icon = canvas.getByRole('generic');
		await expect(icon).toBeVisible();
	},
};
