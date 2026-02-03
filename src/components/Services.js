import services from "@/data/services";
import { twMerge } from "tailwind-merge";

export default function Services({ className, ...other }) {
  return (
    <section id="services" className={twMerge(className)} {...other}>
      <div className="grid md:grid-cols-[1fr_0.66fr] mb-20">
        <h2
          id="services-title"
          className="mb-8 flex items-baseline gap-4 md:gap-6"
        >
          <span className="font-heading text-6xl leading-1.3 tracking-2 lowercase">
            Services
          </span>
        </h2>
        <div className="grid grid-cols-2 text-3xl uppercase">
          {services.map((item) => (
            <span
              key={item}
              className="hover:text-primary-500 transition-colors"
            >
              /{item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
