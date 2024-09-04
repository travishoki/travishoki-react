import React from "react";
import { withRouter } from "react-router-dom";

import Nav from "./Nav";
import Title from "./Title";

const Header = () => (
  <div id="header">
    <div className="boxed">
      <Title />
      <Nav />
    </div>
  </div>
);

export default withRouter(Header);
