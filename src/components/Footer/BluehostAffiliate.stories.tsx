import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { BluehostAffiliate } from './BluehostAffiliate';

const meta: Meta<typeof BluehostAffiliate> = {
	component: BluehostAffiliate,
	tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof BluehostAffiliate>;

export const Default: Story = {
	play: async ({ canvas }) => {
		const link = canvas.getByRole('link');
		await expect(link).toBeInTheDocument();
	},
};
