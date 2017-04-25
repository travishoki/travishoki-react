import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const ProjectGridItem = ({ project, index}) => {
  return (
      <div className="grid-item">
          <div className="popup">
              <div className="popup-inner">
                  <div className="popup-cont">
                      <img src={project.imgLogo} />
                      <Link to={"/project/"+index} className="btn btn-primary">View</Link>
                  </div>
                 <div className="popup-overlay"></div>
             </div>
         </div>
         <img src={project.imgThumb} className="project-img" />
      </div>
  );
};

ProjectGridItem.propTypes = {
    project: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
};

export default ProjectGridItem;
