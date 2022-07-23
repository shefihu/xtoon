import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";
const WHatweDO = () => {
  const { ref, inView } = useInView();
  const [topAnime, setTopAnime] = useState([]);

  const gettopAnime = async () => {
    try {
      const data = await axios.get(
        "https://api.jikan.moe/v3/top/anime/1/bypopularity"
      );
      setTopAnime(data.data.top.slice(8, 12));
    } catch (error) {}
  };
  useEffect(() => {
    gettopAnime();
  }, []);
  return (
    <div>
      <div className="">
        <div className="bg-gray-700 mt-48 w-full h-96 ">
          <motion.div className="justify-center flex items-center h-20">
            {/* <h1 className="font-bold text-5xl text-white text-center">O</h1>
          <h1 className="font-bold text-5xl text-white text-center">U</h1>
          <h1 className="font-bold text-5xl text-white text-center">R</h1> */}
            <h1 className="font-bold text-5xl text-white text-center">P</h1>
            <h1 className="font-bold text-5xl text-white text-center">O</h1>
            <h1 className="font-bold text-5xl text-white text-center">P</h1>
            <h1 className="font-bold text-5xl text-white text-center">U</h1>
            <h1 className="font-bold text-5xl text-white text-center">L</h1>
            <h1 className="font-bold text-5xl text-white text-center">A</h1>
            <h1 className="font-bold text-5xl text-white text-center">R</h1>
          </motion.div>
          <div
            ref={ref}
            className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 lg:py-20 place-items-center w-full"
          >
            {inView && (
              <>
                {topAnime.map((anime) => {
                  return (
                    <>
                      {" "}
                      <motion.div
                        initial={{ x: "-100vw" }}
                        animate={{ x: 0 }}
                        transition={{
                          //   repeat: Infinity,
                          type: "spring",
                          duration: 3,
                          bounce: 0.3,
                        }}
                        className="lg:w-80 lg:h-40 w-40 h-20 bg-slate-500 rounded-2xl flex items-center justify-between  "
                      >
                        <div className="lg:w-24 lg:h-24 w-14 h-14 rounded-full bg-red-300 lg:ml-4">
                          <img
                            src={anime.image_url}
                            alt=""
                            className="w-full h-full rounded-full object-cover object-right"
                          />
                        </div>

                        <div className="lg:w-40 w-20 bg-white h-12 lg:h-20 lg:mr-4 rounded-2xl"></div>
                      </motion.div>
                    </>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
      <div> </div>
    </div>
  );
};

export default WHatweDO;
