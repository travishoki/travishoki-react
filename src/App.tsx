// This component handles the App template used on every page.
import React, { ReactNode } from 'react';
// import { connect } from 'react-redux';

import Header from '~components/Header/Header';
import Footer from '~components/Footer/Footer';
// import { FormState } from '~reducers/initialState';
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
	// loading: boolean;
};

// const mapStateToProps = (state: FormState) => ({
// 	loading: state.ajaxCallsInProgress > 0,
// });

export default App;
// export default connect(mapStateToProps)(App);
