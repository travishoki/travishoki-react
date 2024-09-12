import React, { ReactNode } from 'react';

import Header from '~components/Header/Header';
import Footer from '~components/Footer/Footer';
import './styles/styles.scss';

const App = ({ children }: AppProps) => (
	<>
		<Header />
		{children}
		<Footer />
	</>
);

type AppProps = {
	children: ReactNode;
};

export default App;
