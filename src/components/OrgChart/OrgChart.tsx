import React from 'react';

import './OrgChart.scss';

export type OrgMember = {
	name: string;
	reports?: OrgMember[];
	title?: string;
};

const OrgNode = ({ member }: { member: OrgMember }) => (
	<li className="org-node">
		<div className="org-card">
			<p className="org-card-name">{member.name}</p>
			{member.title && <p className="org-card-title">{member.title}</p>}
		</div>

		{member.reports && member.reports.length > 0 && (
			<ul className="org-children">
				{member.reports.map((report) => (
					<OrgNode key={report.name} member={report} />
				))}
			</ul>
		)}
	</li>
);

type OrgChartProps = {
	root: OrgMember;
};

export const OrgChart = ({ root }: OrgChartProps) => (
	<ul className="org-chart">
		<OrgNode member={root} />
	</ul>
);
