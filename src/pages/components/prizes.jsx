import React from "react";

export const Prizes = (props) => {
  return (
    <div id="prize">
    <div id="prizes">
      <div className="flex justify-center">
        <h1 className="mb-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-5xl ">Prizes</h1>
      </div>

      <section className="text-gray-600 body-font bg-gray-50 flex justify-center items-center">
        <div className="container px-1 py-1 mx-auto">
          <div className="flex flex-wrap text-center"> {/* Adjusted margin here */}

            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
              <div className="flex items-center justify-between p-4 rounded-lg bg-white shadow-indigo-50 shadow-md">
                <div>
                  <h2 className="text-gray-900 text-lg font-bold">Total Money</h2>
                  <h3 className="mt-2 text-xl font-bold text-green-500 text-left">&#8377;10,000</h3>
                </div>
                <div className="bg-gradient-to-tr from-green-500 to-green-500 w-32 h-32 rounded-full shadow-2xl shadow-green-400 border-white border-dashed border-2 flex justify-center items-center">
                  <div>
                    <h1 className="text-white text-2xl">1st Prize</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
              <div className="flex items-center justify-between p-4 rounded-lg bg-white shadow-indigo-50 shadow-md">
                <div>
                  <h2 className="text-gray-900 text-lg font-bold">Total Money</h2>
                  <h3 className="mt-2 text-xl font-bold text-cyan-500 text-left">&#8377;6,000</h3>
                </div>
                <div className="bg-gradient-to-tr from-cyan-500 to-cyan-400 w-32 h-32 rounded-full shadow-2xl shadow-cyan-400 border-white border-dashed border-2 flex justify-center items-center">
                  <div>
                    <h1 className="text-white text-2xl">2nd Prize</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
              <div className="flex items-center justify-between p-4 rounded-lg bg-white shadow-indigo-50 shadow-md">
                <div>
                  <h2 className="text-gray-900 text-lg font-bold">Total Money</h2>
                  <h3 className="mt-2 text-xl font-bold text-indigo-500 text-left">&#8377;4,000 </h3>
                </div>
                <div className="bg-gradient-to-tr from-indigo-500 to-indigo-400 w-32 h-32 rounded-full shadow-2xl shadow-[#304FFE] border-white border-dashed border-2 flex justify-center items-center">
                  <div>
                    <h1 className="text-white text-2xl">3rd Prize</h1>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
    </div>
  );
};
