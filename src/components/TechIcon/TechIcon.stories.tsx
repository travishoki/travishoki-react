import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { TechIcon } from './TechIcon';

const meta: Meta<typeof TechIcon> = {
	component: TechIcon,
	tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof TechIcon>;

export const Default: Story = {
	args: {
		name: 'REACT_JS',
	},
	play: async ({ canvas }) => {
		const img = canvas.getByRole('img');
		await expect(img).toBeInTheDocument();
	},
};
