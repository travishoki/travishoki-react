import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
        this.state = {
            showMobileNav: false
        };
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
                    <h1><Link to="/">Travis Hoki</Link></h1>

                    <div className="menu-btn">
                        <i className="fa fa-bars mobileMenuIcon" onClick={this.toggleMobileMenu} />
                    </div>

                    <ul className={'nav ' + (this.state.showMobileNav ? 'slide-down' : 'slide-up')}>
                        <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                        <li><Link to="/projects" activeClassName="active">Projects</Link></li>
                        <li><Link to="/resume" activeClassName="active">Resume</Link></li>
                        <li><Link to="/about" activeClassName="active">About</Link></li>
                        <li><Link to="/contact" activeClassName="active">Contact</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;
