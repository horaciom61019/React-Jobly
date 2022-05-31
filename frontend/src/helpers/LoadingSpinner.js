import React from "react";
import "./LoadingSpinner.css";

/** Loading message used by components that fetch API data. */

function LoadingSpinner() {
    console.debug("Loading ...");
  return (
      <div className="LoadingSpinner">
        Loading ...
      </div>
  );
}

export default LoadingSpinner;