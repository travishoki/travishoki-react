import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { ListSection } from './ListSection';

const meta = {
	component: ListSection,
	tags: ['ai-generated'],
} satisfies Meta<typeof ListSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		list: ['JavaScript', 'TypeScript', 'React', 'Redux', 'HTML', 'CSS'],
		title: 'Frontend Skills',
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByText('Frontend Skills')).toBeVisible();
		await expect(canvas.getByText('JavaScript')).toBeVisible();
	},
};

export const Short: Story = {
	args: {
		list: ['Node.js', 'Python'],
		title: 'Backend Skills',
	},
};

export const Long: Story = {
	args: {
		list: [
			'JavaScript',
			'TypeScript',
			'React',
			'Redux',
			'HTML',
			'CSS',
			'SCSS',
			'Bootstrap',
			'Jest',
			'Webpack',
		],
		title: 'All Skills',
	},
};
