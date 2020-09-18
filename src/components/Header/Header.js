import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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

                    <div className="menu-btn">
                        <i
							className="fa fa-bars mobileMenuIcon"
							onClick={this.toggleMobileMenu}
						/>
                    </div>

                    <ul className={'nav ' + (this.state.showMobileNav ? 'slide-down' : 'slide-up')}>
                        <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
                        <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;
