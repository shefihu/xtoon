import axios from "axios";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Discover from "../components/Discover";
import Features from "../components/Features";
import Hero from "../components/Hero";
import WHatweDO from "../components/WHatweDO";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <h1 className="text-white">Hello</h1> */}
      <WHatweDO />
      <Features />
      <Discover />
    </div>
  );
};

export default Home;
