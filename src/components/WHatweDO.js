import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const WHatweDO = () => {
  const { ref, inView } = useInView();
  useEffect(() => {
    console.log("view", inView);
  }, [inView]);
  return (
    <div>
      <div className="bg-gray-700 mt-48 w-full h-96 ">
        <div className="lg:flex hidden justify-center items-center h-20">
          {/* <h1 className="font-bold text-5xl text-white text-center">O</h1>
          <h1 className="font-bold text-5xl text-white text-center">U</h1>
          <h1 className="font-bold text-5xl text-white text-center">R</h1> */}
          <h1 className="font-bold text-5xl text-white text-center">C</h1>
          <h1 className="font-bold text-5xl text-white text-center">O</h1>
          <h1 className="font-bold text-5xl text-white text-center">M</h1>
          <h1 className="font-bold text-5xl text-white text-center">P</h1>
          <h1 className="font-bold text-5xl text-white text-center">O</h1>
          <h1 className="font-bold text-5xl text-white text-center">N</h1>
          <h1 className="font-bold text-5xl text-white text-center">E</h1>
          <h1 className="font-bold text-5xl text-white text-center">N</h1>
          <h1 className="font-bold text-5xl text-white text-center">T</h1>
        </div>
        <div
          ref={ref}
          className="lg:flex hidden items-center justify-between ml-4 mr-4 mt-4"
        >
          {inView && (
            <>
              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  //   repeat: Infinity,
                  type: "spring",
                  duration: 3,
                  bounce: 0.3,
                }}
                className="w-80 h-40 bg-slate-500 rounded-2xl flex items-center justify-between  "
              >
                <div className="w-24 h-24 rounded-full bg-red-300 ml-4"></div>
                <div className="w-40 bg-white h-20 mr-4 rounded-2xl"></div>
              </motion.div>
              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  //   repeat: Infinity,
                  type: "spring",
                  duration: 2.5,
                  bounce: 0.3,
                }}
                className="w-80 h-40 bg-slate-500 rounded-2xl flex items-center justify-between  "
              >
                <div className="w-24 h-24 rounded-full bg-red-300 ml-4"></div>
                <div className="w-40 bg-white h-20 mr-4 rounded-2xl"></div>
              </motion.div>
              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  //   repeat: Infinity,
                  type: "spring",
                  duration: 2,
                  bounce: 0.3,
                }}
                className="w-80 h-40 bg-slate-500 rounded-2xl flex items-center justify-between  "
              >
                <div className="w-24 h-24 rounded-full bg-red-300 ml-4"></div>
                <div className="w-40 bg-white h-20 mr-4 rounded-2xl"></div>
              </motion.div>
              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  //   repeat: Infinity,
                  type: "spring",
                  duration: 1.5,
                  bounce: 0.3,
                }}
                className="w-80 h-40 bg-slate-500 rounded-2xl flex items-center justify-between  "
              >
                <div className="w-24 h-24 rounded-full bg-red-300 ml-4"></div>
                <div className="w-40 bg-white h-20 mr-4 rounded-2xl"></div>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WHatweDO;
