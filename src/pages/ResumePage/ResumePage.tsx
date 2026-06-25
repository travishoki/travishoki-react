import React from 'react';

import { Education } from '~components/Education/Education';

import { CareerOverview } from './CareerOverview/CareerOverview';
import { CoreCompetencies } from './CoreCompetencies/CoreCompetencies';
import { DownloadSection } from './DownloadSection/DownloadSection';
import { Experience } from './Experience/Experience';
import { TechDivider } from './TechDivider/TechDivider';
import { Skills } from '../HomePage/Skills/Skills';
import { TechTiles } from '../HomePage/TechTiles/TechTiles';

import styles from './ResumePage.module.scss';

export const ResumePage = () => (
	<div className={styles.resume} id="container">
		<h1>Resume</h1>
		<DownloadSection />
		<section className="primary-three">
			<div className="boxed-xl">
				<div className="row gy-3">
					<div className="col-sm-6">
						<CareerOverview />
					</div>
					<div className="col-sm-6">
						<CoreCompetencies />
					</div>
				</div>
			</div>
		</section>
		<Experience />
		<section>
			<div className="boxed-xl">
				<TechDivider text="Tech Experience" />
				<TechTiles />
			</div>
		</section>
		<Skills />
		<Education />
	</div>
);
