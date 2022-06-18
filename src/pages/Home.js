import axios from "axios";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Features from "../components/Features";
import Hero from "../components/Hero";
import WHatweDO from "../components/WHatweDO";

const Home = () => {
  const { ref, inView } = useInView();
  useEffect(() => {
    console.log("view", inView);
  }, [inView]);
  return (
    <div>
      <Hero />
      {/* <h1 className="text-white">Hello</h1> */}
      <WHatweDO />
      <Features />
    </div>
  );
};

export default Home;
