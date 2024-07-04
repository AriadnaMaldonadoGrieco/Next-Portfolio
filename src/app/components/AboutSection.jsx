"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid  min-h-[360px]">
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 list-none pl-2 text-sm md:text-xl">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>React</li>
          <li>Nextjs</li>
          <li>Tailwind</li>
          <li>Bootstrap</li>
          <li>Styled Components</li>
          <li>Nodejs</li>
          <li>Git</li>
          <li>Github</li>
          <li>ESlint</li>
          <li>Prettier</li>
          <li>WSL Ubuntu</li>
          <li>Jira</li>
          <li>Figma</li>
          <li>GIMP</li>
          <li>Photoshop</li>
          <li>Slack</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="max-h-[360px] text-left">
        <h3 className="mb-5 text-xl text-left">
          <b>Platzi Courses:</b>
        </h3>
        <div className="grid">
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 list-none pl-2 text-sm md:text-xl">
            <li>English academy</li>
            <li>Programming Fundamentals</li>
            <li>Terminal and commands</li>
            <li>Git and Github</li>
            <li>Design for Developers</li>
            <li>Frontend Fundamentals</li>
            <li>HTML and CSS</li>
            <li>Javascript</li>
            <li>Asynchronism</li>
            <li>ECMAScript</li>
            <li>Typescript</li>
            <li>React.Js</li>
            <li>Tailwind</li>
            <li>Bootstrap</li>
            <li>Backend Fundamentals</li>
            <li>Node.Js</li>
            <li>MySQL</li>
            <li>Next.Js</li>
          </ul>
        </div>
      </div>
    ),
  },
  // {
  //   title: "Certifications",
  //   id: "certifications",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>AWS Cloud Practitioner</li>
  //       <li>Google Professional Cloud Developer</li>
  //     </ul>
  //   ),
  // },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <h2 className="text-4xl font-bold text-white mt-24 text-center">
        About Me
      </h2>
      <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-10 xl:px-16">
        <Image
          src="/images/desk.png"
          width={500}
          height={500}
          alt="Web developer desk"
          className="rounded-3xl md:block hidden"
        />
        <div className="mt-4 md:mt-0 flex flex-col h-full">
          <p className="text-base lg:text-lg">
            I&apos;m a dedicated FullStack Developer with experience in both
            Backend and Frontend. Strongly committed to creating accessible and
            user-centric websites and applications. <br />
            My current focus revolves around using
            <b className="text-xl mx-2">
              React, Next.js, Bootstrap, Node.js, TypeScript, Tailwind
            </b>
            (among others) to build dynamic and engaging web applications.
            Let&apos;s connect and collaborate to build immersive digital
            experiences!
          </p>
          <div className="flex flex-row justify-start mt-8 ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              <p className="text-xl">Skills</p>
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              <p className="text-xl">Education</p>
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
