import React from 'react';
import PropTypes from 'prop-types';

const ListSection = ({ title, list }) => {
    const midNum = Math.ceil(list.length/2);
    const listA = list.slice(0, midNum);
    const listB = list.splice(midNum, list.length);
  return (
      <section className="primary list-section">
          <h3>{title}</h3>
          <div className="boxed boxed-md">
              <div className="row">
                  <div className="col-sm-6">
                      <ul>
                        {listA.map((item, index)=>{
                            return (
                                <li key={index}>{item}</li>
                            );
                        })}
                      </ul>
                  </div>
                  <div className="col-sm-6">
                      <ul>
                      {listB.map((item, index)=>{
                          return (
                              <li key={index}>{item}</li>
                          );
                      })}
                      </ul>
                  </div>
              </div>
          </div>
      </section>
  );
};

ListSection.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired
};

export default ListSection;
