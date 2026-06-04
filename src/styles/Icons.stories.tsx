import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { SOFTWARE } from '~const/Software.const';
import { TECH } from '~const/Tech.const';
import { SvgIconFacebook } from '~svg/SvgIconFacebook';
import { SvgIconInstagram } from '~svg/SvgIconInstagram';
import { SvgIconTikTok } from '~svg/SvgIconTikTok';
import { SvgIconYoutube } from '~svg/SvgIconYoutube';

const GRID_STYLE: React.CSSProperties = {
	display: 'grid',
	gap: '0.5rem',
	gridTemplateColumns: 'repeat(auto-fill, 90px)',
};

const TILE_STYLE: React.CSSProperties = {
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'column',
	gap: '0.5rem',
};

const LABEL_STYLE: React.CSSProperties = {
	color: '#fff',
	fontSize: '0.7rem',
	lineHeight: 1.3,
	textAlign: 'center',
};

const PAGE_STYLE: React.CSSProperties = {
	fontFamily: 'sans-serif',
	maxWidth: '1000px',
	padding: '2rem',
};

const ImgTile = ({ label, src }: { label: string; src: string }) => (
	<div style={TILE_STYLE}>
		<img
			alt={label}
			src={src}
			style={{ height: '48px', objectFit: 'contain', width: '48px' }}
		/>
		<span style={LABEL_STYLE}>{label}</span>
	</div>
);

type SvgIconEntry = {
	component: React.ComponentType<{ color?: string; size?: number }>;
	name: string;
};

const SVG_ICONS: SvgIconEntry[] = [
	{ component: SvgIconFacebook, name: 'Facebook' },
	{ component: SvgIconInstagram, name: 'Instagram' },
	{ component: SvgIconTikTok, name: 'TikTok' },
	{ component: SvgIconYoutube, name: 'Youtube' },
];

const TechIconsPage = () => (
	<div style={PAGE_STYLE}>
		<div style={GRID_STYLE}>
			{Object.values(TECH).map((tech) => (
				<ImgTile key={tech.label} label={tech.label} src={tech.image} />
			))}
		</div>
	</div>
);

const SoftwareIconsPage = () => (
	<div style={PAGE_STYLE}>
		<div style={GRID_STYLE}>
			{(Object.keys(SOFTWARE) as Array<keyof typeof SOFTWARE>).map((key) => (
				<ImgTile
					key={key}
					label={SOFTWARE[key].label}
					src={SOFTWARE[key].image}
				/>
			))}
		</div>
	</div>
);

const SvgIconsPage = () => (
	<div style={PAGE_STYLE}>
		<div style={GRID_STYLE}>
			{SVG_ICONS.map(({ component: Icon, name }) => (
				<div key={name} style={TILE_STYLE}>
					<Icon size={48} />
					<span style={LABEL_STYLE}>{name}</span>
				</div>
			))}
		</div>
	</div>
);

const meta = {
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['ai-generated'],
	title: 'Design System/Icons',
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const TechIcons: Story = { render: () => <TechIconsPage /> };
export const SoftwareIcons: Story = {
	render: () => <SoftwareIconsPage />,
};
export const SvgIcons: Story = { render: () => <SvgIconsPage /> };
