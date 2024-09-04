import React from "react";

import ExperienceItem from "./ExperienceItem";
import { RESUME_DATA } from "./ResumePage.data";

const Experience = () => (
  <div className="boxed boxed-lg">
    <h2>Experience</h2>

    <ul className="staggered">
      {RESUME_DATA.map((job, index) => (
        <ExperienceItem key={index} {...job} />
      ))}
    </ul>
  </div>
);

export default Experience;
