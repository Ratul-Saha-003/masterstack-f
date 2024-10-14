import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTimer } from "../../contexts/timerContext";
import { useAuth } from "../../contexts/usercontext";

export const Header = (props) => {
  const {handleStartClick} = useTimer();
  const {user} = useAuth();
  //console.log(Object.keys(user).length)
  return (
    <div>
      <div className="relative isolate overflow-hidden h-[110vh] md:h-[99vh] bg-gray-900 py-24 sm:py-32">
        <img
          src="https://res.cloudinary.com/dedg75ktl/image/upload/v1696454303/fihbyb52lybjtxncuj6q.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-100">
            <h2 className="text-5xl font-bold text-center tracking-tight text-white sm:text-12xl">
              Innovate, Collaborate, Create.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 text-center">
              Introducing Masterstack 3.0: An epic hackathon by Concetto,
              pushing tech boundaries and fostering creativity. Join global
              innovators to tackle pressing challenges and turn ideas into
              reality. Let's revolutionize together! 🚀🌐 #Masterstack3.0
              #InnovationUnleashed
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="flex justify-center">
          <div className="max-w-2xl">
            <Link to="/divisionSelect">
              <button className="bg-green-500 hover:bg-blue-700 text-white text-lg md:text-xl xl:text-2xl tracking-wide uppercase font-bold py-2 px-4 rounded disabled:opacity-70 disabled:hover:bg-green-500"  onClick={handleStartClick} disabled={user.selected}>
                Start
              </button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center mt-5 md:mt-14">
          <button
            className="bg-indigo-700 hover:bg-blue-800 flex flex-row-reverse items-center gap-4 text-white font-bold text-lg xl:text-3xl py-3 px-5 rounded-md"
            onClick={() => (window.location.href = "https://t.me/+lkEAZ8De2AFkMDY1")}
          >
            Join Telegram Group
            <img
              src="https://res.cloudinary.com/dedg75ktl/image/upload/v1696615973/yncz8qiwcsahuqsqbh7g.svg"
              className="h-8 lg:h-10"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};
