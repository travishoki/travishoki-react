import React from 'react';

import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable';
import { Pannel } from '~components/Pannels/Pannel';
import { Pannels } from '~components/Pannels/Pannels';
import imgTimpanogos from '~images/education/timpanogos.png';
import imgTimpanogosGraduation from '~images/education/timpanogos-graduation.jpg';
import imgUvu from '~images/education/uvu.png';
import imgUvuGraduation from '~images/education/uvu-graduation.jpg';

import './EducationPage.scss';

export const EducationPage = () => (
	<div className="education" id="container">
		<h1>Education</h1>

		<section className="white center education">
			<div className="boxed">
				<Pannels>
					<Pannel>
						<h3>Utah Valley University</h3>
						<img className="center school" src={imgUvu} />
						<div className="text-block">
							<p>Digital Media Major</p>
							<p className="degree">Bachelor of Science</p>
							<p>Internet Technology Emphasis</p>
							<p>Aug 2009 - Apr 2014</p>
						</div>
						<div className="text-block">
							<p className="degree">Associate in Applied Science</p>
							<p>Digital Communication Technology</p>
						</div>
					</Pannel>
					<Pannel>
						<ImageMaximizable
							className="center picture"
							src={imgUvuGraduation}
						/>
					</Pannel>
				</Pannels>
			</div>
		</section>
		<section className="white center education">
			<div className="boxed">
				<Pannels className="reverse">
					<Pannel>
						<h3>Timpanogos High School</h3>
						<img className="center school" src={imgTimpanogos} />
						<p>High School Diploma</p>
						<p>Aug 2009 - Apr 2006</p>
						<p>
							Activities and Societies: Timpanogos Ballroom Team, UVU Breakdance
							Club, BYU Breakdance Club, Timpanogos Hip-hop Club, Orem High
							Breakdance Club, Provo High Breakdance Club
						</p>
					</Pannel>
					<Pannel>
						<ImageMaximizable
							className="center picture"
							src={imgTimpanogosGraduation}
						/>
					</Pannel>
				</Pannels>
			</div>
		</section>
	</div>
);
