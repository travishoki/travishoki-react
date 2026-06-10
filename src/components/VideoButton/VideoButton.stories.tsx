import ballroomSmall from '~images/about/ballroom-small.jpg';

import { VideoButton } from './VideoButton';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof VideoButton> = {
	component: VideoButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['ai-generated'],
};

export default meta;
type Story = StoryObj<typeof VideoButton>;

export const Default: Story = {
	args: {
		onClick: () => alert('Video clicked!'),
		src: ballroomSmall,
	},
};
