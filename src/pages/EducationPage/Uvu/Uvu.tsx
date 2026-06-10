import React from 'react';

import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable/ImageMaximizable';
import { Panel } from '~components/Panels/Panel/Panel';
import { Panels } from '~components/Panels/Panels';
import imgUvuGraduation from '~images/education/uvu-graduation.jpg';
import imgUvu from '~images/education/uvu.png';

const SMALL_WIDTH = 600;
const SMALL_HEIGHT = 400;

const LARGE_WIDTH = 1200;
const LARGE_HEIGHT = 800;

export const Uvu = () => (
	<section className="white center education">
		<div className="boxed">
			<Panels>
				<Panel>
					<h2>Utah Valley University</h2>
					<img className="center" src={imgUvu} />
					<div className="mb-3">
						<p>Digital Media Major</p>
						<p className="degree">Bachelor of Science</p>
						<p>Internet Technology Emphasis</p>
						<p>Aug 2009 - Apr 2014</p>
					</div>
					<div className="mb-3">
						<p className="degree">Associate in Applied Science</p>
						<p>Digital Communication Technology</p>
					</div>
				</Panel>
				<Panel>
					<ImageMaximizable
						alt="University Graduation"
						dimensions={[SMALL_WIDTH, SMALL_HEIGHT]}
						imageClassName="picture"
						src={imgUvuGraduation}
						srcLargeDimensions={[LARGE_WIDTH, LARGE_HEIGHT]}
					/>
					<p className="image-caption">(College graduation with my wife.)</p>
				</Panel>
			</Panels>
		</div>
	</section>
);
