import React from 'react';

import { ImgPopIn } from './ImgPopIn';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ImgPopIn> = {
	component: ImgPopIn,
	title: 'Animations/ImgPopIn',
};

export default meta;
type Story = StoryObj<typeof ImgPopIn>;

export const Default: Story = {
	args: {
		alt: 'Sample image',
		src: 'https://placehold.co/400x300',
	},
};
