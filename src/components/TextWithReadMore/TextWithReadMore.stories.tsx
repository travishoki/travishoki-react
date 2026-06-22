import { expect } from 'storybook/test';

import { TextWithReadMore } from './TextWithReadMore';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
	component: TextWithReadMore,
	tags: ['ai-generated'],
} satisfies Meta<typeof TextWithReadMore>;

export default meta;
type Story = StoryObj<typeof meta>;

const LOREM_IPSUM =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut magna ligula, gravida non purus ac, viverra accumsan velit. Nunc vitae imperdiet nisl, vitae congue turpis. Nunc euismod mauris at ligula congue ultrices. In quis condimentum augue. Sed pharetra neque a augue hendrerit blandit.';

export const SingleParagraph: Story = {
	args: {
		paragraphs: [
			`This is a single paragraph with no read more button. ${LOREM_IPSUM}`,
		],
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
			`First paragraph visible by default. ${LOREM_IPSUM}`,
			`Second paragraph hidden until expanded. ${LOREM_IPSUM}`,
			`Third paragraph also hidden. ${LOREM_IPSUM}`,
		],
	},
	play: async ({ canvas }) => {
		await expect(
			canvas.getByText('First paragraph visible by default.'),
		).toBeVisible();
		await expect(canvas.getByText('Read More')).toBeVisible();
	},
};
