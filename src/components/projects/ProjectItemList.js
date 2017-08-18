import React from 'react';
import PropTypes from 'prop-types';
const images = require.context('../../../images/websites', true);
const logos = require.context('../../../images/clients', true);

const ProjectListItem = ({ project }) => {
  return (
      <div className="list-item">
          <div className="projectHeading">
              <h2>{project.title}</h2>
              <h3>{project.subtitle}</h3>
          </div>
          <div className="row">
              <div className="col-sm-6">
                  <img src={images(`./${project.key}/lg.jpg`)} className="project-img" />
              </div>
              <div className="col-sm-6">
                  <img src={logos(`./${project.company}.jpg`)} className="logo center"/>
                  <p>{project.desc}</p>
                  <p className="list-heading">Contributions</p>
                  <ul>
                      {project.contributions.map((contribution, index)=>{
                          return (
                              <li key={index}>{contribution}</li>
                          );
                      })}
                  </ul>
                  <p className="list-heading">Technologies</p>
                  <ul>
                      {project.techs.map((tech, index)=>{
                          return (
                              <li key={index}>{tech}</li>
                          );
                      })}
                  </ul>
              </div>
          </div>
          {project.live &&
              <a href={project.url} className="btn btn-primary btn-lg" target="_blank">View Live Site</a>
          }
      </div>
  );
};

ProjectListItem.propTypes = {
    project: PropTypes.array.isRequired
};

export default ProjectListItem;
