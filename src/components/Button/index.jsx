import React from "react";
import { Link } from "react-router-dom";
import { any } from "prop-types";

/**
 * Class representing generic button component.
 * @param  {function} onClick      parent onchange function
 * @param  {*} children      parent onchange function
 * @param  {object} props      properties
 * @returns  {HTMLElement}  input field component
 * @class
 */
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
