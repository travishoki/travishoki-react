import React from 'react';

import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable';
import { Pannel } from '~components/Pannels/Pannel';
import { Pannels } from '~components/Pannels/Pannels';
import imgUvuGraduation from '~images/education/uvu-graduation.jpg';
import imgUvu from '~images/education/uvu.png';

export const Uvu = () => (
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
						alt="University Graduation"
						className="center picture"
						src={imgUvuGraduation}
					/>
					<p className="image-caption">(College graduation with my wife.)</p>
				</Pannel>
			</Pannels>
		</div>
	</section>
);
