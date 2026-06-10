import React from 'react';

import { ResumeDataType } from '../../ResumePage.data';

export const AffiliatedCompany = ({
	affiliatedCompany,
}: AffiliatedCompanyProps) => {
	if (!affiliatedCompany) return null;

	return (
		<div className="experience-affiliated-company">
			<img className="round" src={affiliatedCompany.img} />
			<p>{affiliatedCompany.title}</p>
		</div>
	);
};

type AffiliatedCompanyProps = {
	affiliatedCompany: ResumeDataType['affiliatedCompany'];
};
