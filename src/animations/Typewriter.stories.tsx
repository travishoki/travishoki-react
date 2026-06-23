import React from 'react';

import { Typewriter } from './Typewriter';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Typewriter> = {
	component: Typewriter,
	title: 'Animations/Typewriter',
};

export default meta;
type Story = StoryObj<typeof Typewriter>;

export const Default: Story = {
	args: {
		text: 'Hello, world!',
	},
};
