import React from 'react';

import { AitInfo } from 'src/pages/SingleProjectPage/ProjectContent/ProjectInfoSection/AiInfo/AiInfo';

import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable/ImageMaximizable';
import ImgFoodCards from '~images/websites/thumbnail/food-cards.jpg';
import { SvgIconSparkle } from '~svg/SvgIconSparkle';

import { foodCardsAiIntegration } from './AiPoweredProjects.const';

import styles from './AiPoweredProjects.module.scss';

const THUMBNAIL_SIZE = 250;

export const AiPoweredProjects = () => {
	return (
		<section className={styles.aiPoweredProjects}>
			<div className="boxed boxed-lg">
				<h2>
					<SvgIconSparkle size={28} />
					AI Powered Projects
				</h2>
				<div className={styles.imageContainer}>
					<ImageMaximizable
						alt="Food Cards"
						dimensions={[THUMBNAIL_SIZE, THUMBNAIL_SIZE]}
						src={ImgFoodCards}
					/>
				</div>

				<AitInfo text={foodCardsAiIntegration} />
			</div>
		</section>
	);
};
