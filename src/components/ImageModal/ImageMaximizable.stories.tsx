import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { ImageMaximizable } from './ImageMaximizable';

const meta: Meta<typeof ImageMaximizable> = {
	component: ImageMaximizable,
	tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof ImageMaximizable>;

export const Default: Story = {
	args: {
		alt: 'Sample image',
		dimensions: [300, 200],
		src: 'https://via.placeholder.com/300x200',
	},
	play: async ({ canvas }) => {
		const img = canvas.getByRole('img', { name: /sample image/i });
		await expect(img).toBeInTheDocument();
	},
};
