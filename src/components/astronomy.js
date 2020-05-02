import React, { useState, useEffect } from "react"
import axios from "axios"

export default function Astronomy() {
  const [copyright, setCopyright] = useState("")
  const [date, setDate] = useState("")
  const [explanation, setExplanation] = useState("")
  const [title, setTitle] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  useEffect(() => {
    const fetchImage = async () => {
      const result = await axios.get(
        "https://api.nasa.gov/planetary/apod?api_key=TrOS4UtSVKBOtq0fzZL5PBrjUdtB4oDbgt5DFDdc"
      )
      console.log(result.data)
      const { copyright, date, explanation, title, url } = result.data

      setCopyright(copyright)
      setDate(date)
      setExplanation(explanation)
      setTitle(title)
      setImageUrl(url)
    }
    fetchImage()
  }, {})

  return (
    <div className="Astronomy">
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} />
      <h3>
        <span>{copyright}</span>
        {` `}
        <span>{date}</span>
      </h3>
      <p>{explanation}</p>
    </div>
  )
}
