import React from "react";

/**
 * Class representing generic input field component.
 * @param  {function} handleChange      parent onchange function
 * @param  {object} props      properties
 * @returns  {HTMLElement}  input field component
 * @class
 */
const InputField = ({ handleChange, ...props }) => {
  /**
   * parse value and trigger parent function
   * @param {object} e
   */
  const _onChange = e => {
    const val = e.target.value;
    handleChange(val);
  };

  return (
    <div className="field">
      <div className="control">
        <input className="input" type="text" onChange={_onChange} {...props} />
      </div>
    </div>
  );
};

export default InputField;
