import React, { useMemo, useState } from 'react';
import classNames from 'classnames';

import { ListColumn } from './ListColumn/ListColumn';
import { ReadMoreButton } from './ReadMoreButton/ReadMoreButton';
import { splitListInHalf } from './ListSection.helpers';

import './ListSection.scss';

export const ListSection = ({ list, title }: ListSectionProps) => {
	const [LIST_A, LIST_B] = useMemo(() => splitListInHalf(list), [list]);
	const [expanded, setExpanded] = useState(false);

	return (
		<section className="primary list-section">
			<h2>{title}</h2>

			<div className="boxed boxed-md">
				<div className="row">
					<div className="col-md-6">
						<ListColumn items={LIST_A} />
					</div>
					<div
						className={classNames('col-md-6 list-section-secondary', {
							expanded,
						})}
					>
						<ListColumn items={LIST_B} />
					</div>
				</div>

				<ReadMoreButton
					expanded={expanded}
					onToggle={() => setExpanded(!expanded)}
				/>
			</div>
		</section>
	);
};

type ListSectionProps = {
	list: string[];
	title: string;
};
