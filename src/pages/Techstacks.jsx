import { useLocation, useNavigate } from "react-router-dom";
import Img1 from "../assets/vincenzo-malagoli-flfhAlEwDq4-unsplash.jpg";
import { useState } from "react";
import { web } from "../data/web";
import {app} from '../data/app'
import {ml} from '../data/ml'
import {blockchain} from '../data/blockchain'
import { setTechStacks } from "../services/apis";
import { useAuth } from "../contexts/usercontext";
import { useTimer } from "../contexts/timerContext";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CircularProgress from '@mui/material/CircularProgress';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 370,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  py: 4,
  px: 4,
  borderRadius: 2,
};

const TechStacks = () => {
  const location = useLocation();
  const divisions = location.state;
  // const divisions = ['web','app','blockchain',]
  const { user } = useAuth();
  const [disable, setDisable] = useState(false)
  const { timeLeft, setTimeLeft } = useTimer();
  const navigate = useNavigate();
  const [credits, setCredits] = useState(
    localStorage.getItem("credits") ? localStorage.getItem("credits") : 100000
  );
  const [selectedStack, setSelectedStack] = useState(
    localStorage.getItem("techStacks")
      ? JSON.parse(localStorage.getItem("techStacks"))
      : {
          web: [],
          app: [],
          ml: [],
          blockchain: [],
        }
  );
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = (div, tech) => {
    if (selectedStack[div].includes(tech.name)) {
      const newStacks = selectedStack[div].filter((item) => {
        return item != tech.name;
      });
      // console.log(tech.price);
      // console.log(newStacks);
      setSelectedStack({ ...selectedStack, [div]: newStacks });
      localStorage.setItem(
        "techStacks",
        JSON.stringify({ ...selectedStack, [div]: newStacks })
      );
      setCredits(credits + Number(tech.price));
      let newCredits = credits + Number(tech.price);
      localStorage.setItem("credits", newCredits);
    } else {
      if (credits - tech.price >= 0) {
        const newStack = [...selectedStack[div], tech.name];
        // console.log(newStack);
        // console.log(tech.price);
        setSelectedStack({ ...selectedStack, [div]: newStack });
        localStorage.setItem(
          "techStacks",
          JSON.stringify({ ...selectedStack, [div]: newStack })
        );
        setCredits(credits - Number(tech.price));
        let newCredits = credits - Number(tech.price);
        localStorage.setItem("credits", newCredits);
      } else {
        alert("Not enough credits");
      }
    }
  };

  const handleSubmit = async () => {
    try {
      setDisable(true)
      // console.log(selectedStack);
      for(let i in divisions){
        if(selectedStack[divisions[i]].length==0){
          alert("Please choose atleast one tech stack of the selected division")
          setDisable(false)
          return
        }
      }
      const res = await setTechStacks(user._id, { techStack: selectedStack });
      console.log(res);
      if (res.data.status == 200) {
        alert("submitted successfully");
        setTimeLeft(0);
        setDisable(false)
        setTimeout(() => {
          navigate("/profile");
        }, 500);
      }
      setDisable(false)
    } catch (err) {
      console.log(err);
      if(err.response.status==300){
        alert("Tech stack already selected !!")
        setTimeLeft(0);
        setDisable(false)
        setTimeout(() => {
          navigate("/profile");
        }, 500);
      }
    }
  };
  return (
    <>
      <img
        src={Img1}
        alt=""
        className="h-screen w-screen object-cover object-center fixed -z-10"
      />
      <div className="p-5 mt-16">
        <div className="flex flex-col md:flex-row justify-between text-gray-200 gap-2">
          <div className="flex gap-2 items-center ">
            <div className="uppercase text-sm md:text-xl tracking-wide font-semibold">
              selected divisions:
            </div>{" "}
            {divisions.map((item) => {
              return (
                <div className="px-3 py-1 text-sm ms:text-base uppercase rounded-xl text-gray-100/90 border-gray-300/20 border bg-blue-100/20">
                  {item}
                </div>
              );
            })}
          </div>
          <div className="flex gap-2 items-center">
            <div className="uppercase font-medium tracking-wide text-sm md:text-base">Credits :</div>{" "}
            <div className="px-3 py-1 uppercase rounded-xl text-gray-100/90 border-gray-300/20 border bg-blue-100/20">
              ₹{credits}
            </div>
          </div>
        </div>
        <div className="mx-1 md:mx-5 mt-3">
        {timeLeft>0 && divisions.includes("web") && (
          <>
            <div className="text-lg md:text-xl font-semibold text-gray-300">
              WEB TECH STACKS -
              <div className="h-px border-2 mt-2 border-gray-300/70 w-32"></div>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-y-8 mt-3">
              {web.map((item, i) => {
                return (
                  <div
                    className={`p-2 w-[27vw] max-w-[210px] max-h-[290px] rounded-lg shadow-md backdrop-blur-md flex flex-col gap-2 items-center text-gray-100 opacity-80 hover:opacity-100 border-2 border-blue-200/5 hover:border-blue-300/25 transition-all duration-100 active:opacity-60 col-span-1 ${
                      selectedStack["web"].includes(item.name)
                        ? `opacity-100 border-2 border-blue-300/25 bg-blue-200/10 backdrop-blur-lg`
                        : ``
                    }`}
                    onClick={() => handleClick("web", item)}
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="object-cover object-center h-[72%] rounded-md"
                    />
                    <div className="md:text-xl font-semibold md:font-bold tracking-wide">
                      {item.name}
                    </div>
                    <div className="flex flex-col md:flex-row text-center justify-evenly p-2 border rounded-md border-blue-200/20 w-full">
                      <div className="text-xs md:text-base">₹{item.price}</div>
                      <div className="text-xs md:text-base">{item.points}<span className="text-xs md:text-sm"> pts</span></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
        </div>
{timeLeft>0 && divisions.includes("web") && <div className="w-full h-px border my-3 border-gray-300/20"></div>}
        <div className="mx-1 md:mx-5 mt-4">
        {timeLeft>0 && divisions.includes("app") && (
          <>
            <div className="text-lg md:text-xl font-semibold text-gray-300">
              APP TECH STACKS -
              <div className="h-px border-2 mt-2 border-gray-300/70 w-32"></div>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-y-8 mt-3">
              {app.map((item, i) => {
                return (
                  <div
                    className={`p-2 w-[27vw] max-w-[210px] max-h-[290px] rounded-lg shadow-md backdrop-blur-md flex flex-col gap-2 items-center text-gray-100 opacity-80 hover:opacity-100 border-2 border-blue-200/5 hover:border-blue-300/25 transition-all duration-100 active:opacity-60 col-span-1 ${
                      selectedStack["app"].includes(item.name)
                        ? `opacity-100 border-2 border-blue-300/25 bg-blue-200/10 backdrop-blur-lg`
                        : ``
                    }`}
                    onClick={() => handleClick("app", item)}
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="object-cover object-center h-[72%] rounded-md"
                    />
                    <div className="md:text-xl font-semibold md:font-bold tracking-wide">
                      {item.name}
                    </div>
                    <div className="flex flex-col md:flex-row text-center justify-evenly p-2 border rounded-md border-blue-200/20 w-full">
                      <div className="text-xs md:text-base">₹{item.price}</div>
                      <div className="text-xs md:text-base">{item.points}<span className="text-xs md:text-sm"> pts</span></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
        </div>
        {timeLeft>0 && divisions.includes("app") && <div className="w-full h-px border my-3 border-gray-300/20"></div>}
        <div className="mx-1 md:mx-5 mt-4">
        {timeLeft>0 && divisions.includes("ml") && (
          <>
            <div className="text-lg md:text-xl font-semibold text-gray-300">
              ML TECH STACKS -
              <div className="h-px border-2 mt-2 border-gray-300/70 w-32"></div>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-y-8 mt-3">
              {ml.map((item, i) => {
                return (
                  <div
                    className={`p-2 w-[27vw] max-w-[210px] max-h-[290px] rounded-lg shadow-md backdrop-blur-md flex flex-col gap-2 items-center text-gray-100 opacity-80 hover:opacity-100 border-2 border-blue-200/5 hover:border-blue-300/25 transition-all duration-100 active:opacity-60 col-span-1 ${
                      selectedStack["ml"].includes(item.name)
                        ? `opacity-100 border-2 border-blue-300/25 bg-blue-200/10 backdrop-blur-lg`
                        : ``
                    }`}
                    onClick={() => handleClick("ml", item)}
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="object-cover object-center h-[72%] rounded-md"
                    />
                    <div className="md:text-xl font-semibold md:font-bold tracking-wide">
                      {item.name}
                    </div>
                    <div className="flex flex-col md:flex-row text-center justify-evenly p-2 border rounded-md border-blue-200/20 w-full">
                      <div className="text-xs md:text-base">₹{item.price}</div>
                      <div className="text-xs md:text-base">{item.points}<span className="text-xs md:text-sm"> pts</span></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
        </div>
        {timeLeft>0 && divisions.includes("ml") && <div className="w-full h-px border my-3 border-gray-300/20"></div>}
        <div className="mx-1 md:mx-5 mt-4">
        {timeLeft>0 && divisions.includes("blockchain") && (
          <>
            <div className="text-lg md:text-xl font-semibold text-gray-300">
              BLOCKCHAIN TECH STACKS -
              <div className="h-px border-2 mt-2 border-gray-300/70 w-32"></div>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-y-8 mt-3">
              {blockchain.map((item, i) => {
                return (
                  <div
                    className={`p-2 w-[27vw] max-w-[210px] max-h-[290px] rounded-lg shadow-md backdrop-blur-md flex flex-col gap-2 items-center text-gray-100 opacity-80 hover:opacity-100 border-2 border-blue-200/5 hover:border-blue-300/25 transition-all duration-100 active:opacity-60 col-span-1 ${
                      selectedStack["blockchain"].includes(item.name)
                        ? `opacity-100 border-2 border-blue-300/25 bg-blue-200/10 backdrop-blur-lg`
                        : ``
                    }`}
                    onClick={() => handleClick("blockchain", item)}
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="object-cover object-center h-[72%] rounded-md"
                    />
                    <div className="md:text-xl font-semibold md:font-bold tracking-wide">
                      {item.name}
                    </div>
                    <div className="flex flex-col md:flex-row text-center justify-evenly p-2 border rounded-md border-blue-200/20 w-full">
                      <div className="text-xs md:text-base">₹{item.price}</div>
                      <div className="text-xs md:text-base">{item.points}<span className="text-xs md:text-sm"> pts</span></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
        </div>
        {timeLeft === 0 && (
          <div className="flex w-full h-[60vh] justify-center items-center">
            <div className="text-white w-[80vw] max-w-[500px] flex flex-col items-center bg-gray-400/20 border border-gray-400/50 rounded-lg backdrop-blur-sm p-5">
              <div className="text-center uppercase text-2xl font-bold tracking-wide">
                Time UP !!
              </div>
              <div className="h-px border-2 border-gray-300 w-1/2 mt-2"></div>
              <div className="mt-2 text-gray-300/90">
                {Object.keys(selectedStack).map((item, i) => {
                  return (
                    <>
                      <div className="flex gap-1 mt-2 items-center uppercase flex-wrap">
                        {item}:
                        {selectedStack[item].map((stacks, j) => {
                          // console.log(stacks);
                          return (
                            <>
                              <span className="px-3 py-1 bg-green-500/80 text-gray-100 rounded-xl">
                                {stacks}
                              </span>
                            </>
                          );
                        })}
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="mt-5 text-lg text-gray-100 tracking-wide text-center">
                Please click the submit button to proceed...
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-center mt-5">
          <button
            className="text-gray-100 bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-md text-xl md:mr-10 px-5 py-3 font-semibold"
            onClick={handleOpen}
          >
            Submit
          </button>
        </div>
      </div>
      {/* modal */}
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="text-center text-lg font-semibold">
            Are you sure you want to submit ?
          </div>
          <div className="flex flex-row-reverse w-full justify-between mt-5">
            <Button
              variant="contained"
              color="success"
              disabled={disable}
              onClick={() => handleSubmit()}
            >
              {disable? <CircularProgress/> : 'Submit'}
            </Button>
            <Button variant="outlined" color="error" onClick={handleClose}>
              Back
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default TechStacks;
