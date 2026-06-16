import React, { useMemo, useState } from 'react';

import { CountUp } from 'src/animations/CountUp';
import { MotionExpand } from 'src/animations/MotionExpand';

import { ReadMoreButton } from '~components/ReadMoreButton/ReadMoreButton';
import { useIsMobile } from '~helpers/useIsMobile';

import { ListColumn } from './ListColumn/ListColumn';
import { splitListInHalf } from './ListSection.helpers';
import { getExperienceYears } from '../../HomePage.helpers';
import { SKILLS_LIST } from '../Skills.const';

import styles from './ListSection.module.scss';

const yearsOfExperience = getExperienceYears();

export const ListSection = () => {
	const list = SKILLS_LIST;
	const [LIST_A, LIST_B] = useMemo(() => splitListInHalf(list), [list]);
	const [expanded, setExpanded] = useState(false);
	const isMobile = useIsMobile();

	return (
		<section className="primary">
			<h2>
				<CountUp suffix="+" value={yearsOfExperience} /> Years Experience
			</h2>

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
		</section>
	);
};
