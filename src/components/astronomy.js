import React, { useState, useEffect } from "react"
import DateSelect from "../components/dateSelect"
import Video from "../components/video"
import axios from "axios"
import { format } from "date-fns"
import Skeleton from "react-loading-skeleton"
import "./astronomy.css"

export default function Astronomy() {
  const [copyright, setCopyright] = useState("")
  const [date, setDate] = useState("")
  const [explanation, setExplanation] = useState("")
  const [title, setTitle] = useState("")
  const [mediaUrl, setMediaUrl] = useState("")
  const [mediaType, setMediaType] = useState("")
  const [startDate, setStartDate] = useState(new Date())
  const [errorMsg, setErrorMsg] = useState("")
  const searchDate = format(startDate, "yyyy-MM-dd")

  const printDate = date => date.split("-").reverse().join("-")

  useEffect(() => {
    const fetchMedia = async () => {
      try {
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
      } catch (error) {
        setErrorMsg(error.response.data.msg)
      }
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

  if (errorMsg) {
    return (
      <div>
        <h1>Sorry. {errorMsg}</h1>
        <a href="/">
          <h2>Try again?</h2>
        </a>
      </div>
    )
  } else {
    return (
      <div className="Astronomy">
        <DateSelect
          startDate={startDate}
          selectDate={newDate => setStartDate(newDate)}
        />
        <h2>
          The image for {printDate(date) || <Skeleton width={100} />} is{" "}
          {title || <Skeleton />}
        </h2>
        {mediaType ? (
          mediaType === "video" ? (
            <Video videoSrcURL={mediaUrl} videoTitle={title} />
          ) : (
            <img src={mediaUrl} alt={title} width="920" height="500" />
          )
        ) : (
          <Skeleton height={500} />
        )}
        <h3 className="Astronomy-copyright">
          <span>{copyright || <Skeleton width={100} />}</span>
          {` `}
          <span>{printDate(date) || <Skeleton width={100} />}</span>
        </h3>
        <p className="Astronomy-explanation">
          {explanation || <Skeleton count={10} />}
        </p>
      </div>
    )
  }
}
