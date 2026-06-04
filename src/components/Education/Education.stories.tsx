import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Education } from './Education';

const meta: Meta<typeof Education> = {
	component: Education,
	tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof Education>;

export const Default: Story = {
	play: async ({ canvas }) => {
		const heading = canvas.getByRole('heading', { level: 2 });
		await expect(heading).toBeInTheDocument();
	},
};
