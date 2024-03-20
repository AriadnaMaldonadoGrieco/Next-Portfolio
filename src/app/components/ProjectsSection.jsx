"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Nextjs Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/burgermenu.png",
    tag: ["All", "Personal"],
    githubUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Designer Portfolio",
    description: "Project 2 description",
    image: "/images/desk.png",
    tag: ["All", "Professional"],
    githubUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Agora",
    description: "Project 3 description",
    image: "/images/projects/agora.jpeg",
    tag: ["All", "Professional"],
    githubUrl: "https://agora.red/",
    previewUrl: "https://agora.red/",
  },
  {
    id: 4,
    title: "Login Components",
    description: "Project 4 description",
    image: "/images/projects/burgermenu.png",
    tag: ["All", "Professional"],
    githubUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Online Restaurant Menu",
    description: "Project 5 description",
    image: "/images/projects/burgermenu.png",
    tag: ["All", "Personal"],
    githubUrl: "https://github.com/AriadnaMaldonadoGrieco/Flexbox-practice",
    previewUrl: "/",
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
      <section className="py-12" id="projects">
        <h2 className="text-center text-4xl font-bold text-white my-5">
          My Projects
        </h2>
        <div className="text-white flex flex-row justify-center flex-wrap items-center gap-4 md:gap-2 py-6">
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
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
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
