// This component handles the App template used on every page.
import React, { PropTypes } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import { connect } from 'react-redux';

const App = () => (
	<div>
		<Header/>
			{this.props.children}
		<Footer />
	</div>
);

App.propTypes = {
	children: PropTypes.object.isRequired,
	loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => ({
	loading: state.ajaxCallsInProgress > 0
});

export default connect(mapStateToProps)(App);
