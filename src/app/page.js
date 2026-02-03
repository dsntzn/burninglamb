"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Approach from "@/components/Approach";
import { twMerge } from "tailwind-merge";

const Arrow = ({ className }) => (
  <div className={twMerge(className)}>
    <svg width="102" height="58" viewBox="0 0 51 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="arrow-line origin-left duration-500 scale-x-[66%] group-hover:scale-x-100 group-hover:stroke-white transition-all" d="M49.5137 14.3005L0 14.5005" stroke="#000" stroke-width="2.63889" stroke-linecap="square" stroke-linejoin="round" />
      <path className="arrow-head origin-left duration-500 -translate-x-1/3 group-hover:translate-x-0 group-hover:stroke-white transition-all" d="M35.0545 26.8875C41.3581 17.8033 49.6162 14.5 49.6162 14.5C49.6162 14.5 41.3581 11.1967 35.0544 2.11184" stroke="#000" stroke-width="2.63889" stroke-linecap="square" stroke-linejoin="round" />
    </svg>
  </div>
)

const BigButton = ({ title, className }) => (
  <a href="mailto:hi@burninglamb.eu" className={twMerge("group border-y-0.5 border-y-transparent hover:border-y-white transition-colors flex flex-nowrap items-center lg:items-baseline justify-between bg-primary-500 hover:bg-transparent text-black hover:text-white duration-500 p-4 md:p-8 w-full", className)} >
    <span className="font-heading leading-0.8 lowercase text-title-2-clamp tracking-2 pt-1 lg:pt-3">{title}</span>
    <Arrow className="scale-50 sm:scale-50 md:scale-75 lg:scale-100 sm:-translate-x-1/2 md:-translate-x-1/4 lg:-translate-x-1/3" />
  </a>
)

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
