import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { ListSectionLabel } from './ListSectionLabel';

const meta: Meta<typeof ListSectionLabel> = {
	component: ListSectionLabel,
	tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof ListSectionLabel>;

export const Default: Story = {
	args: {
		label: 'Frontend',
	},
	play: async ({ canvas }) => {
		const label = canvas.getByText('Frontend');
		await expect(label).toBeInTheDocument();
	},
};
