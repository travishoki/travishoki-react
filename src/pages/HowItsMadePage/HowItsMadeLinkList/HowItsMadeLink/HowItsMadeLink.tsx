import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { ExternalLink } from '~components/ExternalLink/ExternalLink';

import { HowItsMadeLink as HowItsMadeLinkType } from '../HowItsMadeLinkList.data';

import styles from './HowItsMadeLink.module.scss';

type Props = Omit<HowItsMadeLinkType, 'itemKey'>;

export const HowItsMadeLink = ({ description, href, icon, label }: Props) => (
	<ExternalLink
		className={classNames('center', styles.howItsMadeLink)}
		href={href}
	>
		<FontAwesomeIcon icon={icon} />
		<p className={styles.label}>{label}</p>
		<p className={styles.description}>{description}</p>
	</ExternalLink>
);
