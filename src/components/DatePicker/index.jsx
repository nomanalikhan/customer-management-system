import React from "react";
import moment from "moment";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

/** @const {string}
 * @memberOf DatePicker
 */
const FORMAT = "YYYY-M-D";
/**
 * Class representing generic date picker component.
 * @param  {function} handleChange      parent onchange function
 * @param  {string} format      date format
 * @param  {object} props      properties
 * @returns  {HTMLElement}  date picker component
 * @class
 */
const DatePicker = ({ handleChange, format, ...props }) => {
  /**
   * triggers parent onchage function
   * @param {object} date
   */
  const _onChange = date => {
    const val = moment(date).format(format);
    handleChange(val);
  };

  return <DayPickerInput onDayChange={_onChange} format={FORMAT} {...props} />;
};

export default DatePicker;
