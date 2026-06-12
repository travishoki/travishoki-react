import React from 'react';

import classNames from 'classnames';

import { TextWithReadMore } from '~components/TextWithReadMore/TextWithReadMore';

import { InterestItem as InterestItemType } from '../CurrentTechInterests.data';

import styles from './InterestItem.module.scss';

export const InterestItem = ({ desc, img, title }: InterestItemType) => (
	<div className={classNames('col-12 col-md-4', styles['interest-item'])}>
		<img
			alt={title}
			className={classNames('center mb-3', styles['interest-image'])}
			src={img}
		/>
		<h3>{title}</h3>
		<TextWithReadMore
			buttonClassName={styles['current-tech-interests-read-more']}
			paragraphs={desc}
		/>
	</div>
);
