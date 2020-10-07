import React, { useState, useEffect } from "react";
import DateSelect from "../components/dateSelect";
import Video from "../components/video";
import axios from "axios";
import { format } from "date-fns";
import Skeleton from "react-loading-skeleton";
import "./astronomy.css";

const printDate = date => date.split("-").reverse().join("-");

export default function Astronomy() {
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
  const [errorMsg, setErrorMsg] = useState("");
  // Format searchDate to NASA's API conventions
  const searchDate = format(startDate, "yyyy-MM-dd");

  useEffect(() => {
    const fetchMedia = async () => {
      try {
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
      } catch (error) {
        setErrorMsg(error.response.data.msg);
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
      ) : (
        <>
          <h2 className="Astronomy__title">
            The image for {printDate(date) || <Skeleton width={100} />} is{" "}
            {title || <Skeleton />}
          </h2>
          {mediaType ? (
            mediaType === "video" ? (
              <Video videoSrcURL={mediaUrl} videoTitle={title} />
            ) : (
              <img
                className="Astronomy__image"
                src={mediaUrl}
                alt={title}
                width="920"
                height="500"
              />
            )
          ) : (
            <Skeleton height={500} />
          )}
          <div className="Astronomy__copy">
            <h3 className="Astronomy__copyright">
              <span>
                {copyright || (
                  <span style={{ height: `1rem`, width: `100px` }}></span>
                )}
              </span>
              {` `}
              <span>{printDate(date) || <Skeleton width={100} />}</span>
            </h3>
            <p className="Astronomy__explanation">
              {explanation || <Skeleton count={10} />}
            </p>
            <p className="Astronomy__explanation">
              All data is drawn from{" "}
              <a href="https://api.nasa.gov/">NASA's APOD API.</a>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
