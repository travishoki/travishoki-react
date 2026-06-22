import React from 'react';

import { LOREM_IPSUM } from 'src/stories/const';
import { expect } from 'storybook/test';

import { ParagraphBlock } from './ParagraphBlock';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ParagraphBlock> = {
	component: ParagraphBlock,
	title: 'Components/ParagraphBlock',
};

export default meta;
type Story = StoryObj<typeof ParagraphBlock>;

export const SingleText: Story = {
	args: {
		label: 'Description',
		text: 'This is a single paragraph of text.',
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByText('Description:')).toBeVisible();
		await expect(
			canvas.getByText('This is a single paragraph of text.'),
		).toBeVisible();
	},
};

export const MultipleTexts: Story = {
	args: {
		label: 'Details',
		text: [
			`First paragraph of content. ${LOREM_IPSUM}`,
			`Second paragraph of content. ${LOREM_IPSUM}`,
			`Third paragraph of content. ${LOREM_IPSUM}`,
		],
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByText('Details:')).toBeVisible();
		await expect(canvas.getByText('First paragraph of content.')).toBeVisible();
		await expect(
			canvas.getByText('Second paragraph of content.'),
		).toBeVisible();
	},
};

export const Collapsible: Story = {
	args: {
		collapsible: true,
		label: 'Summary',
		text: [
			`First paragraph of content. ${LOREM_IPSUM}`,
			`Second paragraph of content. ${LOREM_IPSUM}`,
			`Third paragraph of content. ${LOREM_IPSUM}`,
		],
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByText('Summary:')).toBeVisible();
		await expect(canvas.getByText('First paragraph of content.')).toBeVisible();
	},
};
