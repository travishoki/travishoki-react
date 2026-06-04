import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { SoftwareListSwitcher } from './SoftwareListSwitcher';

const meta: Meta<typeof SoftwareListSwitcher> = {
	component: SoftwareListSwitcher,
	tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof SoftwareListSwitcher>;

export const Few: Story = {
	args: {
		list: ['ILLUSTRATOR', 'PHOTOSHOP'],
	},
	play: async ({ canvas }) => {
		const list = canvas.getByRole('list');
		await expect(list).toBeInTheDocument();
	},
};

export const All: Story = {
	args: {
		list: ['ILLUSTRATOR', 'INDESIGN', 'PHOTOSHOP', 'PREMIER_PRO', 'PROCREATE'],
	},
	play: async ({ canvas }) => {
		const list = canvas.getByRole('list');
		await expect(list).toBeInTheDocument();
	},
};
