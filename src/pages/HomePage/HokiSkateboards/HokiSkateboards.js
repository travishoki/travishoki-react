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

      <p className="app-description">Mobile App built in React Native</p>
      <img
        className="app-icon"
        title="Hoki Skateboards App"
        src="http://www.hokiskateboards.com/wp-content/themes/hokiskateboards-wp/src/images/app/icon.png"
      />
      <p className="app-description">Download our new app!</p>
      <div className="app-badges">
        <a
          href="https://apps.apple.com/us/app/hoki-skateboards/id1622675312"
          target="_blank"
          title="Download on the App Store"
        >
          <img
            alt="Download on the App Store"
            className="apple-badge"
            height="40"
            src="https://hokiskateboards.com/wp-content/themes/hokiskateboards-wp/src/images/app/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
            width="120"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.hokiskateboards.app&amp;pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          target="_blank"
          title="Get it on Google Play"
        >
          <img
            alt="Get it on Google Play"
            className="google-badge"
            height="250"
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            width="646"
          />
        </a>
      </div>

      <SocialMedia />
    </div>
  </div>
);

export default HokiSkateboards;
