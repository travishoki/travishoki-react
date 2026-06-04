import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { ImageModal } from './ImageModal';

const meta = {
	component: ImageModal,
	tags: ['ai-generated'],
} satisfies Meta<typeof ImageModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		dimensions: [800, 600],
		onClose: () => {},
		src: 'https://via.placeholder.com/800x600',
	},
	play: async ({ canvas }) => {
		const img = canvas.getByRole('img');
		await expect(img).toBeVisible();
	},
};

export const Portrait: Story = {
	args: {
		dimensions: [400, 800],
		onClose: () => {},
		src: 'https://via.placeholder.com/400x800',
	},
};

export const Landscape: Story = {
	args: {
		dimensions: [1200, 400],
		onClose: () => {},
		src: 'https://via.placeholder.com/1200x400',
	},
};
