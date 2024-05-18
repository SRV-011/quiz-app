import { useState, useEffect } from "react";

export default function QuestionTimer({ time, onTimeout, mode }) {
  const [progress, setProgress] = useState(time);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      onTimeout();
    }, time);

    return () => clearTimeout(timeOut);
  }, [time, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((preValue) => preValue - 10);
    }, 10);
    return () => clearInterval(interval);
  }, []);
  return (
    <progress id="question-time" value={progress} max={time} className={mode} />
  );
}
