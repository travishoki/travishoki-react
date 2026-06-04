import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { SoftwareListSwitcher } from './SoftwareListSwitcher';

const meta: Meta<typeof SoftwareListSwitcher> = {
	component: SoftwareListSwitcher,
	tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof SoftwareListSwitcher>;

export const Default: Story = {
	args: {
		list: ['PHOTOSHOP', 'ILLUSTRATOR'],
	},
	play: async ({ canvas }) => {
		const list = canvas.getByRole('list');
		await expect(list).toBeInTheDocument();
	},
};
