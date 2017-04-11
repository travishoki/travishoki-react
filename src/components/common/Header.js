import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
      <div id="header">
        <div className="boxed">
            <h1><Link to="/">Travis Hoki</Link></h1>
            <ul className="nav">
                <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                <li><Link to="/projects" activeClassName="active">Projects</Link></li>
                <li><Link to="/resume" activeClassName="active">Resume</Link></li>
                <li><Link to="/about" activeClassName="active">About</Link></li>
                <li><Link to="/contact" activeClassName="active">Contact</Link></li>
            </ul>
            {loading && <LoadingDots interval={100} dots={20}/>}
        </div>
    </div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
