import Button from "./Button";
import ProjectsCarousel from "./ProjectsCarousel";
import ProjectsTitle from "./ProjectsTitle";

export default function Project({
  title,
  description,
  tags,
  slides,
  index,
  ...other
}) {
  return (
    <article
      className="group relative rounded-xl bg-[var(--bg-background-rgb)]"
      {...other}
    >
      <div className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] items-center bg-[var(--background-rgb)] gap-3 md:gap-5 lg:gap-14 sticky py-3 top-[100px] md:top-[48.5px] z-[9] border-b-0.5">
        <ProjectsTitle className="hidden md:flex py-0 opacity-0" aria-hidden/>
        <h3 className="flex items-center gap-2 bg-transparent text-3xl font-semibold leading-0.9 md:text-4xl">
          <span
            className="rounded-full border border-primary-500 px-2 py-1 text-xs font-bold leading-1.3 tracking-2 text-primary-500 transition-colors duration-500 group-open:bg-primary-500 group-open:text-black group-hover:bg-primary-500 group-hover:text-black"
            aria-hidden
          >
            .0{index+1}
          </span>
          <span className="text-base leading-1.2">{title}</span>
        </h3>
        <div className="hidden md:flex flex-wrap gap-1 justify-end">
          {tags.map((tag) => (
            <Button key={tag} isAlwaysSmall>
              {tag}
            </Button>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <ProjectsCarousel slides={slides} />
      </div>
      <p className="mb-8 text-base font-semibold leading-1.2">
        {description}
      </p>
    </article>
  );
}
