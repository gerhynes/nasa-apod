import React from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";
import "./dateSelect.css";

export default function DateSelect({ startDate, selectDate }) {
  return (
    <div className="DateSelect">
      <h2 className="DateSelect__title">Choose a date</h2>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        onChange={date => selectDate(date)}
        customInput={<DateSelectInput />}
      />
    </div>
  );
}

const DateSelectInput = ({ value, onClick }) => (
  <button className="DateSelect__input-btn" onClick={onClick}>
    {value}
  </button>
);

DateSelect.propTypes = {
  startDate: PropTypes.string,
  selectDate: PropTypes.func,
};

DateSelect.defaultProps = {
  startDate: ``,
  selectDate: ``,
};

DateSelectInput.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

DateSelectInput.defaultProps = {
  value: ``,
};
