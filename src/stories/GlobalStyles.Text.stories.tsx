import React, { ReactNode } from 'react';

import { BLUE_3 } from '~const/colors.const';

import { LOREM_IPSUM } from './const';

import type { Meta, StoryObj } from '@storybook/react-vite';

const Highlight = ({ children }: { children: ReactNode }) => (
	<span style={{ background: BLUE_3, borderRadius: '10%', padding: '0 5px' }}>
		{children}
	</span>
);

const AllText = () => (
	<div>
		<section>
			<h2>Center</h2>
			<p className="center">
				This paragraph is centered with <Highlight>p.center</Highlight>.{' '}
				{LOREM_IPSUM}
			</p>
			<div className="center">
				<p>
					This paragraph is centered with <Highlight>div.center</Highlight>.{' '}
					{LOREM_IPSUM}
				</p>
			</div>
		</section>

		<section>
			<h2>Indent</h2>
			<p className="indent">
				This paragraph has a first-line indent applied with{' '}
				<Highlight>.indent</Highlight>. {LOREM_IPSUM}
			</p>
		</section>

		<section>
			<h2>Bold</h2>
			<p className="bold">
				This paragraph is bold with <Highlight>.bold</Highlight>.
			</p>
		</section>
	</div>
);

const meta: Meta<typeof AllText> = {
	component: AllText,
	title: 'Design System/Text',
};

export default meta;
type Story = StoryObj<typeof AllText>;

export const Text: Story = {};
