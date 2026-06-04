import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { TextWithReadMore } from './TextWithReadMore';

const meta = {
	component: TextWithReadMore,
	tags: ['ai-generated'],
} satisfies Meta<typeof TextWithReadMore>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleParagraph: Story = {
	args: {
		paragraphs: ['This is a single paragraph with no read more button.'],
	},
	play: async ({ canvas }) => {
		await expect(
			canvas.getByText('This is a single paragraph with no read more button.'),
		).toBeVisible();
		await expect(canvas.queryByText('Read More')).not.toBeInTheDocument();
	},
};

export const MultipleParagraphs: Story = {
	args: {
		paragraphs: [
			'First paragraph visible by default.',
			'Second paragraph hidden until expanded.',
			'Third paragraph also hidden.',
		],
	},
	play: async ({ canvas }) => {
		await expect(
			canvas.getByText('First paragraph visible by default.'),
		).toBeVisible();
		await expect(canvas.getByText('Read More')).toBeVisible();
	},
};
