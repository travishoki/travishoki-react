import React from 'react';

import { expect } from 'storybook/test';

import { ImageGallery } from './ImageGallery';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ImageGallery> = {
	component: ImageGallery,
	title: 'Components/ImageGallery',
};

export default meta;
type Story = StoryObj<typeof ImageGallery>;

const images = [
	{
		alt: 'First image',
		caption: 'Caption for first image',
		filename: 'https://placehold.co/800x600',
	},
	{
		alt: 'Second image',
		caption: 'Caption for second image',
		filename: 'https://placehold.co/800x600/333/fff',
	},
	{
		alt: 'Third image',
		caption: 'Caption for third image',
		filename: 'https://placehold.co/800x600/666/fff',
	},
];

export const Default: Story = {
	args: {
		images,
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByRole('img')).toBeVisible();
	},
};

export const NonSquare: Story = {
	args: {
		images,
		square: false,
	},
};

export const SingleImage: Story = {
	args: {
		images: [images[0]],
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByRole('img')).toBeVisible();
	},
};
