import Project from "./Project";
import projects from "@/data/projects";
import ProjectsTitle from "./ProjectsTitle";

export default function Projects({ ...other }) {
  return (
    <section id="projects" {...other}>
      <ProjectsTitle className="bg-[var(--background-rgb)] md:bg-transparent" />
      <div className="md:-mt-14">
        {projects.map((project, index) => (
          <Project
            key={project.title}
            index={index}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}
