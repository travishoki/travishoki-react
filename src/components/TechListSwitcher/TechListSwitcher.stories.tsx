import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { TechListSwitcher } from './TechListSwitcher';

const meta: Meta<typeof TechListSwitcher> = {
	component: TechListSwitcher,
	tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof TechListSwitcher>;

export const Default: Story = {
	args: {
		list: ['REACT_JS', 'TYPESCRIPT'],
	},
	play: async ({ canvas }) => {
		const list = canvas.getByRole('list');
		await expect(list).toBeInTheDocument();
	},
};
