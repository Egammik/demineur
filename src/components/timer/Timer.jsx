import { useEffect, useState } from "react";
import "./timer.css";
import pauseSVG from "@assets/pause.svg"

const Timer = ({isPaused, setIsPaused, end }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;
  
    if (!end && !isPaused) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isPaused, end]);

  const pause = () => {
    setIsPaused((p) => !p);
  };
  
  return (
    <div className="timer">
      <div className="content">
        <div className="digits">
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        </div>
        <div className="digits">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
        </div>
        <div className="digits mili-sec">
          {("0" + ((time / 10) % 100)).slice(-2)}
        </div>
        <div
          className={isPaused ? "digits pause" : "digits pause actif"}
          onClick={pause}
        >
          <img src={pauseSVG} alt="pause" />
        </div>
      </div>
    </div>
  );
};

export default Timer;
