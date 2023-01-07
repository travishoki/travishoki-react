import React from "react";

import App from "./App";
import Content from "./Content";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

const HokiSkateboards = () => (
  <div className="hoki-skateboards">
    <div className="hoki-skateboards-inner">
      <h3>Passion Project</h3>

      <Logo />
      <SocialMedia />
      <Content />
      <App />
    </div>
  </div>
);

export default HokiSkateboards;
