import React from 'react';

import { Link } from 'react-router-dom';

import { SocialIcons } from '~components/SocialIcons/SocialIcons';
import ImgProfilePic from '~images/global/travis-hoki.jpg';

import styles from './Banner.module.scss';

export const Banner = () => (
	<div className={`boxed ${styles.homeBanner}`}>
		<img className={styles.bannerPic} src={ImgProfilePic} />
		<div>
			<h1>Travis Hoki</h1>
			<p className={styles.jobTitle}>Web Developer</p>
			<SocialIcons className={styles.bannerSocial} />
			<Link className="btn btn-primary btn-lg" to="/contact">
				Contact
			</Link>
		</div>
	</div>
);
