import React from 'react';
import PropTypes from 'prop-types';

const SocialIcons = () => {
  return (
      <ul className="social-icons">
          <li>
              <a href="https://github.com/travishoki/" target="_blank" title="Travis's Github">
                  <i className="circ-sm fa fa-git"></i>
              </a>
          </li>
          <li>
              <a href="https://www.linkedin.com/in/travishoki" target="_blank" title="Travis's Linked In">
                  <i className="circ-sm fa fa-linkedin"></i>
              </a>
          </li>
          <li>
              <a href="http://codepen.io/travis-hoki/" target="_blank" title="Travis's Codepen">
                  <i className="circ-sm fa fa-codepen"></i>
              </a>
          </li>
      </ul>
  );
};

export default SocialIcons;
