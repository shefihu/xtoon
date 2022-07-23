import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";
const Features = () => {
  const { ref, inView } = useInView();
  const [topAnime, setTopAnime] = useState([]);

  const gettopAnime = async () => {
    try {
      const data = await axios.get(
        "https://api.jikan.moe/v3/top/anime/1/bypopularity"
      );
      setTopAnime(data.data.top.slice(4, 8));
    } catch (error) {}
  };
  useEffect(() => {
    gettopAnime();
  }, []);
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
              {topAnime.map((anime, id) => {
                return (
                  <>
                    {" "}
                    <motion.div
                      className="relative bg-red-300 w-40 lg:w-80 lg:h-96 h-40 rounded-2xl"
                      initial={{ x: "-100vw" }}
                      animate={{ x: 0 }}
                      key={anime.id}
                      transition={{
                        // repeat: Infinity,
                        type: "spring",
                        duration: 3,
                        bounce: 0.3,
                      }}
                    >
                      <img
                        src={anime.image_url}
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
                  </>
                );
              })}
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
