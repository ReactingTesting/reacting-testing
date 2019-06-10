import React, { useState } from "react";
import "./Timer.css";
import TimerDisplay from "./TimerDisplay";
import useInterval from "./useInterval";
import "./Info.css";

export default function Timer(props) {
  const [date, setDate] = useState(new Date());
  const targetDate = getTargetDate();

  useInterval(() => {
    setDate(new Date());
  }, 1000);

  const note = new Date(Date.UTC(2019, 12, 31, 23, 0, 0)) - date > 0 ?  "Note: This counts down to the New Year, 2020 (January 1, 00:00 UTC)" : "Happy New Year!";

  const timeLeft = targetDate - date;
  return (
    <>
    <div className="timer-container">
      <div className="info-big-title">
        Time left:
      </div>
      <TimerDisplay timeLeft={timeLeft} />
      <div className="timer-note">{note}</div>
      </div>
    </>
    
  );
}

function getTargetDate() {
  return new Date(Date.UTC(2019, 12, 31, 23, 0, 0));
}