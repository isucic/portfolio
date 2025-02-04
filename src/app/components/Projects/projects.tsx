import Card from "./projectCard";
import data from "../../json/data.json";

export default function Projects() {
  const projects = data.project;
  return (
    <section
      id="projects"
      className="w-full pt-20 flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl xl:text-6xl font-bold flex justify-center items-center pb-2">
        Projects
      </h1>
      <div className="w-1/4 border-customyellow border-2"></div>
      <div className="w-full grid grid-cols-1 gap-y-6 xl:gap-10 py-4 xl:py-16">
        {projects.map((project, index) => {
          return <Card project={project} index={index} key={index} />;
        })}
      </div>
    </section>
  );
}
