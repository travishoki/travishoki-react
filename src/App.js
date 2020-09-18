// This component handles the App template used on every page.
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = ({
	children
}) => (
	<Fragment>
		<Header/>
		{children}
		<Footer />
	</Fragment>
);

App.propTypes = {
	children: PropTypes.object.isRequired,
	loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
	loading: state.ajaxCallsInProgress > 0
});

export default connect(mapStateToProps)(App);
