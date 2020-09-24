import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import classnames from 'classnames';

class Nav extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
		};

		this.toggleOpen = this.toggleOpen.bind(this);
		this.close = this.close.bind(this);
	}

	componentDidUpdate(prevProps) {
		const hasRouteChanged = this.props.location.pathname !== prevProps.location.pathname;

		if (hasRouteChanged) {
			this.close();
		}
	}

	close() {
		this.setState({ open: false });
	}

	toggleOpen() {
		this.setState({ open: !this.state.open });
	}

	render() {
		return (
			<Fragment>
				<div className="menu-btn">
					<i
						className="fa fa-bars mobileMenuIcon"
						onClick={this.toggleOpen}
					/>
				</div>

				<ul
					className={classnames(
						'nav',
						{
							open: this.state.open,
						}
					)}
				>
					<li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
					<li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
					<li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
					<li><NavLink to="/about" activeClassName="active">About</NavLink></li>
					<li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
				</ul>
			</Fragment>
		);
	}
}

Nav.propTypes = {
    history: PropTypes.object,
	location: PropTypes.shape({
		pathname: PropTypes.string,
	}),
};

export default withRouter(Nav);
