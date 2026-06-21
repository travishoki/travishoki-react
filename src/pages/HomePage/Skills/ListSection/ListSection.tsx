import React, { useMemo, useState } from 'react';

import { MotionExpand } from '~animations/MotionExpand';
import { ReadMoreButton } from '~components/ReadMoreButton/ReadMoreButton';
import { useIsMobile } from '~hooks/isMobile';

import { ListColumn } from './ListColumn/ListColumn';
import { splitListInHalf } from './ListSection.helpers';
import { SKILLS_LIST } from '../Skills.const';

import styles from './ListSection.module.scss';

export const ListSection = () => {
	const [listA, listB] = useMemo(
		() => splitListInHalf(SKILLS_LIST),
		[SKILLS_LIST],
	);
	const [expanded, setExpanded] = useState(false);
	const isMobile = useIsMobile();

	return (
		<div className="boxed boxed-md">
			<div className={styles.container}>
				<div className="row gy-3">
					<div className="col-md-6">
						<ListColumn items={listA} />
					</div>
					<div className="col-md-6">
						{isMobile ? (
							<MotionExpand isOpen={expanded}>
								<ListColumn items={listB} />
							</MotionExpand>
						) : (
							<ListColumn items={listB} />
						)}
					</div>
				</div>

				{isMobile && (
					<div className={styles.readMoreWrapper}>
						<ReadMoreButton
							className={styles.listSectionReadMore}
							expanded={expanded}
							onToggle={() => setExpanded(!expanded)}
						/>
					</div>
				)}
			</div>
		</div>
	);
};
