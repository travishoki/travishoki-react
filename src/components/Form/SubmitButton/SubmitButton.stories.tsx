import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { SubmitButton } from './SubmitButton';

const meta = {
	component: SubmitButton,
	tags: ['ai-generated'],
} satisfies Meta<typeof SubmitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		className: 'btn btn-primary',
		disabled: false,
		value: 'Send',
	},
	play: async ({ canvas }) => {
		const button = canvas.getByRole('button', { name: /send/i });
		await expect(button).toBeVisible();
		await expect(button).not.toBeDisabled();
	},
};

export const Disabled: Story = {
	args: {
		className: 'btn btn-primary',
		disabled: true,
		value: 'Sending…',
	},
	play: async ({ canvas }) => {
		const button = canvas.getByRole('button', { name: /sending/i });
		await expect(button).toBeDisabled();
	},
};

export const CssCheck: Story = {
	args: {
		className: 'btn btn-primary',
		disabled: false,
		value: 'Submit',
	},
	play: async ({ canvas }) => {
		const button = canvas.getByRole('button', { name: /submit/i });
		await expect(getComputedStyle(button).display).not.toBe('none');
	},
};
