import React from 'react';

import classNames from 'classnames';

import { DownloadButton } from '../DownloadButton/DownloadButton';

import styles from './DownloadSection.module.scss';

export const DownloadSection = () => (
	<section className="blue ">
		<div className={classNames('boxed', styles.resumeButtons)}>
			<DownloadButton
				caption="The one I have to use"
				href="/travis-hoki-resume.pdf"
				icon="fa-link"
				text=".pdf"
				title="Travis Hoki Resume (pdf)"
			/>
			<DownloadButton
				caption="The one I like"
				href="/travis-hoki-resume-creative.pdf"
				icon="fa-link"
				text="Creative .pdf"
				title="Travis Hoki Resume Creative (pdf)"
			/>
			<DownloadButton
				caption="The one that may be required"
				href="/travis-hoki-resume.docx"
				icon="fa-download"
				text=".docx"
				title="Travis Hoki Resume (docx)"
			/>
		</div>
	</section>
);
