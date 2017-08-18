import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const ProjectGridItem = ({ project}) => {
  return (
      <div className="grid-item">
          <div className="popup">
              <Link to={"/project/"+project.key}>
                  <div className="popup-inner">
                      <div className="popup-cont">
                          <img src={project.imgLogo} />
                          <p className="project-link">View</p>
                      </div>
                     <div className="popup-overlay"></div>
                 </div>
             </Link>
         </div>
         <img src={project.imgThumb} className="project-img" />
      </div>
  );
};

ProjectGridItem.propTypes = {
    project: PropTypes.object.isRequired
};

export default ProjectGridItem;
