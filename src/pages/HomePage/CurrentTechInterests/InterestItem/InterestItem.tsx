import React from 'react';

import classNames from 'classnames';
import { motion } from 'motion/react';

import { TextWithReadMore } from '~components/TextWithReadMore/TextWithReadMore';

import { InterestItem as InterestItemType } from '../CurrentTechInterests.data';

import styles from './InterestItem.module.scss';

export const InterestItem = ({ delay, item }: InterestItemProps) => {
	const { desc, img, title } = item;

	return (
		<div className={classNames('col-12 col-md-4', styles.interestItem)}>
			<motion.div
				initial={{ scale: 0.5 }}
				transition={{ delay, duration: 0.3, ease: 'easeInOut' }}
				viewport={{ once: true }}
				whileInView={{ scale: 1 }}
			>
				<img
					alt={title}
					className={classNames('center mb-3', styles.interestImage)}
					src={img}
				/>
			</motion.div>

			<h3>{title}</h3>
			<TextWithReadMore
				buttonClassName={styles.currentTechInterestsReadMore}
				paragraphs={desc}
			/>
		</div>
	);
};

type InterestItemProps = {
	delay: number;
	item: InterestItemType;
};
