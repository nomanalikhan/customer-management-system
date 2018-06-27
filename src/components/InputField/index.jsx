import React from "react";

const InputField = ({ handleChange, ...props }) => {
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
