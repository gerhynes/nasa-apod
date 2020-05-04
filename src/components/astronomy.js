import React, { useState, useEffect } from "react"
import DateSelect from "../components/dateSelect"
import Video from "../components/video"
import axios from "axios"
import { format } from "date-fns"

export default function Astronomy() {
  const [copyright, setCopyright] = useState("")
  const [date, setDate] = useState("")
  const [explanation, setExplanation] = useState("")
  const [title, setTitle] = useState("")
  const [mediaUrl, setMediaUrl] = useState("")
  const [mediaType, setMediaType] = useState("")
  const [startDate, setStartDate] = useState(new Date())
  const searchDate = format(startDate, "yyyy-MM-dd")

  const printDate = date => date.split("-").reverse().join("-")

  useEffect(() => {
    const fetchMedia = async () => {
      const result = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=TrOS4UtSVKBOtq0fzZL5PBrjUdtB4oDbgt5DFDdc&date=${searchDate}`
      )
      const {
        copyright,
        date,
        explanation,
        title,
        url,
        media_type,
      } = result.data

      setCopyright(copyright)
      setDate(date)
      setExplanation(explanation)
      setTitle(title)
      setMediaUrl(url)
      setMediaType(media_type)
    }
    fetchMedia()
  }, [
    copyright,
    date,
    explanation,
    title,
    mediaUrl,
    mediaType,
    startDate,
    searchDate,
  ])

  return (
    <div className="Astronomy">
      <DateSelect
        startDate={startDate}
        selectDate={newDate => setStartDate(newDate)}
      />
      <h2>
        The image for {printDate(date)} is {title}
      </h2>
      {mediaType === "video" ? (
        <Video videoSrcURL={mediaUrl} videoTitle={title} />
      ) : (
        <img src={mediaUrl} alt={title} />
      )}
      <h4>
        <span>{copyright}</span>
        {` `}
        <span>{printDate(date)}</span>
      </h4>
      <p>{explanation}</p>
    </div>
  )
}
