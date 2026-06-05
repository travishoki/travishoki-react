import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { TechListCatalogue } from './TechListCatalogue';

const meta: Meta<typeof TechListCatalogue> = {
	component: TechListCatalogue,
	decorators: [
		(Story) => (
			<div
				style={{
					maxWidth: '800px',
				}}
			>
				<Story />
			</div>
		),
	],
	tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof TechListCatalogue>;

export const Few: Story = {
	args: {
		list: ['REACT_JS', 'TYPESCRIPT', 'NODE_JS'],
	},
};

export const All: Story = {
	args: {
		itemClassName: 'col-sm-4',
		list: [
			'ACTION_SCRIPT',
			'AMP',
			'ANGULAR_JS',
			'CLAUDE_CODE',
			'COFFEE_SCRIPT',
			'CSS',
			'CURSOR',
			'DJANGO',
			'EXPRESS',
			'FIREBASE',
			'GRUNT',
			'HANDLEBARS_JS',
			'HTML',
			'JAVASCRIPT',
			'JEST',
			'JQUERY',
			'LESS_CSS',
			'NODE_JS',
			'PHP',
			'PHP_MY_ADMIN',
			'PYTHON',
			'REACT_JS',
			'REACT_NATIVE',
			'REDUX',
			'SCSS',
			'SQL',
			'TYPESCRIPT',
			'WEBPACK',
			'WOO_COMMERCE',
			'WORDPRESS',
		],
	},
	play: async ({ canvas }) => {
		const list = canvas.getByRole('list');
		await expect(list).toBeInTheDocument();
	},
};
