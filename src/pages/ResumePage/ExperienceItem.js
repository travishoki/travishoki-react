import React from "react";
import PropTypes from "prop-types";
import TechList from "./TechList";

const ExperienceItem = ({
  dateEnd,
  dateStart,
  img,
  position,
  tasks,
  techs,
  title,
}) => (
  <li className="staggered-item">
    <div className="image">
      <img src={img} />
    </div>

    <div className="text">
      <h3>{title}</h3>
      <div className="sub-line">
        <h4>{position}</h4>
        <p className="date">
          {dateStart} - {dateEnd}
        </p>
      </div>

      <ul className="bulleted">
        {tasks.map((task, index) => (
          <li key={index} className="bulleted-item">
            {task}
          </li>
        ))}
      </ul>

      <TechList techs={techs} />
    </div>
  </li>
);

ExperienceItem.propTypes = {
  dateEnd: PropTypes.string,
  dateStart: PropTypes.string,
  img: PropTypes.string,
  position: PropTypes.string,
  tasks: PropTypes.array,
  techs: PropTypes.array,
  title: PropTypes.string,
};

export default ExperienceItem;
