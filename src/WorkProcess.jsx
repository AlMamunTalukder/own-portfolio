import { FaArrowRight } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { SlPencil } from "react-icons/sl";
import { IoAnalyticsOutline } from "react-icons/io5";
import { PiLaptopLight } from "react-icons/pi";
import { motion } from "framer-motion";
const WorkProcess = () => {
  return (
    <section className="text-gray-100  lg:my-10 shadow-lg  rounded-md bg-black bg-opacity-20">
      <div className="container md:px-6 lg:px-2 lg:py-2 mx-auto md:py-5">
        <div className="grid items-center md:gap-2 lg:gap-4 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-2 lg:my-4 lg:space-y-2 text-center xl:col-span-2 xl:text-left">
            <h2 className="text-4xl font-bold ">Work Process</h2>
            <div className="flex  gap-2 justify-center">
              <p className=" text-gray-400 ">Work with 4 steps</p>{" "}
              <FaArrowRight className="mt-1" />
            </div>
          </div>
          <div className="lg:p-6 lg:col-span-3 ">
            <div className="grid mx-12 lg:ml-2 md:grid-cols-2 my-4 lg:gap-3">
              <div className="grid text-left gap-4 lg:ml-10 mb-5">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="p-3 rounded shadow-md w-60 bg-white bg-opacity-20 text-left h-68">
                    <div className="flex items-center  space-x-4 ">
                      <button className="w-12 h-12 rounded pl-3 mb-3 bg-violet-400 hover:bg-violet-600">
                        <GrNotes className="w-6 h-6" />
                      </button>
                    </div>
                    <h1 className="font-bold">1. Research</h1>
                    <p className="text-sm mt-3 text-justify">
                      When doing to build up a software firstly research on it
                      for finding the main parts of the project. For this, Using
                      Agile Methodology with MoSCoW Prioritize. Research also
                      help to find out the problem and solution of the project.
                    </p>
                  </div>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="p-3 rounded shadow-md w-60 bg-white bg-opacity-20 text-left">
                    <div className="flex items-center  space-x-4 ">
                      <button className="w-12 h-12 rounded pl-3 mb-3 bg-violet-400 hover:bg-violet-600">
                        <SlPencil className="w-6 h-6" />
                      </button>
                    </div>
                    <h1 className="font-bold">2. Design</h1>
                    <p className="text-sm mt-3 text-justify">
                      In this section, Firstly design whole software in figma or
                      related apps. Sometime use the given figma file or
                      readymade templet. Which gives an idea about work and app
                      design.{" "}
                    </p>
                  </div>
                </motion.button>
              </div>

              <div className="grid text-left gap-6 lg:mt-10">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="p-3 rounded shadow-md w-60 bg-white bg-opacity-20 text-left">
                    <div className="flex items-center  space-x-4 ">
                      <button className="w-12 h-12 rounded pl-3 mb-3 bg-violet-400 hover:bg-violet-600">
                        <IoAnalyticsOutline className="w-6 h-6" />
                      </button>
                    </div>
                    <h1 className="font-bold">3. Analyze</h1>
                    <p className="text-sm mt-3 text-justify">
                      In this phase, works with stakeholders, business
                      representative or owner. Works for Requirements Gathering,
                      Problem Definition, Feasibility Study, Risk Analysis, Data
                      Modeling, Functional and Non-functional Requirements
                      Definition.{" "}
                    </p>
                  </div>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="p-3 rounded shadow-md w-60   pb-9 bg-white bg-opacity-20 text-left">
                    <div className="flex items-center  space-x-4 ">
                      <button className="w-12 h-12 rounded pl-3 mb-3 bg-violet-400 hover:bg-violet-600">
                        <PiLaptopLight className="w-6 h-6" />
                      </button>
                    </div>
                    <h1 className="font-bold">4. Launch</h1>
                    <p className="text-sm mt-3 text-justify">
                      When analyzeing done, the development work go in full
                      swing with MoSCoW Prioritization and finally the main
                      product launch.{" "}
                    </p>
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
