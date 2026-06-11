import React from 'react';

import { ResumeDataType } from '../../ResumePage.data';

import styles from './AffiliatedCompany.module.scss';

export const AffiliatedCompany = ({
	affiliatedCompany,
}: AffiliatedCompanyProps) => {
	if (!affiliatedCompany) return null;

	return (
		<div className={styles.experienceAffiliatedCompany}>
			<img className="round" src={affiliatedCompany.img} />
			<p>{affiliatedCompany.title}</p>
		</div>
	);
};

type AffiliatedCompanyProps = {
	affiliatedCompany: ResumeDataType['affiliatedCompany'];
};
