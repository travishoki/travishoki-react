import React from 'react';

import imgRanger from '~images/education/ranger.png';

import { SalesforceIcon } from './SalesforceIcon';
import './SalesforceTrailhead.scss';

export const SalesforceTrailhead = () => (
	<section className="gray ">
		<div className="boxed trailhead">
			<img src={imgRanger} />
			<div className="trailhead-content">
				<div className="earned">
					<h2>Salesforce&apos;s Ranger Status</h2>
					<p>Earned July 25, 2024</p>
					<a
						href="https://www.salesforce.com/trailblazer/nyzvvx5htc3badv2b1"
						rel="noreferrer"
						target="_blank"
						title="Trailblazer"
					>
						<SalesforceIcon />
						View my profile
					</a>
				</div>

				<h3>What are Trailblazer Ranks?</h3>
				<p>
					<a
						href="https://trailhead.salesforce.com/trailblazer-ranks"
						rel="noreferrer"
						target="_blank"
						title="Trailblazer Ranks"
					>
						Trailblazer Ranks
					</a>{' '}
					showcase where you are on your Trailhead learning journey. Each module
					you complete earns you a badge and points that go towards your
					Trailblazer Rank. Climb the ranks and learn new skills.
				</p>
			</div>
		</div>
	</section>
);
