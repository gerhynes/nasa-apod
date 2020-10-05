import React from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "./dateSelect.css"

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
  )
}

const DateSelectInput = ({ value, onClick }) => (
  <button className="DateSelect-input-btn" onClick={onClick}>
    {value}
  </button>
)
