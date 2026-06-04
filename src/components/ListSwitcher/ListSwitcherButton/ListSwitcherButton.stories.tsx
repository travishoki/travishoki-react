import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';

import { ListSwitcherButton } from './ListSwitcherButton';

const meta: Meta<typeof ListSwitcherButton> = {
	component: ListSwitcherButton,
	tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof ListSwitcherButton>;

export const Collapsed: Story = {
	args: {
		expanded: false,
		onClick: fn(),
	},
	play: async ({ canvas }) => {
		const button = canvas.getByRole('button');
		await expect(button).toBeInTheDocument();
	},
};

export const Expanded: Story = {
	args: {
		expanded: true,
		onClick: fn(),
	},
};
