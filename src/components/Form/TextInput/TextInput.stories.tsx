import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { TextInput } from './TextInput';

const meta = {
	component: TextInput,
	tags: ['ai-generated'],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Name',
		name: 'name',
		onChange: () => {},
		placeholder: 'Enter your name',
		value: '',
	},
	play: async ({ canvas }) => {
		const input = canvas.getByPlaceholderText('Enter your name');
		await expect(input).toBeVisible();
	},
};

export const WithValue: Story = {
	args: {
		label: 'Email',
		name: 'email',
		onChange: () => {},
		placeholder: 'you@example.com',
		value: 'travis@example.com',
	},
};

export const WithError: Story = {
	args: {
		error: 'This field is required',
		label: 'Subject',
		name: 'subject',
		onChange: () => {},
		placeholder: 'Enter subject',
		value: '',
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByText('This field is required')).toBeVisible();
	},
};
