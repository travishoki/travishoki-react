import React from "react";

const App = () => (
  <div className="app-section">
    <p className="app-description">Mobile App built in React Native</p>
    <img
      className="app-icon"
      height="150"
      src="http://www.hokiskateboards.com/wp-content/themes/hokiskateboards-wp/src/images/app/icon.png"
      title="Hoki Skateboards App"
      width="150"
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

    <p className="copyright">
      © 2022, Travis Hoki, All Rights Reserved. Apple and the Apple logo are
      trademarks of Apple Inc. Android, Google Play and the Google Play logo are
      trademarks of Google LLC.
    </p>
  </div>
);

export default App;
