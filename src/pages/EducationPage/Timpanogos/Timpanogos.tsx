import React from 'react';

import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable/ImageMaximizable';
import { Panel } from '~components/Panels/Panel/Panel';
import { Panels } from '~components/Panels/Panels';
import imgTimpanogosGraduation from '~images/education/timpanogos-graduation.jpg';
import imgTimpanogos from '~images/education/timpanogos.png';

import { Scholarships } from './Scholarships/Scholarships';

import styles from './Timpanogos.module.scss';

const IMG_WIDTH = 600;
const IMG_HEIGHT = 400;

export const Timpanogos = () => (
	<section className="white center education">
		<div className={`boxed ${styles.timpanogos}`}>
			<Panels reverse>
				<Panel>
					<h2>Timpanogos High School</h2>
					<img className="school" src={imgTimpanogos} />
					<p className="degree">High School Diploma</p>
					<p>Aug 2009 - Apr 2006</p>
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
					<p className="image-caption">
						(High School graduation with girlfriend at the time, eventual wife.)
					</p>
				</Panel>
			</Panels>
		</div>
	</section>
);
