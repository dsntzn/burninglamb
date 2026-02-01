"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HorizontalScroll from "@/components/HorizontalScroll";
import About from "@/components/About";
import History from "@/components/History";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Projects from "@/components/Projects";

export default function Home() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <Intro className="mb-[115px] pt-56 md:mb-40 md:pt-64" />
      <HorizontalScroll className="pb-5 pt-7 md:mx-0 md:pb-8 md:pt-10" />
      <About className="mb-14 pt-20 md:mb-[125px] md:pt-36" />
      <History className="mb-[20px] md:mb-[185px]" />
      <Services className="mb-[80px] pt-20 md:mb-[120px]" />
      <Projects className="mb-28 pt-20 md:mb-40" />
    </>
  );
}
