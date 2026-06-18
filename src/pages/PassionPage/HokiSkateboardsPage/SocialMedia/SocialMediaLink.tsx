import React from 'react';

import { WHITE } from '~const/colors.const';

import { SocialMediaItemData } from './SocialMedia.data';

const iconProps = {
	color: WHITE,
	size: 30,
};

export const SocialMediaLink = ({
	Icon,
	ariaLabel,
	href,
	title,
}: SocialMediaItemData) => (
	<li>
		<a
			aria-label={ariaLabel}
			href={href}
			rel="noreferrer"
			target="_blank"
			title={title}
		>
			<Icon {...iconProps} />
		</a>
	</li>
);
