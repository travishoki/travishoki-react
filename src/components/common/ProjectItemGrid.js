import React, { PropTypes } from 'react';

const ProjectGridItem = ({ project }) => {
  return (
      <div className="grid-item">
          <div className="popup">
              <div className="popup-inner">
                  <div className="popup-cont">
                      <img src={project.imgLogo} />
                      <button className="btn btn-primary">View</button>
                  </div>
                 <div className="popup-overlay"></div>
             </div>
         </div>
         <img src={project.imgThumb} className="project-img" />
      </div>
  );
};

ProjectGridItem.propTypes = {
    project: PropTypes.array.isRequired
};

export default ProjectGridItem;
