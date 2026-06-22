import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

const BoxedSwatch = ({ className }: { className: string }) => (
	<section className="gray-three">
		<div
			className={className}
			style={{ background: '#fff', color: '#333', padding: '10px' }}
		>
			<p style={{ margin: 0 }}>
				<code>.{className}</code>
			</p>
		</div>
	</section>
);

const AllBoxed = () => (
	<div>
		<BoxedSwatch className="boxed-sm" />
		<BoxedSwatch className="boxed" />
		<BoxedSwatch className="boxed-lg" />
		<BoxedSwatch className="boxed-xl" />
	</div>
);

const meta: Meta<typeof AllBoxed> = {
	component: AllBoxed,
	title: 'Global Styles/Boxed',
};

export default meta;
type Story = StoryObj<typeof AllBoxed>;

export const Boxed: Story = {};
