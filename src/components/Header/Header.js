import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Nav from './Nav';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMobileNav: false
        };

		this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    }

    componentWillMount(){
        const initialPath = location.pathname;

        this.setState({
          _routePath: initialPath
        });
    }

    componentWillReceiveProps() {
        const newPath = location.pathname;

        if (this.state._routePath !== newPath) {
            this.setState({
              _routePath: newPath
            });

            if (this.onRouteChanged) {
                this.onRouteChanged();
            }
        }
    }

    onRouteChanged(){
        if(this.state.showMobileNav){
            this.toggleMobileMenu();
        }
    }

    toggleMobileMenu(){
        this.setState({ showMobileNav: !this.state.showMobileNav });
    }

    render() {
        return (
            <div id="header">
                <div className="boxed">
                    <h1>
						<NavLink to="/">Travis Hoki</NavLink>
					</h1>

					<Nav
						showMobileNav={this.state.showMobileNav}
						toggleMobileMenu={this.toggleMobileMenu}
					/>
                </div>
            </div>
        );
    }
}

export default Header;
