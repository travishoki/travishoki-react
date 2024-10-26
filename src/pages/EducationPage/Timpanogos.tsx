import React from 'react';

import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable';
import { Pannel } from '~components/Pannels/Pannel';
import { Pannels } from '~components/Pannels/Pannels';
import imgTimpanogosGraduation from '~images/education/timpanogos-graduation.jpg';
import imgTimpanogos from '~images/education/timpanogos.png';

import { Scholarships } from './Scholarships';
import './Timpanogos.scss';

export const Timpanogos = () => (
	<section className="white center education">
		<div className="boxed timpanogos">
			<Pannels className="reverse">
				<Pannel>
					<h3>Timpanogos High School</h3>
					<img className="school" src={imgTimpanogos} />
					<p className="degree">High School Diploma</p>
					<p>Aug 2009 - Apr 2006</p>
					<Scholarships />
					<p className="label">Activities and Societies:</p>
					<p className="activities">
						Timpanogos Ballroom Team, UVU Breakdance Club, BYU Breakdance Club,
						Timpanogos Hip-hop Club, Orem High Breakdance Club, Provo High
						Breakdance Club
					</p>
				</Pannel>
				<Pannel>
					<ImageMaximizable
						alt="High School Graduation"
						dimensions={[600, 400]}
						imageClassName="picture"
						src={imgTimpanogosGraduation}
					/>
					<p className="image-caption">
						(High School graduation with girlfriend at the time, eventual wife.)
					</p>
				</Pannel>
			</Pannels>
		</div>
	</section>
);
