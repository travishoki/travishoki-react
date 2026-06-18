import React, { ReactNode } from 'react';

import { Footer } from '~components/Footer/Footer';
import { Header } from '~components/Header/Header';

import styles from './App.module.scss';
import './styles/styles.scss';

export const App = ({ children }: AppProps) => (
	<div className={styles.app}>
		<Header />
		<div className={styles.content}>{children}</div>
		<Footer />
	</div>
);

type AppProps = {
	children: ReactNode;
};
