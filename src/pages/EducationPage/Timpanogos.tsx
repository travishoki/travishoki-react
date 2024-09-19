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
					<img className="center school" src={imgTimpanogos} />
					<p>High School Diploma</p>
					<p>Aug 2009 - Apr 2006</p>
					<p className="label">Activities and Societies:</p>
					<p className="activities">
						Timpanogos Ballroom Team, UVU Breakdance Club, BYU Breakdance Club,
						Timpanogos Hip-hop Club, Orem High Breakdance Club, Provo High
						Breakdance Club
					</p>
					<Scholarships />
				</Pannel>
				<Pannel>
					<ImageMaximizable
						alt="High School Graduation"
						className="center picture"
						src={imgTimpanogosGraduation}
					/>
				</Pannel>
			</Pannels>
		</div>
	</section>
);