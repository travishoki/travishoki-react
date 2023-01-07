import React from "react";
import PropTypes from "prop-types";

const Title = ({ title }) => <h4>{title}</h4>;

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
