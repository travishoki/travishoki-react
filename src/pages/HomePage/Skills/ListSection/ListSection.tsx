import React, { useMemo, useState } from 'react';

import { ReadMoreButton } from '~components/ReadMoreButton/ReadMoreButton';
import { useIsMobile } from '~helpers/useIsMobile';

import { ListColumn } from './ListColumn/ListColumn';
import { splitListInHalf } from './ListSection.helpers';

import styles from './ListSection.module.scss';

export const ListSection = ({ list, title }: ListSectionProps) => {
	const [LIST_A, LIST_B] = useMemo(() => splitListInHalf(list), [list]);
	const [expanded, setExpanded] = useState(false);
	const isMobile = useIsMobile();

	return (
		<section className="primary">
			<h2>{title}</h2>

			<div className="boxed boxed-md">
				<div className="row">
					<div className="col-md-6">
						<ListColumn items={LIST_A} />
					</div>
					{(!isMobile || expanded) && (
						<div className="col-md-6">
							<ListColumn items={LIST_B} />
						</div>
					)}
				</div>

				{isMobile && (
					<ReadMoreButton
						className={styles.listSectionReadMore}
						expanded={expanded}
						onToggle={() => setExpanded(!expanded)}
					/>
				)}
			</div>
		</section>
	);
};

type ListSectionProps = {
	list: string[];
	title: string;
};
