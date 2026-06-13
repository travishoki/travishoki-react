import React from 'react';

export const ViewLiveSite = ({ url }: ViewLiveSiteProps) => (
	<a
		className="btn btn-primary btn-lg"
		href={url}
		rel="noreferrer"
		target="_blank"
	>
		View Live Site
	</a>
);

type ViewLiveSiteProps = {
	url?: string;
};
