import React, { AnchorHTMLAttributes, ReactNode } from 'react';

export const ExternalLink = ({
	children,
	...rest
}: ExternalLinkComponentProps) => (
	<a {...rest} rel="noreferrer" target="_blank">
		{children}
	</a>
);

type ExternalLinkComponentProps = {
	children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'rel' | 'target'>;
