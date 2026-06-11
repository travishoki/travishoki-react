import React from 'react';

import { TECH, TechKey } from '~const/Tech.const';

import styles from './TechIcon.module.scss';

export const TechIcon = ({ className, name }: TechIconProps) => (
	<div className={className}>
		<img className={styles.techIcon} src={TECH[name].image} />
	</div>
);

type TechIconProps = {
	className?: string;
	name: TechKey;
};
