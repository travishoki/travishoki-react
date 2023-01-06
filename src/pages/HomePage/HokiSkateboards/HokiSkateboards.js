import React from "react";

import ImgHokiSkateboardsLogo from "~images/home/hoki-skateboards.jpg";
import ImgYouShouldAlwaysSkateboard from "~images/home/you-should-always-skateboard.jpg";

import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

const HokiSkateboards = () => (
  <div className="hoki-skateboards">
    <div className="hoki-skateboards-inner">
      <h3>Passion Project</h3>

      <Logo />

      <div className="row hoki-skateboards-inner-content">
        <div className="col-sm-6">
          <a
            title="Hoki Skateboards"
            href="https://hokiskateboards.com"
            target="_blank"
          >
            <img
              alt="Hoki Skateboards"
              src={ImgHokiSkateboardsLogo}
              className="center"
            />
          </a>
          <p>
            Hoki Skateboards is a small family-owned online skateboard company.
          </p>
          <p className="button-link">Go to Site</p>
        </div>
        <div className="col-sm-6">
          <a
            title="You Should Always Skateboard"
            href="https://www.amazon.com/gp/product/173400830X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=173400830X&linkCode=as2&tag=hokiskatebo0f-20&linkId=d66288b7c17823a393fe530309328062"
            target="_blank"
          >
            <img
              alt="You Should Always Skateboard"
              src={ImgYouShouldAlwaysSkateboard}
            />
          </a>
          <p>Illustrated kid's book about skateboarding.</p>
          <p className="button-link">View on Amazon</p>
        </div>
      </div>

      <SocialMedia />
    </div>
  </div>
);

export default HokiSkateboards;
