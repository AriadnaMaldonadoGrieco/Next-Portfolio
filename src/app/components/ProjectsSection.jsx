"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: <h2 className="text-xl sm:text-2xl">Nextjs Portfolio Website</h2>,
    description: (
      <div className="min-h-[192px]">
        <p className="text-base">
          You are here! <br />
          My portfolio page made with Nextjs and Tailwind. Includes all ways to
          contact me, a showcase of some of my relevant projects, a button to
          download my CV and it is mobile friendly. <br /> This portfolio will
          be updated constantly with new projects for my clients and personal
          projects, so keep checking it to stay on the loop of my advances.
        </p>
      </div>
    ),
    image: "/images/projects/portfolioimg.png",
    tag: ["All", "Personal"],
    githubUrl: "https://github.com/AriadnaMaldonadoGrieco/Next-Portfolio",
    previewUrl: "https://next-portfolio-ariadnamaldonadogriecos-projects.vercel.app/",
  },
  {
    id: 2,
    title: <h2 className="text-xl sm:text-2xl">Designer Portfolio</h2>,
    description: (
      <div className="min-h-[192px]">
        <p className="text-base mt-4">
          Development of portfolio website for a graphic Designer in order to
          showcase their experience. Based on HTML, CSS, and JavaScript as per
          the client&apos;s request. <br /> With code repository and versioning on
          Git and GitHub, using WSL Ubuntu, and design made and shared on Figma
          by the designer. Close collaboration with the client in identifying
          and defining project requirements, with several meetings for progress
          and adjustments.
        </p>
      </div>
    ),
    image: "/images/client.png",
    tag: ["All", "Professional"],
    githubUrl:
      "https://github.com/AriadnaMaldonadoGrieco/Portfolioclient",
    previewUrl: "https://portfolioclient-one.vercel.app/",
  },
  {
    id: 3,
    title: <h2 className="text-xl sm:text-2xl">Ágora</h2>,
    description: (
      <div className="min-h-[192px]">
        <p className="text-base mt-4">
          Development and maintenance of a web application designed to provide
          tools for professionals to offer their services and events from a
          unified platform. Collaboration with designers through Figma to bring
          designs to life. Use of React and Typescript to build reusable UI
          components throughout the platform. Application of Styled-Components
          and later transitioning to Tailwind for styles and formatting with
          ESlint and Prettier. Version control managed through Git, with the use
          of WSL Ubuntu terminal. Employment of Jira for task management (Kanban
          methodology)
        </p>
      </div>
    ),
    image: "/images/projects/agora.png",
    tag: ["All", "Professional"],
    githubUrl: "https://www.linkedin.com/company/agora-red/",
    previewUrl: "https://agora.red/",
  },
  // {
  //   id: 4,
  //   title: "Login Components",
  //   description: "Project 4 description",
  //   image: "/images/projects/burgermenu.png",
  //   tag: ["All", "Professional"],
  //   githubUrl: "/",
  //   previewUrl: "/",
  // },
  {
    id: 5,
    title: <h2 className="text-xl sm:text-2xl">Online Restaurant Menu</h2>,
    description: (
      <div className="min-h-[192px]">
        <p className="text-base mt-4">
          A burger restaurant menu with a side navbar. Use of HTML and CSS.{" "}
          <br />
          Made to practice making mobile friendly pages with a side navbar.
        </p>
      </div>
    ),
    image: "/images/projects/burgermenu.png",
    tag: ["All", "Personal"],
    githubUrl: "https://github.com/AriadnaMaldonadoGrieco/Flexbox-practice",
    previewUrl: "https://burger-restaurant-menu.vercel.app/",
  },
  // {
  //   id: 6,
  //   title: "Pagina de dibujo",
  //   description: "Project 6 description",
  //   image: "/images/projects/burgermenu.png",
  //   tag: ["All", "Personal"],
  //   githubUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <section
        className="py-12 flex items-center justify-center flex-col"
        id="projects"
      >
        <h2 className="text-center text-4xl font-bold text-white my-5">
          My Projects
        </h2>
        <div className="text-white flex flex-row justify-center flex-wrap items-center gap-y-4 gap-x-2 md:gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Professional"
            isSelected={tag === "Professional"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Personal"
            isSelected={tag === "Personal"}
          />
        </div>
        <div className="grid md:grid-cols-2 w-full py-10 gap-10 md:gap-12">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project}
              githubUrl={project.githubUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
