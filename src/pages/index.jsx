import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
// import { Features } from "./components/features";
import { About } from "./components/about";
import { Prizes } from "./components/prizes";
import { Timeline } from "./components/timeline";
import { Rules } from "./components/rules";
import { Workflow } from "./components/Workflow";
import { Contact } from "./components/contact";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import Countdown from "react-countdown";
// import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  // const initialTime = 10; // 10 minutes in seconds
  // const [timeLeft, setTimeLeft] = useState(localStorage.getItem('time')?Number(localStorage.getItem('time')):initialTime);
  // const [isRunning, setIsRunning] = useState(localStorage.getItem('time')?true:false);

  // useEffect(() => {
  //   let interval;

  //   if (isRunning) {
  //     interval = setInterval(() => {
  //       if (timeLeft > 0) {
  //         setTimeLeft((prevTime) => prevTime - 1);
  //       } else {
  //         clearInterval(interval);
  //         setIsRunning(false);
  //       }
  //     }, 1000);
  //   }

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [isRunning, timeLeft]);

  // useEffect(()=>{
  //   localStorage.setItem('time', JSON.stringify(timeLeft))
  // },[timeLeft])

  // const handleStartClick = () => {
  //   if (!isRunning) {
  //     setIsRunning(true);
  //   }
  // };

  // const handlePauseClick = () => {
  //   setIsRunning(false);
  //   localStorage.removeItem('time');
  // }; 

  // const formatTime = (seconds) => {
  //   const minutes = Math.floor(seconds / 60);
  //   const remainingSeconds = seconds % 60;
  //   return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  // };
  return (
    <div>
     
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Prizes data={landingPageData.Prizes} />
      <Timeline data={landingPageData.Timeline} />
      <Rules data={landingPageData.Rules} />
      <Workflow data={landingPageData.Workflow} />
      <Contact data={landingPageData.Contact} />
      {/* <p>Time Left: {formatTime(timeLeft)}</p>
      <button onClick={handleStartClick} disabled={isRunning}>
        Start Timer
      </button>
      <button onClick={handlePauseClick}>Pause Timer</button> */}
    </div>
  );
};

export default Home;
