import React, { Fragment, useState } from 'react';

import classnames from 'classnames';

import { ListSectionLabel } from './ListSectionLabel/ListSectionLabel';
import { ListSwitcherButton } from './ListSwitcherButton/ListSwitcherButton';
import { ListSwitcherHeader } from './ListSwitcherHeader/ListSwitcherHeader';
import { ListSwitcherList } from './ListSwitcherList/ListSwitcherList';
import { groupTechByType } from './ListSwitcher.utils';
import './ListSwitcher.scss';

export type TechType =
	| 'frontend'
	| 'backend'
	| 'cms'
	| 'tool'
	| 'integrations'
	| 'legacy';

export type ListSwitcherItemData = {
	image: string;
	label: string;
	to?: string;
	type?: TechType;
};

type ListSwitcherProps = {
	circle?: boolean;
	header: string;
	initialExpanded?: boolean;
	itemClassName?: string;
	items: ListSwitcherItemData[];
};

const TYPE_SECTIONS: { label: string; type: TechType }[] = [
	{ label: 'Frontend', type: 'frontend' },
	{ label: 'Backend', type: 'backend' },
	{ label: 'Content Management System', type: 'cms' },
	{ label: 'Tools', type: 'tool' },
	{ label: 'Integrations', type: 'integrations' },
	{ label: 'Legacy Tech', type: 'legacy' },
];

export const ListSwitcher = ({
	circle = false,
	header,
	initialExpanded = false,
	itemClassName,
	items,
}: ListSwitcherProps) => {
	const [expanded, setExpanded] = useState(initialExpanded);

	if (items.length === 0) return null;

	const iconClass = classnames('list-switcher-icon', { circle });

	const groupedTech = groupTechByType(items);

	return (
		<div className="list-switcher">
			<ListSwitcherHeader header={header} />
			<div className="list-switcher-content">
				<div
					className={
						expanded ? 'list-switcher-vertical' : 'list-switcher-horizontal'
					}
				>
					{expanded ? (
						TYPE_SECTIONS.map(({ label, type }) => {
							const group = groupedTech[type];

							if (group.length === 0) return null;

							return (
								<Fragment key={type}>
									<ListSectionLabel label={label} />
									<ListSwitcherList
										expanded={expanded}
										iconClass={iconClass}
										itemClassName={itemClassName}
										items={group}
									/>
								</Fragment>
							);
						})
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
