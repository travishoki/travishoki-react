import React, { useState } from 'react';

import { AnimatePresence } from 'motion/react';

import { MotionListItem } from './MotionListItem';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof MotionListItem> = {
	component: MotionListItem,
	title: 'Animations/MotionListItem',
};

export default meta;
type Story = StoryObj<typeof MotionListItem>;

const initialItems = ['First item', 'Second item', 'Third item'];

const InteractiveDemo = () => {
	const [items, setItems] = useState(initialItems);

	const addItem = () =>
		setItems((prev) => [...prev, `Item ${prev.length + 1}`]);

	const removeItem = (index: number) =>
		setItems((prev) => prev.filter((_, i) => i !== index));

	return (
		<div>
			<button onClick={addItem} style={{ marginBottom: '10px' }}>
				Add item
			</button>
			<ul>
				<AnimatePresence>
					{items.map((item, index) => (
						<MotionListItem key={item}>
							{item} <button onClick={() => removeItem(index)}>Remove</button>
						</MotionListItem>
					))}
				</AnimatePresence>
			</ul>
		</div>
	);
};

export const Default: Story = {
	render: () => <InteractiveDemo />,
};
