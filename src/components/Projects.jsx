import Project from "./ui/Project.jsx";

import { data } from "../data.js";

const Projects = () => {
  const { projects } = data;
  return (
    <article className="w-full flex flex-col gap-2 bg-highlightBg border border-borderColor px-4 py-4 rounded-xl">
      <h2 className="text-xl font-bold text-textColor">Projects</h2>
      {projects.map((item, index) => (
        <Project
          key={index}
          name={item.name}
          gitLink={item.gitLink}
          link={item.link}
        />
      ))}
    </article>
  );
};

export default Projects;
