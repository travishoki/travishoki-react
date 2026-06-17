import React from 'react';

import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Typewriter } from 'src/animations/Typewriter';

import { SocialIcons } from '~components/SocialIcons/SocialIcons';
import ImgProfilePic from '~images/global/travis-hoki.jpg';

import styles from './Banner.module.scss';

export const Banner = () => (
	<div className={`boxed ${styles.homeBanner}`}>
		<img
			alt="Travis Hoki Profile Picture"
			className={styles.bannerPic}
			src={ImgProfilePic}
		/>
		<div>
			<h1>
				<Typewriter text="Travis Hoki" />
			</h1>
			<p className={styles.jobTitle}>
				Senior Software
				<br />
				Development Engineer
			</p>
			<SocialIcons className={styles.bannerSocial} />
			<Link
				className={classNames('btn btn-primary btn-lg', styles.homeBannerBtn)}
				to="/contact"
			>
				Contact
			</Link>
		</div>
	</div>
);
