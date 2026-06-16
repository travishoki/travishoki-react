import React from 'react';

import classNames from 'classnames';
import { motion } from 'motion/react';

import { ProjectImageWithPopup } from '../ProjectImageWithPopup/ProjectImageWithPopup';
import { ProjectType } from '../ProjectsPage.types';
import { ProjectBlurb } from './ProjectBlurb/ProjectBlurb';

import styles from './ProjectItem.module.scss';

const TRANSITION = { duration: 0.3, ease: 'easeInOut' } as const;

export const ProjectItem = ({
	className,
	grid,
	project,
	projectLink,
}: ProjectItemProps) => {
	const { company, companySlug, description, itemKey, subtitle } = project;

	return (
		<motion.li
			className={classNames(
				grid ? styles.gridItem : styles.lineItem,
				className,
			)}
			layout="position"
			transition={TRANSITION}
		>
			<ProjectImageWithPopup
				className={grid ? '' : styles.lineItemImage}
				company={company}
				companySlug={companySlug}
				itemKey={itemKey}
				projectLink={projectLink}
				subtitle={subtitle}
			/>
			{!grid && (
				<ProjectBlurb
					className={grid ? '' : styles.lineItemBlurb}
					company={company}
					description={description}
					subtitle={subtitle}
				/>
			)}
		</motion.li>
	);
};

type ProjectItemProps = {
	className?: string;
	grid: boolean;
	project: ProjectType;
	projectLink: string;
};
