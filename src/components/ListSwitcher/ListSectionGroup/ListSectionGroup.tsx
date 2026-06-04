import React, { useState } from 'react';

import { ListSwitcherItemData } from '../ListSwitcher';
import { ListSwitcherList } from '../ListSwitcherList/ListSwitcherList';

type ListSectionGroupProps = {
	iconClass: string;
	itemClassName?: string;
	items: ListSwitcherItemData[];
	label: string;
};

export const ListSectionGroup = ({
	iconClass,
	itemClassName,
	items,
	label,
}: ListSectionGroupProps) => {
	const [open, setOpen] = useState(true);

	return (
		<div className="list-section-group">
			<button
				className="list-switcher-legacy-label my-2 py-1 px-2"
				onClick={() => setOpen(!open)}
			>
				{label}
				<i className={`fa fa-${open ? 'minus' : 'plus'}`} />
			</button>

			{open && (
				<ListSwitcherList
					expanded
					iconClass={iconClass}
					itemClassName={itemClassName}
					items={items}
				/>
			)}
		</div>
	);
};
