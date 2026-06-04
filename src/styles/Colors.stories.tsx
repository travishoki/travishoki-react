import React from 'react';
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

const COLOR_GROUPS: ColorGroup[] = [
	{
		colors: [
			{ hex: '#ffffff', name: 'White', variable: '$white' },
			{ hex: '#000000', name: 'Black', variable: '$black' },
		],
		label: 'Black & White',
	},
	{
		colors: [
			{ hex: '#eeeeee', name: 'Gray One', variable: '$gray-one' },
			{ hex: '#444444', name: 'Gray Two', variable: '$gray-two' },
			{ hex: '#333333', name: 'Gray Three', variable: '$gray-three' },
			{ hex: '#222222', name: 'Gray Four', variable: '$gray-four' },
			{ hex: '#111111', name: 'Gray Five', variable: '$gray-five' },
		],
		label: 'Grays',
	},
	{
		colors: [
			{ hex: '#39b54c', name: 'Green One', variable: '$green-one' },
			{ hex: '#1a733b', name: 'Green Two', variable: '$green-two' },
		],
		label: 'Greens',
	},
	{
		colors: [
			{ hex: '#f2dede', name: 'Red One', variable: '$red-one' },
			{ hex: '#a94442', name: 'Red Two', variable: '$red-two' },
		],
		label: 'Reds',
	},
	{
		colors: [
			{ hex: '#7c8fce', name: 'Blue One', variable: '$blue-one' },
			{ hex: '#5a6fb4', name: 'Blue Two', variable: '$blue-two' },
			{
				hex: '#415082',
				name: 'Blue Three / Primary',
				variable: '$blue-three / $primary',
			},
			{
				hex: '#27314f',
				name: 'Blue Four / Secondary',
				variable: '$blue-four / $secondary',
			},
			{ hex: '#1b2136', name: 'Blue Five', variable: '$blue-five' },
		],
		label: 'Blues',
	},
];

const ColorPalette = () => (
	<div style={{ fontFamily: 'sans-serif', maxWidth: '900px', padding: '2rem' }}>
		{COLOR_GROUPS.map((group) => (
			<section key={group.label} style={{ marginBottom: '2.5rem' }}>
				<h2
					style={{
						color: '#555',
						fontSize: '1rem',
						fontWeight: 600,
						letterSpacing: '0.05em',
						marginBottom: '0.75rem',
						textTransform: 'uppercase',
					}}
				>
					{group.label}
				</h2>
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
					{group.colors.map((color) => (
						<div
							key={color.variable}
							style={{
								borderRadius: '8px',
								boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
								overflow: 'hidden',
								width: '160px',
							}}
						>
							<div
								style={{
									backgroundColor: color.hex,
									border: color.hex === '#ffffff' ? '1px solid #ddd' : 'none',
									height: '80px',
								}}
							/>
							<div style={{ background: '#fff', padding: '0.5rem 0.75rem' }}>
								<div
									style={{ color: '#222', fontSize: '0.8rem', fontWeight: 600 }}
								>
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
		))}
	</div>
);

const meta = {
	component: ColorPalette,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['ai-generated'],
	title: 'Design System/Colors',
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllColors: Story = {};
