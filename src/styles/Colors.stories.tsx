import React from 'react';

import * as COLORS from '~const/colors.const';

import type { Meta, StoryObj } from '@storybook/react-vite';

type ColorSwatch = {
	hex: string;
	name: string;
	variable: string;
};

type ColorGroup = {
	colors: ColorSwatch[];
	label: string;
};

const GRAY_GROUPS: ColorGroup[] = [
	{
		colors: [
			{ hex: COLORS.WHITE, name: 'White', variable: '$white' },
			{ hex: COLORS.GRAY_1, name: 'Gray One', variable: '$gray-one' },
			{ hex: COLORS.GRAY_2, name: 'Gray Two', variable: '$gray-two' },
			{ hex: COLORS.GRAY_3, name: 'Gray Three', variable: '$gray-three' },
			{ hex: COLORS.GRAY_4, name: 'Gray Four', variable: '$gray-four' },
			{ hex: COLORS.GRAY_5, name: 'Gray Five', variable: '$gray-five' },
			{ hex: COLORS.BLACK, name: 'Black', variable: '$black' },
		],
		label: 'Grays',
	},
];

const GREENS: ColorGroup = {
	colors: [
		{ hex: '#39b54c', name: 'Green One', variable: '$green-one' },
		{ hex: '#1a733b', name: 'Green Two', variable: '$green-two' },
	],
	label: 'Greens',
};

const REDS: ColorGroup = {
	colors: [
		{ hex: '#f2dede', name: 'Red One', variable: '$red-one' },
		{ hex: '#a94442', name: 'Red Two', variable: '$red-two' },
	],
	label: 'Reds',
};

const BLUES: ColorGroup = {
	colors: [
		{ hex: COLORS.BLUE_1, name: 'Blue One', variable: '$blue-one' },
		{ hex: COLORS.BLUE_2, name: 'Blue Two', variable: '$blue-two' },
		{
			hex: COLORS.BLUE_3,
			name: 'Blue Three / Primary',
			variable: '$blue-three / $primary',
		},
		{
			hex: COLORS.BLUE_4,
			name: 'Blue Four / Secondary',
			variable: '$blue-four / $secondary',
		},
		{ hex: COLORS.BLUE_5, name: 'Blue Five', variable: '$blue-five' },
	],
	label: 'Blues',
};

const PAGE_STYLE: React.CSSProperties = {
	fontFamily: 'sans-serif',
	padding: '2rem',
};

const ColorSection = ({ group }: { group: ColorGroup }) => (
	<section style={{ marginBottom: '2.5rem', width: 'fit-content' }}>
		<h2
			style={{
				color: COLORS.WHITE,
				fontSize: '1rem',
				fontWeight: 600,
				letterSpacing: '0.05em',
				marginBottom: '0.75rem',
				textAlign: 'center',
				textTransform: 'uppercase',
			}}
		>
			{group.label}
		</h2>
		<div style={{ display: 'flex', flexWrap: 'wrap' }}>
			{group.colors.map((color) => (
				<div
					key={color.variable}
					style={{
						boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
						overflow: 'hidden',
						width: '160px',
					}}
				>
					<div
						style={{
							backgroundColor: color.hex,
							border: color.hex === COLORS.WHITE ? '1px solid #ddd' : 'none',
							height: '120px',
						}}
					/>
					<div
						style={{
							background: COLORS.WHITE,
							minHeight: '100px',
							padding: '0.5rem 0.75rem',
						}}
					>
						<div style={{ color: '#222', fontSize: '0.8rem', fontWeight: 600 }}>
							{color.name}
						</div>
						<div
							style={{
								color: '#888',
								fontSize: '0.75rem',
								marginTop: '2px',
							}}
						>
							{color.hex.toUpperCase()}
						</div>
						<div
							style={{
								color: '#aaa',
								fontFamily: 'monospace',
								fontSize: '0.7rem',
								marginTop: '2px',
							}}
						>
							{color.variable}
						</div>
					</div>
				</div>
			))}
		</div>
	</section>
);

const ColorPalette = ({ groups }: { groups: ColorGroup[] }) => (
	<div style={PAGE_STYLE}>
		{groups.map((group) => (
			<ColorSection key={group.label} group={group} />
		))}
	</div>
);

const meta = {
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['ai-generated'],
	title: 'Design System/Colors',
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Grays: Story = {
	render: () => <ColorPalette groups={GRAY_GROUPS} />,
};
export const Colors: Story = {
	render: () => (
		<div style={PAGE_STYLE}>
			<ColorSection group={BLUES} />
			<div style={{ display: 'flex', gap: '2.5rem' }}>
				<ColorSection group={REDS} />
				<ColorSection group={GREENS} />
			</div>
		</div>
	),
};
