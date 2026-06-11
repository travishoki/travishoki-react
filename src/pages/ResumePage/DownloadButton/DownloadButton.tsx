import React from 'react';

import styles from './DownloadButton.module.scss';

export const DownloadButton = () => (
	<a
		className={`btn btn-secondary btn-lg ${styles.downloadButton}`}
		href="http://travishoki.com/travis-hoki-resume.pdf"
		rel="noreferrer"
		target="_blank"
	>
		<i className="fa fa-download" /> Download
	</a>
);
