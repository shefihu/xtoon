import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div>
      {" "}
      <div className="mx-auto mt-6 container relative z-0 px-4 xl:px-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/5 md:pt-24 pb-10 lg:py-32 xl:py-48">
            <motion.h1
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{
                // repeat: Infinity,
                type: "spring",
                duration: 2,
                bounce: 0.3,
              }}
              className="text-3xl bg-clip-text bg-gradient-to-r from-indigo-500 via-red-500 to-red-500 lg:text-2xl xl:text-6xl uppercase font-black text-transparent text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color"
            >
              Shows that will blow your mind
            </motion.h1>
            <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-white text-lg lg:text-2xl">
              Let us shower you with a lot of animations from xcartoons
            </h2>
            <div className="w-full flex justify-center md:block">
              <button className="hover:opacity-90 bg-red-500 py-3 px-10 lg:py-4 lg:px-20 rounded-full text-white text-sm md:text-lg f-f-p">
                Learn More
              </button>
            </div>
          </div>
          <motion.div className="w-1/2 sm:w-2/5 h-full md:h-auto  m-auto flex items-center justify-center overflow-hidden">
            {/* <img class="h-full" src="https://cdn.tuk.dev/assets/components/111220/Hero4/Rectangle.png" alt="Device"> */}
            {/* <img
              className="md:absolute md:w-1/2 md:-ml-28"
              src="https://cdn.tuk.dev/assets/components/111220/Hero4/Device - Macbook Pro.png"
              alt
            />{" "} */}
            <div className="lg:hidden flex flex-col items-center w-full h-full">
              <div className="flex items-center  justify-between  w-full">
                <motion.div
                  //   whileHover={{
                  //     scale: [1, 1.2, 1.2, 1, 1],
                  //     rotate: [0, 0, 270, 270, 0],
                  //     borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                  //   }}
                  //   transition={{ duration: 2 }}
                  className="w-40 h-40 "
                >
                  <motion.img
                    src="https://c4.wallpaperflare.com/wallpaper/370/127/644/uchiha-sasuke-rinnegan-eternal-mangekyou-sharingan-naruto-shippuuden-wallpaper-preview.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                    whileHover={{
                      scale: [1, 1.2, 1.2, 1, 1],
                      rotate: [0, 0, 270, 270, 0],
                      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}
                    whileInView={{
                      scale: [1, 1.2, 1.2, 1, 1],
                      rotate: [0, 0, 360, 360, 360],

                      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                </motion.div>
              </div>
            </div>
            <div className="lg:flex hidden flex-col items-center w-full h-full">
              <motion.div className="w-32 mb-14 h-32 bg-white">
                <motion.img
                  src="https://c4.wallpaperflare.com/wallpaper/11/266/508/anime-my-hero-academia-angry-belt-wallpaper-preview.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="flex items-center  justify-between w-full">
                <motion.div className="w-32 h-32 bg-white">
                  <motion.img
                    src="https://c4.wallpaperflare.com/wallpaper/999/585/110/spy-x-family-anya-folger-hd-wallpaper-preview.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  //   whileHover={{
                  //     scale: [1, 1.2, 1.2, 1, 1],
                  //     rotate: [0, 0, 270, 270, 0],
                  //     borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                  //   }}
                  //   transition={{ duration: 2 }}
                  className="w-60 h-60 "
                >
                  <motion.img
                    src="https://c4.wallpaperflare.com/wallpaper/370/127/644/uchiha-sasuke-rinnegan-eternal-mangekyou-sharingan-naruto-shippuuden-wallpaper-preview.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                    whileHover={{
                      scale: [1, 1.2, 1.2, 1, 1],
                      rotate: [0, 0, 270, 270, 0],
                      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}
                    whileInView={{
                      scale: [1, 1.2, 1.2, 1, 1],
                      rotate: [0, 0, 270, 270, 0],
                      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}
                    transition={{ duration: 3 }}
                  />
                </motion.div>
                <motion.div className="w-32 h-32 bg-white">
                  <motion.img
                    src="https://c4.wallpaperflare.com/wallpaper/430/896/23/one-piece-roronoa-zoro-hd-wallpaper-preview.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <motion.div className="mt-14 w-32 h-32 bg-white">
                <motion.img
                  src="https://c4.wallpaperflare.com/wallpaper/399/722/332/one-punch-man-saitama-hd-wallpaper-preview.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
