import { createContext, useContext, useEffect, useState } from "react";

const TimerContext = createContext();

export const useTimer = () => {
  return useContext(TimerContext);
};

export const TimerState = ({ children }) => {
  const initialTime = 600; // 10 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(
    localStorage.getItem("time")
      ? Number(localStorage.getItem("time"))
      : initialTime
  );
  const [isRunning, setIsRunning] = useState(
    localStorage.getItem("time") && localStorage.getItem("time")<initialTime? true : false
  );

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (timeLeft > 0) {
          setTimeLeft((prevTime) => prevTime - 1);
        } else {
          clearInterval(interval);
          setIsRunning(false);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, timeLeft]);

  useEffect(() => {
    localStorage.setItem("time", timeLeft);
  }, [timeLeft]);

  const handleStartClick = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const value = {
    formatTime,
    handleStartClick,
    timeLeft,
    setTimeLeft,
    initialTime
  }
  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
)
};
