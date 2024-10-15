import React, { useState } from "react";
import { useAuth } from "../../contexts/usercontext";
import { Link, useNavigate } from "react-router-dom";
import { useTimer } from "../../contexts/timerContext";
// import GlobalStyle from "./Styles.jsx";

export const Navigation = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const { formatTime, timeLeft, setTimeLeft, initialTime } = useTimer();
  const [open, setOpen] = useState(false);
  const { user, setUser } = useAuth();

  const logout = () => {
    localStorage.clear();
    // setTimeLeft(0)
    if (timeLeft == 0) {
      localStorage.setItem("time", 0);
    }
    setUser({});
    navigate("/");
    alert("Successfully logged out");
  };

  return (
    <header className={`fixed top-0 z-20 flex items-center w-full bg-sky-800 `}>
      <div className="">
        <div className="relative flex items-center justify-between">
          <div className="max-w-full flex px-4 w-80">
            <div className="flex">
              <div className="flex">
                <a href="/" className="block py-3">
                  <h1 className="text-[22px] md:text-xl font-bold uppercase flex items-center mr-6 mt-2">
                    MasterStack{" "}
                    <span className="text-base text-[22px] ml-1">3.0</span>
                  </h1>
                </a>
                <span className="block w-full py-3">
                  <div className="text-[15px] md:text-xl font-bold uppercase flex items-center bg-green-500 rounded-xl px-3 py-2 text-white">
                    {formatTime(timeLeft)}
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between w-full px-4">
            <div>
              <button
                // @click="navbarOpen = !navbarOpen"
                onClick={() => setOpen(!open)}
                // :className="navbarOpen && 'navbarTogglerActive' "
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-0 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[3px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-sky-800 py-2 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="#about"
                  >
                    Description
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="#prize"
                  >
                    Prizes
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="#timeline"
                  >
                    Timeline
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="#rules"
                  >
                    Rules
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="/profile"
                  >
                    Profile
                  </ListItem>
                  {Object.keys(user).length !== 0 ? (
                    <>
                      <ListItem navItemStyles="text-dark hover:text-primary">
                        <button
                          className="md:py-1 text-base font-medium text-white rounded-lg md:px-5 md:hover:bg-opacity-90 md:bg-red-500 disabled:opacity-80 disabled:hover:cursor-not-allowed"
                          onClick={() => logout()}
                          disabled={timeLeft > 0 && timeLeft < initialTime}
                        >
                          Logout
                        </button>
                      </ListItem>
                      <ListItem navItemStyles="text-dark hover:text-primary">
                        <button
                          onClick={() => navigate("/changePassword")}
                          className="md:py-1 text-base font-medium text-white rounded-lg md:px-5 md:hover:bg-opacity-90 md:bg-green-500 md:ml-2 disabled:opacity-80 disabled:hover:cursor-not-allowed"
                          disabled={timeLeft > 0 && timeLeft < initialTime}
                        >
                          Change Password
                        </button>
                      </ListItem>
                    </>
                  ) : (
                    <ListItem
                      navItemStyles="text-dark hover:text-primary"
                      NavLink="/signin"
                    >
                      <button className="md:py-1 text-base font-medium text-white rounded-lg md:px-5 md:hover:bg-opacity-90 md:bg-green-500">
                        Sign in
                      </button>
                    </ListItem>
                  )}
                </ul>
              </nav>
            </div>

            {/* <div className="justify-end hidden pr-16 sm:flex lg:pr-0">
            {Object.keys(user).length!=0 ? (
                <>
                <button
                  className="py-3 text-base font-medium text-white rounded-lg px-7 hover:bg-opacity-90 bg-red-500 disabled:opacity-80 disabled:hover:cursor-not-allowed"
                  onClick={() => logout()}
                  disabled={timeLeft>0 && timeLeft<initialTime}
                >
                  Logout
                </button>
                <button
                onClick={()=>navigate("/changePassword")}
                className="py-3 text-base font-medium text-white rounded-lg px-7 hover:bg-opacity-90 bg-green-500 ml-2 disabled:opacity-80 disabled:hover:cursor-not-allowed"
                disabled={timeLeft>0 && timeLeft<initialTime}
              >
                Change Password
              </button>
                </>
              ) : (
                <>
                <Link
                  to="/signin"
                  className="py-3 text-base font-medium text-white rounded-lg px-7 hover:bg-opacity-90 bg-green-500"
                >
                  Sign in
                </Link>
                
                </>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

const ListItem = ({ children, navItemStyles, NavLink }) => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const { formatTime, timeLeft, initialTime } = useTimer();

  const logout = () => {
    localStorage.clear();
    if (timeLeft === 0) {
      localStorage.setItem("time", 0);
    }
    setUser({});
    navigate("/");
  };

  return (
    <>
      <li>
        {NavLink ? (
          <a
            href={NavLink}
            className={`flex py-2 text-base font-medium lg:ml-12 lg:inline-flex ${navItemStyles}`}
          >
            {children}
          </a>
        ) : (
          <button
            className={`py-2 text-base font-medium rounded-lg px-3 -ml-3 md:ml-8 hover:bg-opacity-90 text-white ${
              navItemStyles || ""
            }`}
            onClick={children === "Logout" ? logout : () => {}}
            disabled={
              children === "Logout" && timeLeft > 0 && timeLeft < initialTime
            }
          >
            {children}
          </button>
        )}
      </li>
    </>
  );
};
