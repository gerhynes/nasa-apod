import React from "react";
import "./Skeleton.css";

export default function Skeleton({ type }) {
  const classes = `Skeleton ${type}`;
  return (
    <div className="Skeleton-wrapper">
      <div className={classes}>
        <div className="shimmer-wrapper">
          <div className="shimmer"></div>
        </div>
      </div>
    </div>
  );
}
