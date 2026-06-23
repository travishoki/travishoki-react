import React from 'react';

import { expect, fn } from 'storybook/test';

import { ImageModal } from './ImageModal';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ImageModal> = {
	component: ImageModal,
	title: 'Components/ImageModal',
};

export default meta;
type Story = StoryObj<typeof ImageModal>;

const defaultArgs = {
	alt: 'Sample image',
	dimensions: [800, 600],
	onClose: fn(),
	src: 'https://placehold.co/800x600',
};

export const Default: Story = {
	args: defaultArgs,
	play: async ({ canvas }) => {
		await expect(canvas.getByRole('img')).toBeVisible();
	},
};

export const WithCaption: Story = {
	args: {
		...defaultArgs,
		caption: 'This is an image caption',
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByText('This is an image caption')).toBeVisible();
	},
};

export const WithNavigation: Story = {
	args: {
		...defaultArgs,
		onNext: fn(),
		onPrev: fn(),
	},
};
