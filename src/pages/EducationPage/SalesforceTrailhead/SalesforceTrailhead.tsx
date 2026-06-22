import React from 'react';

import classNames from 'classnames';

import { ExternalLink } from '~components/ExternalLink/ExternalLink';
import ImgRanger from '~images/education/ranger.png';

import { SalesforceIcon } from '../SalesforceIcon/SalesforceIcon';

import styles from './SalesforceTrailhead.module.scss';

export const SalesforceTrailhead = () => (
	<section>
		<div className={classNames('boxed boxed-lg', styles.trailhead)}>
			<img
				alt="Salesforce Ranger Badge"
				className={styles.trailheadImage}
				src={ImgRanger}
			/>
			<div className={styles.earned}>
				<h2>Salesforce&apos;s Ranger Status</h2>
				<p>Earned July 25, 2024</p>
				<ExternalLink
					href="https://www.salesforce.com/trailblazer/nyzvvx5htc3badv2b1"
					title="Trailblazer"
				>
					<SalesforceIcon />
					View my profile
				</ExternalLink>
			</div>
			<div className={styles.rank}>
				<h3>What are Trailblazer Ranks?</h3>
				<p>
					<ExternalLink
						href="https://trailhead.salesforce.com/trailblazer-ranks"
						title="Trailblazer Ranks"
					>
						Trailblazer Ranks
					</ExternalLink>{' '}
					showcase where you are on your Trailhead learning journey. Each module
					you complete earns you a badge and points that go towards your
					Trailblazer Rank. Climb the ranks and learn new skills.
				</p>
			</div>{' '}
		</div>
	</section>
);
