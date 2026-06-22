import React from 'react';

import { ExternalLink } from '~components/ExternalLink/ExternalLink';
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
		<ExternalLink aria-label={ariaLabel} href={href} title={title}>
			<Icon {...iconProps} />
		</ExternalLink>
	</li>
);
