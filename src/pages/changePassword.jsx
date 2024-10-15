import { useState } from "react";
import { changePassword, login } from "../services/apis";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/usercontext";
import BackImg from '../assets/stars.jpg'
import CircularProgress from '@mui/material/CircularProgress';

const ChangePass = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [data, setData] = useState({
    mail: "",
    oldPassword: "",
    newPassword: "",
  });
  const [disable, setDisable] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(data);
    try {
      setDisable(true)
      const res = await changePassword(user._id, data);
      // console.log(res);
      if (res.data.message=="successfully updated password") {
        // setUser(res.data.user);
        alert("Successful Password Change");
        setTimeout(() => {
          navigate("/");
        }, 500);
      } else {
        alert("Incorrect mail or password");
      }
      setDisable(false)
    } catch (err) {
      console.log(err);
      setDisable(false)
      alert("Something went wrong..")
    }
  };
  return (
    <>
      <section class=" relative">
        <img src={BackImg} className="w-screen h-screen object-cover object-center absolute top-0 -z-30" alt="" />
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen pt-32 md:pt-0 lg:py-0">
          <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-200/10 backdrop-blur-sm border-gray-700 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-gray-100">
                Change Your Password
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    for="mail"
                    className="block mb-2 text-sm font-medium text-gray-100"
                  >
                    Team Leader Email
                  </label>
                  <input
                    type="email"
                    name="mail"
                    onChange={(e) => handleChange(e)}
                    className="border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="OldPassword"
                    className="block mb-2 text-sm font-medium text-gray-100"
                  >
                    Old Password
                  </label>
                  <input
                    type="password"
                    name="oldPassword"
                    onChange={(e) => handleChange(e)}
                    className="border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-100"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    placeholder="••••••••"
                    onChange={(e) => handleChange(e)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={disable}
                  className=" w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:opacity-25"
                >
                  {disable? <CircularProgress/> : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChangePass;
