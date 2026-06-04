import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { ListSwitcherHeader } from './ListSwitcherHeader';

const meta: Meta<typeof ListSwitcherHeader> = {
	component: ListSwitcherHeader,
	tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof ListSwitcherHeader>;

export const Default: Story = {
	args: {
		header: 'Tech Stack',
	},
	play: async ({ canvas }) => {
		const header = canvas.getByText('Tech Stack');
		await expect(header).toBeInTheDocument();
	},
};
