"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid md:min-h-auto min-h-[360px]">
        <ul className="grid grid-cols-2 list-none">
          <li classname="">HTML</li>
          <li classname="">CSS</li>
          <li classname="">Javascript</li>
          <li classname="">Typescript</li>
          <li classname="">React</li>
          <li classname="">Nextjs</li>
          <li classname="">Tailwind</li>
          <li classname="">Bootstrap</li>
          <li classname="">Styled Components</li>
          <li classname="">Nodejs</li>
          <li classname="">Git</li>
          <li classname="">Github</li>
          <li classname="">ESlint</li>
          <li classname="">Prettier</li>
          <li classname="">WSL Ubuntu</li>
          <li classname="">Jira</li>
          <li classname="">Figma</li>
          <li classname="">GIMP</li>
          <li classname="">Photoshop</li>
          <li classname="">Slack</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="min-h-72 md:min-h-[360px] text-left">
        <h3 className="mb-5 text-xl text-left">
          <b>Platzi Courses:</b>
        </h3>
        <div className="grid">
          <ul className="grid grid-cols-2 list-none pl-2">
            <li className="">English academy</li>
            <li classname="">Programming Fundamentals</li>
            <li classname="">Terminal and commands</li>
            <li classname="">Git and Github</li>
            <li classname="">Design for Developers</li>
            <li classname="">Frontend Fundamentals</li>
            <li classname="">HTML and CSS</li>
            <li classname="">Javascript</li>
            <li classname="">Asynchronism</li>
            <li classname="">ECMAScript</li>
            <li classname="">Typescript</li>
            <li classname="">React.Js</li>
            <li classname="">Tailwind</li>
            <li classname="">Bootstrap</li>
            <li classname="">Backend Fundamentals</li>
            <li classname="">Node.Js</li>
            <li classname="">MySQL</li>
            <li classname="">Next.Js</li>
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
            I'm a dedicated FullStack Developer with experience in both Backend
            and Frontend. Strongly committed to creating accessible and
            user-centric websites and applications. <br />
            My current focus revolves around using
            <b className="text-xl mx-2">
              React, Bootstrap, Node.js, TypeScript, Tailwind
            </b>
            (among others) to build dynamic and engaging web applications. Let's
            connect and collaborate to build immersive digital experiences!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
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
