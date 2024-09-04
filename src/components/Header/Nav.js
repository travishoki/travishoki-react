import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { NavLink, withRouter } from "react-router-dom";
import classnames from "classnames";

const Nav = ({ location }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    close();
  }, [location]);

  const close = () => setOpen(false);
  const toggleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <div className="menu-btn">
        <i className="fa fa-bars mobileMenuIcon" onClick={toggleOpen} />
      </div>

      <ul
        className={classnames("nav", {
          open,
        })}
      >
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" activeClassName="active">
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </Fragment>
  );
};

Nav.propTypes = {
  history: PropTypes.object,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

export default withRouter(Nav);
