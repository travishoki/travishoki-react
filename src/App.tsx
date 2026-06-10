import React, { ReactNode } from 'react';

import { Footer } from '~components/Footer/Footer';
import { Header } from '~components/Header/Header';
import './styles/styles.scss';

export const App = ({ children }: AppProps) => (
	<>
		<Header />
		{children}
		<Footer />
	</>
);

type AppProps = {
	children: ReactNode;
};
