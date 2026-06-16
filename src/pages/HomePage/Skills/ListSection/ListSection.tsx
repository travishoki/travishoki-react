import React, { useMemo, useState } from 'react';

import { MotionExpand } from 'src/animations/MotionExpand';

import { ReadMoreButton } from '~components/ReadMoreButton/ReadMoreButton';
import { useIsMobile } from '~helpers/useIsMobile';

import { ListColumn } from './ListColumn/ListColumn';
import { splitListInHalf } from './ListSection.helpers';
import { SKILLS_LIST } from '../Skills.const';

import styles from './ListSection.module.scss';

export const ListSection = () => {
	const list = SKILLS_LIST;
	const [LIST_A, LIST_B] = useMemo(() => splitListInHalf(list), [list]);
	const [expanded, setExpanded] = useState(false);
	const isMobile = useIsMobile();

	return (
		<div className="boxed boxed-md">
			<div className="row">
				<div className="col-md-6">
					<ListColumn items={LIST_A} />
				</div>
				{isMobile ? (
					<MotionExpand isOpen={expanded}>
						<div className="col-md-6">
							<ListColumn items={LIST_B} />
						</div>
					</MotionExpand>
				) : (
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
	);
};
