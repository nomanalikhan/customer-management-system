import React from "react";
import moment from "moment";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

const FORMAT = "YYYY-M-D";
const DatePicker = ({ handleChange, format, ...props }) => {
  const _onChange = date => {
    const val = moment(date).format(format);
    handleChange(val);
  };

  return <DayPickerInput onDayChange={_onChange} format={FORMAT} {...props} />;
};

export default DatePicker;
