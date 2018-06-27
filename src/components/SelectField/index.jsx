import React from "react";
import _ from "lodash";

/**
 * Class representing generic select field component.
 * @param  {function} handleChange      parent onchange function
 * @param  {array} options      options list in select field
 * @param  {object} props      properties
 * @returns  {HTMLElement}  select field component
 * @class
 */
const SelectField = ({ handleChange, options, ...props }) => {
  /**
   * parse value and trigger parent function
   * @param {object} e
   */
  const _onChange = e => {
    const val = e.target.value;
    handleChange(val);
  };

  /**
   * @const {HTMLElement}
   */
  const optionsList = _.map(options, ({ value, label }) => (
    <option key={value} value={value}>
      {label}
    </option>
  ));

  return (
    <div className="select">
      <select onChange={_onChange} {...props}>
        {optionsList}
      </select>
    </div>
  );
};

export default SelectField;
