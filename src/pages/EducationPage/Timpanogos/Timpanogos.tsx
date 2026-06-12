import React from 'react';

import classNames from 'classnames';

import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable/ImageMaximizable';
import { Panel } from '~components/Panels/Panel/Panel';
import { Panels } from '~components/Panels/Panels';
import imgTimpanogosGraduation from '~images/education/timpanogos-graduation.jpg';
import imgTimpanogos from '~images/education/timpanogos.png';

import { Scholarships } from './Scholarships/Scholarships';
import { ImageCaption } from '../ImageCaption/ImageCaption';

import styles from './Timpanogos.module.scss';

const IMG_WIDTH = 600;
const IMG_HEIGHT = 400;

export const Timpanogos = () => (
	<section className={classNames('white center', styles.timpanogos)}>
		<div className="boxed">
			<Panels reverse>
				<Panel>
					<h2>Timpanogos High School</h2>
					<img className={styles.school} src={imgTimpanogos} />
					<div className={styles.diplomaText}>
						<p className="bold">High School Diploma</p>
						<p>Aug 2009 - Apr 2006</p>
					</div>

					<Scholarships />
					<p className={styles.label}>Activities and Societies:</p>
					<p className={styles.activities}>
						Timpanogos Ballroom Team, UVU Breakdance Club, BYU Breakdance Club,
						Timpanogos Hip-Hop Club, Orem High Breakdance Club, Provo High
						Breakdance Club
					</p>
				</Panel>
				<Panel>
					<ImageMaximizable
						alt="High School Graduation"
						dimensions={[IMG_WIDTH, IMG_HEIGHT]}
						imageClassName="picture"
						src={imgTimpanogosGraduation}
					/>
					<ImageCaption>
						(High School graduation with girlfriend at the time, eventual wife.)
					</ImageCaption>
				</Panel>
			</Panels>
		</div>
	</section>
);
