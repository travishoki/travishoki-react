import React from "react";

import ImgHokiSkateboardsLogo from "~images/home/hoki-skateboards.jpg";
import ImgYouShouldAlwaysSkateboard from "~images/home/you-should-always-skateboard.jpg";

import Title from "./Title";

const Content = () => (
  <div className="hoki-skateboards-inner-content">
    <div className="row">
      <div className="col-sm-6">
        <a
          title="Hoki Skateboards"
          href="https://hokiskateboards.com"
          target="_blank"
        >
          <Title title="Retail Website" />
          <img
            alt="Hoki Skateboards"
            src={ImgHokiSkateboardsLogo}
            className="center"
          />
          <p className="button-link">Go to Site</p>
        </a>
        <p>
          Description:
          <br />
          Hoki Skateboards is a small family-owned online skateboard company.
        </p>
        <p>
          Tech:
          <br />
          Built in Wordpress with a custom Wordpress Plugin, using Woocommerce,
          PHP and React.
        </p>
      </div>
      <div className="col-sm-6">
        <a
          title="You Should Always Skateboard"
          href="https://www.amazon.com/gp/product/173400830X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=173400830X&linkCode=as2&tag=hokiskatebo0f-20&linkId=d66288b7c17823a393fe530309328062"
          target="_blank"
        >
          <Title title="Children's Book" />
          <img
            alt="You Should Always Skateboard"
            src={ImgYouShouldAlwaysSkateboard}
          />
          <p className="button-link">View on Amazon</p>
        </a>
        <p>
          Description:
          <br />
          Illustrated kid's book about skateboarding.
        </p>
        <p>
          Contribution:
          <br />
          Self authored, illustrated, and published. Successfully Kickstarter
          backed.
        </p>
      </div>
    </div>
  </div>
);

export default Content;
