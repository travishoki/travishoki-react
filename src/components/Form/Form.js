import React from "react";
import PropTypes from "prop-types";

const Form = ({ children, onSubmit }) => {
  const submit = (event) => {
    event.preventDefault();

    onSubmit(event);
  };

  return <form onSubmit={submit}>{children}</form>;
};

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
};

export default Form;
