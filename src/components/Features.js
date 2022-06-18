import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Features = () => {
  const { ref, inView } = useInView();
  useEffect(() => {
    console.log("view", inView);
  }, [inView]);
  return (
    <div>
      <div
        // style={{ height: "600px" }}
        className="w-full bg-gray-900 lg:pt-20 h-full flex justify-between "
      >
        {/* <h1 className="text-white text-4xl w-full font-extrabold absolute text-center">
          {" "}
          Hello world

        </h1> */}
        <div
          style={{}}
          ref={ref}
          className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 py-20 place-items-center w-full "
        >
          {inView && (
            <>
              {" "}
              <motion.div
                className="relative bg-red-300 w-40 lg:w-80 lg:h-96 h-40 rounded-2xl"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  // repeat: Infinity,
                  type: "spring",
                  duration: 2,
                  bounce: 0.3,
                }}
              >
                <img
                  src="https://www.99images.com/download-image/939107/1080x1638"
                  alt=""
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{
                    // repeat: Infinity,
                    type: "spring",
                    duration: 2,
                    bounce: 0.3,
                  }}
                  className="h-full w-full object-cover rounded-2xl"
                />
              </motion.div>
              <motion.div
                className="relative bg-red-300  w-40 lg:w-80 lg:h-96 h-40 rounded-2xl"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  // repeat: Infinity,
                  type: "spring",
                  duration: 2,
                  bounce: 0.3,
                }}
              >
                <img
                  src="https://image.tmdb.org/t/p/original/yvyjAmpCbwbnGpWnGB8tvjDtpu0.jpg"
                  alt=""
                  className="h-full w-full object-cover rounded-2xl"
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{
                    // repeat: Infinity,
                    type: "spring",
                    duration: 2,
                    bounce: 0.3,
                  }}
                />
              </motion.div>
              <motion.div
                className="relative bg-red-300 w-40 lg:w-80 lg:h-96 h-40 rounded-2xl"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  // repeat: Infinity,
                  type: "spring",
                  duration: 2.8,
                  bounce: 0.3,
                }}
              >
                {" "}
                <img
                  src="https://images5.alphacoders.com/105/thumb-1920-1055769.jpg"
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  transition={{
                    // repeat: Infinity,
                    type: "spring",
                    duration: 2.8,
                    bounce: 0.3,
                  }}
                  alt=""
                  className="h-full w-full object-cover rounded-2xl"
                />
              </motion.div>
              <motion.div
                className="relative bg-red-300 w-40 lg:w-80 lg:h-96 h-40 rounded-2xl"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  // repeat: Infinity,
                  type: "spring",
                  duration: 2.8,
                  bounce: 0.3,
                }}
              >
                <img
                  src="https://wallpaperaccess.com/full/6092283.jpg"
                  alt=""
                  className="h-full w-full object-cover rounded-2xl"
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  transition={{
                    // repeat: Infinity,
                    type: "spring",
                    duration: 2.5,
                    bounce: 0.3,
                  }}
                />
              </motion.div>
            </>
          )}
        </div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="border-red-600 border-x-2 h-fill opacity-25 absolute "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="border-red-600 border-x-2 h-fill opacity-25 absolute"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="border-red-600 border-x-2 h-fill opacity-25 absolute "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="border-red-600 border-x-2 h-fill opacity-25 "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="border-red-600 border-x-2 h-fill opacity-25 "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="border-red-600 border-x-2 h-fill opacity-25 "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="border-red-600 border-x-2 h-fill opacity-25 "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="border-red-600 border-x-2 h-fill opacity-25 relative "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="border-red-600 border-x-2 h-fill opacity-25 "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="border-red-600 border-x-2 h-fill opacity-25 "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="border-red-600 border-x-2 h-fill opacity-25 "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="border-red-600 border-x-2 h-fill opacity-25 "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="border-red-600 border-x-2 h-fill opacity-25 "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="border-red-600 border-x-2 h-fill opacity-25 "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="border-red-600 border-x-2 h-fill opacity-25 "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="border-red-600 border-x-2 h-fill opacity-25 "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="border-red-600 border-x-2 h-fill opacity-25 "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="border-red-600 border-x-2 h-fill opacity-25 "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="border-red-600 border-x-2 h-fill opacity-25 "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="border-red-600 border-x-2 h-fill opacity-25 "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="border-red-600 border-x-2 h-fill opacity-25 "
        ></motion.div> */}
      </div>
    </div>
  );
};

export default Features;
