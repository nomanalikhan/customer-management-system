import React from "react";
import { Link } from "react-router-dom";
import { any } from "prop-types";

const Button = ({ children, onClick, ...props }) => {
  return onClick ? (
    <button className="button" onClick={onClick} {...props}>
      {children}
    </button>
  ) : (
    <Link className="button" {...props}>
      {children}
    </Link>
  );
};

Button.propTypes = {
  children: any.isRequired
};

export default Button;
