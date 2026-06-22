import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

const widths: Record<string, string> = {
	boxed: '600px',
	'boxed-lg': '900px',
	'boxed-sm': '300px',
	'boxed-xl': '1024px',
};

const BoxedSwatch = ({ className }: { className: string }) => (
	<section className="gray-three">
		<div
			className={className}
			style={{ background: '#fff', color: '#333', padding: '10px' }}
		>
			<p style={{ margin: 0 }}>
				<code>.{className}</code> — max-width: {widths[className]}
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
	title: 'Design System/Boxed',
};

export default meta;
type Story = StoryObj<typeof AllBoxed>;

export const Boxed: Story = {};
