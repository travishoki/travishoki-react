import React from 'react';

import { Education } from '~components/Education/Education';

import { CareerOverview } from './CareerOverview/CareerOverview';
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
		<CareerOverview />
		<Experience />
		<div className="boxed boxed-lg">
			<TechDivider text="Tech Experience" />
		</div>
		<TechTiles />
		<Skills />
		<Education />
	</div>
);
