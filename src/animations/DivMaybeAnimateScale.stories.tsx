import React from 'react';

import { DivMaybeAnimateScale } from './DivMaybeAnimateScale';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof DivMaybeAnimateScale> = {
	component: DivMaybeAnimateScale,
	title: 'Animations/DivMaybeAnimateScale',
};

export default meta;
type Story = StoryObj<typeof DivMaybeAnimateScale>;

export const WithAnimation: Story = {
	args: {
		animate: true,
		children: (
			<div style={{ background: '#3a5a8a', color: '#fff', padding: '20px' }}>
				Scales in from 50% when in view
			</div>
		),
	},
};
