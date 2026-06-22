import React from 'react';

import classNames from 'classnames';

import { CoverImage } from './CoverImage/CoverImage';
import { Logo } from './Logo/Logo';
import { RetailWebsiteColumn } from './RetailWebsiteColumn/RetailWebsiteColumn';
import { SocialMedia } from './SocialMedia/SocialMedia';

export const HokiSkateboardsPage = () => (
	<>
		<section>
			<div className="boxed boxed-xl">
				<Logo />
				<CoverImage />
				<p className="boxed indent mb-3">
					Hoki Skateboards is my passion project. Through the years I have
					enjoyed building to my little company. I&apos;ve made and sold
					skateboards, wrote a children&apos;s book, an app, and met so many
					cool people.
				</p>
				<SocialMedia />
			</div>
		</section>
		<section>
			<div className="boxed boxed-xl">
				<div className="row gy-3">
					<div className="col-sm-6">
						<RetailWebsiteColumn />
					</div>
				</div>
			</div>
		</section>
	</>
);
