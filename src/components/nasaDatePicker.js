import React, { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default function NasaDatePicker() {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <div>
      <h3>Choose a Date</h3>
      <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={startDate}
        onChange={date => setStartDate(date)}
      />
    </div>
  )
}
