import React, { useState } from 'react';

import classnames from 'classnames';

import { ListSectionLabel } from './ListSectionLabel/ListSectionLabel';
import { ListSwitcherButton } from './ListSwitcherButton/ListSwitcherButton';
import { ListSwitcherHeader } from './ListSwitcherHeader/ListSwitcherHeader';
import { ListSwitcherList } from './ListSwitcherList/ListSwitcherList';
import { splitByLegacy } from './ListSwitcher.utils';
import './ListSwitcher.scss';

export type ListSwitcherItemData = {
	image: string;
	label: string;
	legacy?: boolean;
	to?: string;
};

type ListSwitcherProps = {
	circle?: boolean;
	header?: string;
	initialExpanded?: boolean;
	items: ListSwitcherItemData[];
};

export const ListSwitcher = ({
	circle = false,
	header,
	initialExpanded = false,
	items,
}: ListSwitcherProps) => {
	const [expanded, setExpanded] = useState(initialExpanded);

	if (items.length === 0) return null;

	const iconClass = classnames('list-switcher-icon', { circle });

	const { currentTech, legacyTech } = splitByLegacy(items);

	return (
		<div className="list-switcher">
			{header && <ListSwitcherHeader header={header} />}
			<div className="list-switcher-content">
				<div
					className={
						expanded ? 'list-switcher-vertical' : 'list-switcher-horizontal'
					}
				>
					{expanded ? (
						<>
							<ListSwitcherList
								expanded={expanded}
								iconClass={iconClass}
								items={currentTech}
							/>
							{legacyTech.length > 0 && (
								<ListSectionLabel label="Legacy Tech & Frameworks" />
							)}
							<ListSwitcherList
								expanded={expanded}
								iconClass={iconClass}
								items={legacyTech}
							/>
						</>
					) : (
						<ListSwitcherList
							expanded={expanded}
							iconClass={iconClass}
							items={items}
						/>
					)}
				</div>
			</div>
			<ListSwitcherButton
				expanded={expanded}
				onClick={() => setExpanded(!expanded)}
			/>
		</div>
	);
};
