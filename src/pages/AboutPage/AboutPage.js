import React from "react";

import AboutPageData from "./AboutPage.data";

const AboutPage = () => (
  <div id="container" className="about">
    <div className="boxed boxed-md">
      <h1>About Me</h1>

      <ul className="staggered">
        {AboutPageData.map((item, index) => (
          <li key={index} className="staggered-item">
            <div className="image">
              <img src={item.img} />
            </div>
            <div className="text">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default AboutPage;
