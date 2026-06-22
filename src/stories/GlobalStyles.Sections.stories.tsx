import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

const SectionSwatch = ({ className }: { className: string }) => (
	<section className={className}>
		<p style={{ margin: 0 }}>
			<code>.{className}</code>
		</p>
	</section>
);

const AllSections = () => (
	<div>
		<SectionSwatch className="primary-one" />
		<SectionSwatch className="primary-two" />
		<SectionSwatch className="primary-three" />
		<SectionSwatch className="primary-four" />
		<SectionSwatch className="primary-five" />
		<SectionSwatch className="white" />
		<SectionSwatch className="gray-one" />
		<SectionSwatch className="gray-two" />
		<SectionSwatch className="gray-three" />
		<SectionSwatch className="gray-four" />
		<SectionSwatch className="gray-five" />
	</div>
);

const meta: Meta<typeof AllSections> = {
	component: AllSections,
	title: 'Global Styles/Sections',
};

export default meta;
type Story = StoryObj<typeof AllSections>;

export const Sections: Story = {};
