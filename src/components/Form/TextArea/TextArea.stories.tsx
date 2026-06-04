import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { TextArea } from './TextArea';

const meta = {
	component: TextArea,
	tags: ['ai-generated'],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Message',
		name: 'message',
		onChange: () => {},
		placeholder: 'Enter your message',
		value: '',
	},
	play: async ({ canvas }) => {
		const textarea = canvas.getByPlaceholderText('Enter your message');
		await expect(textarea).toBeVisible();
	},
};

export const WithValue: Story = {
	args: {
		label: 'Message',
		name: 'message',
		onChange: () => {},
		placeholder: 'Enter your message',
		value: 'Hello, I would like to get in touch.',
	},
};

export const WithError: Story = {
	args: {
		error: 'Message cannot be empty',
		label: 'Message',
		name: 'message',
		onChange: () => {},
		placeholder: 'Enter your message',
		value: '',
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByText('Message cannot be empty')).toBeVisible();
	},
};
