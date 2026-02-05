import { twMerge } from "tailwind-merge";
import phases from "@/data/approach-phases";
import services from "@/data/services";

export default function Approach({ className, ...other }) {
  return (
    <section
      id="approach"
      className={twMerge(className)}
      {...other}
    >
      <div className="grid md:grid-cols-[1fr_0.66fr] mb-20">
        <h2
          id="approach-title"
          className="mb-8 flex items-baseline gap-4 md:gap-6"
        >
          <span className="font-heading text-6xl leading-1.3 tracking-2 lowercase">
            Approach
          </span>
        </h2>
        <p>
          I’m a 26-year-old Designer with a primary focus on Branding, Web Design, 
          UX and Motion Design. My work focuses on creating visually engaging 
          and dynamic visual experiences that bring brands, products, 
          and stories to life. I combine a sense of aesthetics with a 
          deep understanding of storytelling to craft designs that not 
          only look great but also communicate effectively.
        </p>
      </div>
      <div className="approach-image grid items-end pb-14 mb-36">
        <div className="grid grid-cols-[repeat(3,auto)] md:grid-cols-[repeat(6,auto)] gap-4 items-center justify-between text-base uppercase">
          {services.map((item) => (
            <span
              key={item}
              className="hover:text-primary-500 transition-colors"
            >
              / {item}
            </span>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-[1fr_0.66fr] mb-20">
        <h2
          id="approach-title"
          className="mb-8 flex items-baseline gap-4 md:gap-6"
        >
          <span className="text-base">
            How will we work together?
          </span>
        </h2>
        <p>
          The design process is built on continuous collaboration, where ideas develop through regular feedback and iteration. This ongoing approach helps ensure the work stays aligned with your goals at every stage.
        </p>
      </div>
      <div>
        {phases.map(({ title, description }, index) => (
          <div key={title} className="relative overflow-hidden group grid grid-cols-[1fr_0.66fr] gap-5 py-5 border-t-0.5 border-gray-500 items-center hover:text-black hover:border-black transition-colors">
            <div className="grid grid-cols-[0.6fr_1fr] gap-4 items-center">
              <div>
                <span
                  className="rounded-full border border-primary-500 px-2 py-1 text-xs font-bold leading-1.3 tracking-2 text-primary-500 group-hover:bg-transparent group-hover:text-black group-hover:border-black"
                  aria-hidden
                >
                  .0{index+1}
                </span>
              </div>
              <span className="font-heading lowercase">{title}</span>
            </div>
            <span className="opacity-60">{description}</span>
            <div className="z-[-1] w-full bg-primary-500 min-h-full absolute translate-y-full group-hover:translate-y-0 transition-transform"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
