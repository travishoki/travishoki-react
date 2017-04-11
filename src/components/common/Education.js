import React, {PropTypes} from 'react';

const img_uvu = require('../../../images/home/uvu.png');

const Education = () => {
  return (
      <section className="white center education">
          <h3>Utah Valley University</h3>
          <img className="center" src={img_uvu}/>
          <p>Digital Media Major</p>
          <p className="degree">Bachelor of Science</p>
          <p>Internet Technology Emphasis</p>
      </section>
  );
};

export default Education;
