import React from "react";
import PropTypes from "prop-types";

const Message = ({ className, isVisible, text }) => {
  if (!isVisible) return null;

  return <p className={`form-message ${className}`}>{text}</p>;
};

Message.propTypes = {
  className: PropTypes.string,
  isVisible: PropTypes.bool,
  text: PropTypes.string,
};

Message.defaultProps = {
  isVisible: false,
};

export default Message;
