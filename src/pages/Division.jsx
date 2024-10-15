import { useEffect, useState } from "react";
import Img1 from "../assets/casey-horner-UJewvfX8SoY-unsplash.jpg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Navigate, useNavigate } from "react-router-dom";

const Division = () => {
  const navigate = useNavigate();
  const [divisions, setDivisions] = useState([]);
  const handleSelection = (value) => {
    if (divisions.includes(value)) {
      const newDivisions = divisions.filter((item) => {
        return item != value;
      });
      // console.log(newDivisions);
      setDivisions(newDivisions);
    } else {
      // console.log([...divisions, value]);
      setDivisions([...divisions, value]);
    }
  };

  const handleNext = () => {
    if (divisions.length < 2) {
      alert("Choose atleast 2 divisions..");
    } else {
      // console.log(divisions);
      navigate("/techStack", { state: divisions });
    }
  };

  useEffect(()=>{
    localStorage.removeItem('techStacks')
    localStorage.removeItem('credits')
  },[])
  return (
    <>
      <div className="">
        <img
          src={Img1}
          alt=""
          className="h-screen w-screen object-cover relative -z-10"
        />

        <div className="absolute top-0 left-0 h-[95vh] w-screen flex justify-center items-center">
          <button
            className="absolute bottom-0 right-5 text-gray-200 font-semibold text-lg flex items-center border p-2 rounded-md border-gray-200/40 active:bg-gray-200/20 hover:border-gray-200/60"
            onClick={() => handleNext()}
          >
            NEXT
            <KeyboardArrowRightIcon />
          </button>
          <div>
            <div className="backdrop-blur-sm py-8 px-12 shadow-sm bg-gray-300/10 shadow-gray-700 rounded-xl flex flex-col gap-2 -mt-16">
              <div className="text-3xl text-gray-200 font-bold uppercase tracking-wider text-center">
                Choose your divisions
              </div>
              <div className="border-2 h-px border-gray-300 w-2/3 mx-auto mb-5"></div>
              <div className="text-gray-900 flex flex-col gap-2 font-semibold tracking-wide">
                <div
                  className={`px-5 py-3 rounded-lg  text-center border-2 opacity-90 text-lg  border-blue-200/30 hover:opacity-100 hover:bg-blue-900 hover:text-gray-200 transition-all duration-75 active:opacity-70 ${
                    divisions.includes("web") ? `bg-blue-900 text-gray-200` : ``
                  }`}
                  onClick={() => handleSelection("web")}
                >
                  WEB DEVELOPEMENT
                </div>
                <div
                  className={`px-5 py-3 rounded-lg  text-center border-2 opacity-90 text-lg  border-blue-200/30 hover:opacity-100 hover:bg-blue-800 hover:text-gray-200 transition-all duration-75 active:opacity-70 ${
                    divisions.includes("app") ? `bg-blue-900 text-gray-200` : ``
                  }`}
                  onClick={() => handleSelection("app")}
                >
                  APP DEVELOPEMENT
                </div>
                <div
                  className={`px-5 py-3 rounded-lg  text-center border-2 opacity-90 text-lg  border-blue-200/30 hover:opacity-100 hover:bg-blue-900 hover:text-gray-200 transition-all duration-75 active:opacity-70 ${divisions.includes('ml')?`bg-blue-900 text-gray-200`:``}`}
                  onClick={() => handleSelection("ml")}
                >
                  MACHINE LEARNING
                </div>
                <div
                  className={`px-5 py-3 rounded-lg  text-center border-2 opacity-90 text-lg  border-blue-200/30 hover:opacity-100 hover:bg-blue-900 hover:text-gray-200 transition-all duration-75 active:opacity-70 ${divisions.includes('blockchain')?`bg-blue-900 text-gray-200`:``}`}
                  onClick={() => handleSelection("blockchain")}
                >
                  BLOCKCHAIN
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Division;
