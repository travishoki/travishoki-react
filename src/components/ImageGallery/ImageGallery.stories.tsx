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
		filename: 'https://placehold.co/500x300/333/f00',
	},
	{
		alt: 'Second image',
		caption: 'Caption for second image',
		filename: 'https://placehold.co/500x300/666/0f0',
	},
	{
		alt: 'Third image',
		caption: 'Caption for third image',
		filename: 'https://placehold.co/500x300/999/00f',
	},
];

export const Square: Story = {
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
