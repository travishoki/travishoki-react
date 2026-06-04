import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent } from 'storybook/test';

import ballroomSmall from '~images/about/ballroom-small.jpg';
import ballroomLarge from '~images/about/ballroom.jpg';
import { ImageMaximizable } from './ImageMaximizable';

const meta: Meta<typeof ImageMaximizable> = {
	component: ImageMaximizable,
	parameters: {
		layout: 'centered',
	},
	tags: ['ai-generated'],
	title: 'Components/ImageModal',
};

export default meta;
type Story = StoryObj<typeof ImageMaximizable>;

export const ClickToOpen: Story = {
	args: {
		alt: 'Ballroom',
		dimensions: [453, 604],
		src: ballroomSmall,
		srcLarge: ballroomLarge,
	},
	play: async ({ canvasElement }) => {
		const overlay = canvasElement.querySelector('.zoom-overlay') as HTMLElement;
		await userEvent.click(overlay);
		const modal =
			canvasElement.ownerDocument.body.querySelector('.image-modal');
		await expect(modal).toBeInTheDocument();
	},
};
