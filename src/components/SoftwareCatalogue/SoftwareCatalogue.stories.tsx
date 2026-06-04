import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { SoftwareCatalogue } from './SoftwareCatalogue';

const meta: Meta<typeof SoftwareCatalogue> = {
	component: SoftwareCatalogue,
	tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof SoftwareCatalogue>;

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
		itemClassName: 'col-sm-4',
		list: ['ILLUSTRATOR', 'INDESIGN', 'PHOTOSHOP', 'PREMIER_PRO', 'PROCREATE'],
	},
	play: async ({ canvas }) => {
		const list = canvas.getByRole('list');
		await expect(list).toBeInTheDocument();
	},
};
