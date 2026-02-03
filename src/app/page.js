"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Approach from "@/components/Approach";
import BigButton from "@/components/BigButton";

export default function Home() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <Intro className="mb-15 pt-10" />
      <Projects className="my-20" />
      <BigButton title="Launch your project" />
      <Approach className="my-20" />
      <Services className="mt-20 mb-56" />
      <BigButton title="Book a consultation" className="mb-32" />
    </>
  );
}
