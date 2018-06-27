import React from "react";
import _ from "lodash";

const SelectField = ({ handleChange, options, ...props }) => {
  const _onChange = e => {
    const val = e.target.value;
    handleChange(val);
  };

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
