import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
        this.state = {
            showResults: false
        };
    }
    toggleMobileMenu(){
        this.setState({ showResults: !this.state.showResults });
    }
    render() {
        return (
            <div id="header">
                <div className="boxed">
                    <h1><Link to="/">Travis Hoki</Link></h1>

                    <div className="menu-btn">
                        <i className="fa fa-bars mobileMenuIcon" onClick={this.toggleMobileMenu} />
                    </div>

                    <ul className={'nav ' + (this.state.showResults ? 'slide-down' : 'slide-up')}>
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
