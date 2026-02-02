"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import HeaderLink from "./HeaderLink";

export default function Header({ className, ...other }) {
  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <header
      className={twMerge("flex items-center justify-between ", className)}
      {...other}
    >
      <nav className="flex gap-7">
        <HeaderLink href="#about" className="hidden md:flex">
          About
        </HeaderLink>
        <HeaderLink href="#projects" className="hidden md:flex">
          Featured projects
        </HeaderLink>
        <HeaderLink href="#approach" className="hidden md:flex">
          Approach
        </HeaderLink>
        <HeaderLink href="#contact" className="hidden md:flex">
          Services
        </HeaderLink>
      </nav>
      <a href="mailto:hi@burninglamb.eu" className="flex items-center gap-1 hover:text-primary-500 transition-colors" >
        <Image
          alt=""
          src="/svg/arrow-left-down-primary.svg"
          width="20"
          height="20"
          className="-scale-x-100"
        />
        <span className="underline">hi@burninglamb.eu</span>
      </a>
    </header>
  );
}
