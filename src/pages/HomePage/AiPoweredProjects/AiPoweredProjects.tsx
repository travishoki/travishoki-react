import React from 'react';

import classNames from 'classnames';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ProjectType } from 'src/pages/ProjectsPage/ProjectsPage.types';

import { ImgPopIn } from '~animations/ImgPopIn';
import { AitInfo } from '~components/AiInfo/AiInfo';
import { GOLD_2, GOLD_4 } from '~const/colors.const';
import ImgFoodCards from '~images/websites/thumbnail/food-cards.jpg';
import { SvgIconSparkle } from '~svg/SvgIconSparkle';

import { AI_POWERED_FOOD } from './AiPoweredProjects.const';

import styles from './AiPoweredProjects.module.scss';

const THUMBNAIL_SIZE = 250;

const SPARKLE_COLORS = [GOLD_2, GOLD_4, GOLD_2, GOLD_4];

export const AiPoweredProjects = () => {
	const { aiIntegration } = AI_POWERED_FOOD as ProjectType;

	return (
		<section>
			<div className="boxed boxed-lg">
				<h2>
					<motion.span
						animate={{ color: SPARKLE_COLORS }}
						transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
					>
						<SvgIconSparkle color="currentColor" size={28} />
					</motion.span>
					AI Powered Project
				</h2>
				<div className={styles.container}>
					<div className={styles.content}>
						<div className={styles.imageContainer}>
							<Link to="/project/food-cards">
								<ImgPopIn
									alt="Food Cards"
									height={THUMBNAIL_SIZE}
									src={ImgFoodCards}
									width={THUMBNAIL_SIZE}
								/>
							</Link>
						</div>
						<Link
							className={classNames(
								'btn btn-primary',
								styles.viewProjectButton,
							)}
							to="/project/food-cards"
						>
							View Project
						</Link>
					</div>
					<div className={styles.aiInfoContainer}>
						<AitInfo text={aiIntegration as string[]} />
					</div>
				</div>
			</div>
		</section>
	);
};
