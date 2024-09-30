import React from 'react';

import './SocialMedia.scss';
import { SvgIconTikTok } from 'src/svg/SvgIconTikTok';
import { SvgIconFacebook } from 'src/svg/SvgIconFacebook';
import { SvgIconYoutube } from 'src/svg/SvgIconYoutube';
import { SvgIconInstagram } from 'src/svg/SvgIconInstagram';
import { WHITE } from '~const/colors.const';

const iconProps = {
	color: WHITE,
	size: 30,
};

export const SocialMedia = () => (
	<ul className="social-media">
		<li>
			<a
				aria-label="Instagram"
				href="https://instagram.com/hokiskateboards"
				rel="noreferrer"
				target="_blank"
				title="Instagram | Hoki Skateboards"
			>
				<SvgIconInstagram {...iconProps} />
			</a>
		</li>
		<li>
			<a
				aria-label="Youtube"
				href="https://www.youtube.com/channel/UCT6ba8pGTUQyYpEk8pnc8og"
				rel="noreferrer"
				target="_blank"
				title="Youtube | Hoki Skateboards"
			>
				<SvgIconYoutube {...iconProps} />
			</a>
		</li>
		<li>
			<a
				aria-label="Facebook"
				href="https://www.facebook.com/hokiskateboards"
				rel="noreferrer"
				target="_blank"
				title="Facebook | Hoki Skateboards"
			>
				<SvgIconFacebook {...iconProps} />
			</a>
		</li>
		<li>
			<a
				aria-label="TikTok"
				href="https://www.tiktok.com/@hokiskateboards"
				rel="noreferrer"
				target="_blank"
				title="TikTok | Hoki Skateboards"
			>
				<SvgIconTikTok {...iconProps} />
			</a>
		</li>
	</ul>
);
