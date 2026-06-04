import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import ImgLandscape from '~images/about/ballroom.jpg';
import ImgPortrait from '~images/about/childrens-book.jpg';
import { ImageMaximizable } from './ImageMaximizable';

const meta = {
	component: ImageMaximizable,
	tags: ['ai-generated'],
} satisfies Meta<typeof ImageMaximizable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		alt: 'Ballroom',
		dimensions: [400, 300],
		src: ImgLandscape,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const img = canvas.getByRole('img', { name: /ballroom/i });
		await expect(img).toBeVisible();
	},
};

export const ClickToOpen: Story = {
	args: {
		alt: 'Ballroom',
		dimensions: [400, 300],
		src: ImgLandscape,
	},
	play: async ({ canvasElement, userEvent: ue }) => {
		const overlay = canvasElement.querySelector('.zoom-overlay') as HTMLElement;
		await ue.click(overlay);
		const modal = within(canvasElement.ownerDocument.body);
		await expect(
			await modal.findByRole('img', { name: /ballroom/i }),
		).toBeVisible();
	},
};

export const Portrait: Story = {
	args: {
		alt: "Children's Book",
		dimensions: [300, 400],
		src: ImgPortrait,
	},
};

export const WithLargeSource: Story = {
	args: {
		alt: 'Ballroom',
		dimensions: [400, 300],
		src: ImgLandscape,
		srcLarge: ImgLandscape,
		srcLargeDimensions: [1200, 900],
	},
};
