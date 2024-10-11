import { Image } from "./image";
import React from "react";

export const Timeline = (props) => {
  return (
    <div className="relative font-inter antialiased" id="timeline" >
      <main className="relative min-h-screen flex flex-col justify-center  overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 pt-24">
          <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
            <div className="w-full max-w-3xl mx-auto">
              <div className="-my-6">
                <div className="flex justify-center">
                  <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-5xl ">
                    Timeline
                  </h1>
                </div>

                <div className="relative pl-8 sm:pl-32 py-6 group">
                  <div className="flex flex-col  sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                      06 OCT,2023
                    </time>
                    <div className="text-xl font-bold text-slate-900 ">
                      Registration Begins!
                    </div>
                  </div>

                  <div className="text-slate-500">Ends at midnight 9 Oct,2023</div>
                </div>

                <div className="relative pl-8 sm:pl-32 py-6 group">
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                      10 OCT,2023
                    </time>
                    <div className="text-xl font-bold text-slate-900">
                      Pre Event
                    </div>
                  </div>

                  <div className="text-slate-500">
                    Buying of TechStacks. <br />
                    Ends at midnight of 10th Oct,2023{" "}
                  </div>
                </div>

                <div className="relative pl-8 sm:pl-32 py-6 group">
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                      11 OCT,2023
                    </time>
                    <div className="text-xl font-bold text-slate-900">
                      Proposal Submission
                    </div>
                  </div>

                  <div className="text-slate-500">
                    Ends at Midnight of 11th Oct,2023
                  </div>
                </div>

                <div className="relative pl-8 sm:pl-32 py-6 group">
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                      13 OCT,2023
                    </time>
                    <div className="text-xl font-bold text-slate-900">
                      Hacking Phase
                    </div>
                  </div>

                  <div className="text-slate-500">Ends at 10AM 15th Oct,2023</div>
                </div>

                <div className="relative pl-8 sm:pl-32 py-6 group">
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                      15 Oct, 2023
                    </time>
                    <div className="text-xl font-bold text-slate-900">
                      Offline Interview
                    </div>
                  </div>

                  <div className="text-slate-500">
                    Timings will be shared in Telegram Group.{" "}
                  </div>
                </div>
                <div className="relative pl-8 sm:pl-32 py-6 group">
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                      16 Oct, 2023
                    </time>
                    <div className="text-xl font-bold text-slate-900">Results</div>
                  </div>

                  {/* <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div> */}
                </div>
              </div>
            </div>

            <div className="w-full max-w-3xl mx-auto">
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Timeline;
