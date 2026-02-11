import { twMerge } from "tailwind-merge";

const Arrow = ({ className }) => (
  <div className={twMerge(className)}>
    <svg width="102" height="58" viewBox="0 0 51 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="arrow-line origin-left duration-500 scale-x-[66%] group-hover:scale-x-100 group-hover:stroke-white transition-all" d="M49.5137 14.3005L0 14.5005" stroke="#000" strokeWidth="2.63889" strokeLinecap="square" strokeLinejoin="round" />
      <path className="arrow-head origin-left duration-500 -translate-x-1/3 group-hover:translate-x-0 group-hover:stroke-white transition-all" d="M35.0545 26.8875C41.3581 17.8033 49.6162 14.5 49.6162 14.5C49.6162 14.5 41.3581 11.1967 35.0544 2.11184" stroke="#000" strokeWidth="2.63889" strokeLinecap="square" strokeLinejoin="round" />
    </svg>
  </div>
)

const BigButton = ({ href = 'mailto:hi@burninglamb.eu', title, className, id, ...props }) => (
  <div id={id}>
    <a href={href} className={twMerge("relative group border-y-0.5 border-y-transparent hover:border-y-white transition-colors flex flex-nowrap items-center lg:items-baseline justify-between text-black hover:text-white duration-500 py-4 md:py-8 w-full", className)} {...props} >
      <span className="font-heading leading-0.8 lowercase text-title-2-clamp tracking-2 pt-1 lg:pt-3">{title}</span>
      <Arrow className="scale-50 sm:scale-50 md:scale-75 lg:scale-100 sm:-translate-x-1/2 md:-translate-x-1/4 lg:-translate-x-1/3" />
      <span className="absolute -inset-x-[30px] inset-y-0 z-[-1] bg-primary-500 group-hover:bg-transparent transition-colors duration-500"></span>
    </a>
  </div>
)

export default BigButton;