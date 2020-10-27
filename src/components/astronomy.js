import React, { useState, useEffect } from "react";
import DateSelect from "../components/dateSelect";
import Video from "../components/video";
import Skeleton from "../skeletons/Skeleton";
import axios from "axios";
import { format } from "date-fns";
import "./astronomy.css";

const printDate = date => date.split("-").reverse().join("-");

export default function Astronomy() {
  // Data to be returned from NASA API
  const [nasaData, setNasaData] = useState({
    copyright: "",
    date: "",
    explanation: "",
    title: "",
    mediaUrl: "",
    mediaType: "",
  });
  // Set current date
  const [startDate, setStartDate] = useState(new Date());
  // Format searchDate to NASA's API conventions
  const searchDate = format(startDate, "yyyy-MM-dd");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=TrOS4UtSVKBOtq0fzZL5PBrjUdtB4oDbgt5DFDdc&date=${searchDate}`
        );

        const {
          copyright,
          date,
          explanation,
          title,
          url,
          media_type,
        } = response.data;

        setErrorMsg("");
        setNasaData({
          copyright: copyright,
          date: date,
          explanation: explanation,
          title: title,
          mediaUrl: url,
          mediaType: media_type,
        });
        setLoading(false);
      } catch (error) {
        setErrorMsg(error.response.data.msg);
        setLoading(false);
      }
    };
    fetchMedia();
  }, [searchDate]);

  const { copyright, date, explanation, title, mediaUrl, mediaType } = nasaData;

  return (
    <div className="Astronomy">
      <DateSelect
        startDate={startDate}
        selectDate={newDate => setStartDate(newDate)}
      />
      {errorMsg ? (
        <div>
          <h2 className="Astronomy__error-message">
            Sorry. {errorMsg} Try another date?
          </h2>
        </div>
      ) : null}
      {loading ? (
        <div>
          <Skeleton type="heading" />
          <Skeleton type="media" />
          <Skeleton type="small" />
          <Skeleton type="text" />
          <Skeleton type="text" />
          <Skeleton type="text" />
        </div>
      ) : (
        <div>
          <h2 className="Astronomy__title">
            The image for {printDate(date)} is {title}
          </h2>
          {mediaType === "video" ? (
            <Video videoSrcURL={mediaUrl} videoTitle={title} />
          ) : (
            <img
              className="Astronomy__image"
              src={mediaUrl}
              alt={title}
              width="920"
              height="500"
            />
          )}
          <div className="Astronomy__copy">
            <h3 className="Astronomy__copyright">
              <span>{copyright}</span>
              {` `}
              <span>{printDate(date)}</span>
            </h3>
            <p className="Astronomy__explanation">{explanation}</p>
            <p className="Astronomy__explanation">
              All data is drawn from{" "}
              <a href="https://api.nasa.gov/">NASA's APOD API.</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
