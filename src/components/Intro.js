import { twMerge } from "tailwind-merge";

export default function Intro({ className, ...other }) {
  return (
    <section
      className={twMerge("relative overflow-hidden", className)}
      {...other}
    >
      <h1
        className="bl-title mb-24 w-full md:mb-2"
        data-aos="zoom-out"
      >
        <span className="sr-only">Burning Lamb</span>
      </h1>
      <div className="flex items-center justify-between gap-2">
        <div className="logo logo-scaled" />
        <p className="text-lg w-2/3 md:w-1/3">
          Exploring concepts from multiple angles, every project is approached with curiosity and storytelling focusing on creating meaningful experiences and visuals.
        </p>
      </div>
    </section>
  );
}
