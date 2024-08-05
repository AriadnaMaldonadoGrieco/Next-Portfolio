"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="px-3">
        <div className="my-5">
          <div className=" font-bold text-lg md:text-2xl text-left mb-6 whitespace-break-spaces max-w-96">
            Technologies, Frameworks
             and relevant software:
          </div>
          <ul className=" grid grid-cols-2 md:grid-cols-3 ">
            <div className="my-4 flex flex-col items-center">
              <Image
                src="/images/icons/HTML5.png"
                width={100}
                height={100}
                alt=""
                className="rounded-xl m-3"
              ></Image>
              HTML
            </div>
            <div className="my-4 flex flex-col items-center">
              <Image
                src="/images/icons/CSS3.png"
                width={100}
                height={100}
                alt=""
                className="rounded-xl m-3"
              ></Image>
              CSS
            </div>
            <div className="my-4 flex flex-col items-center">
              <Image
                src="/images/icons/JavaScript.png"
                width={100}
                height={100}
                alt=""
                className="rounded-xl m-3 "
              ></Image>
              Javascript
            </div>
            <div className="my-4 flex flex-col items-center">
              <Image
                src="/images/icons/TypeScript.png"
                width={100}
                height={100}
                alt=""
                className="rounded-xl m-3"
              ></Image>
              Typescript
            </div>
            <div className="my-4 flex flex-col items-center">
              <Image
                src="/images/icons/React.png"
                width={100}
                height={100}
                alt=""
                className="rounded-xl m-3"
              ></Image>
              React
            </div>
            <div className="my-4 flex flex-col items-center">
              <Image
                src="/images/icons/Next.js.png"
                width={100}
                height={100}
                alt=""
                className="rounded-xl m-3"
              ></Image>
              Nextjs
            </div>
            <div className="my-4 flex flex-col items-center">
              <Image
                src="/images/icons/TailwindCSS.png"
                width={100}
                height={100}
                alt=""
                className="rounded-xl m-3"
              ></Image>
              Tailwind
            </div>
            <div className="my-4 flex flex-col items-center">
              <Image
                src="/images/icons/Bootstrap.png"
                width={100}
                height={100}
                alt=""
                className="rounded-xl m-3"
              ></Image>
              Bootstrap
            </div>
            <div className="my-4 flex flex-col items-center">
              <Image
                src="/images/icons/Node.js.png"
                width={100}
                height={100}
                alt=""
                className="rounded-xl m-3"
              ></Image>
              Nodejs
            </div>
            <div className="my-4 flex flex-col items-center">
              <Image
                src="/images/icons/Git.png"
                width={100}
                height={100}
                alt=""
                className="rounded-xl m-3"
              ></Image>
              Git
            </div>
          </ul>
          <div className=" font-bold text-lg md:text-2xl text-left mt-9 mb-6">
            Design, Dev and additional tools:
          </div>
          <ul className=" grid grid-cols-2 md:grid-cols-3 ">
            <div className="my-4 flex flex-col items-center">
              <FontAwesomeIcon
                className="text-white text-8xl m-4"
                icon={faGithub}
              />
              Github
            </div>
            <div className="my-4 flex flex-col items-center">
              <Image
                src="/images/icons/ESLint.png"
                width={100}
                height={100}
                alt=""
                className="rounded-xl m-3"
              ></Image>
              ESlint
            </div>
            <div className="my-4 flex flex-col items-center">
              <Image
                src="/images/icons/Ubuntu.png"
                width={100}
                height={100}
                alt=""
                className="rounded-xl m-3"
              ></Image>
              WSL Ubuntu
            </div>
            <div className="my-4 flex flex-col items-center">
              <Image
                src="/images/icons/Jira.png"
                width={100}
                height={100}
                alt=""
                className="rounded-xl m-3"
              ></Image>
              Jira
            </div>
            <div className="my-4 flex flex-col items-center">
              <Image
                src="/images/icons/Figma.png"
                width={100}
                height={100}
                alt=""
                className="rounded-xl m-3"
              ></Image>
              Figma
            </div>
            <div className="my-4 flex flex-col justify-center items-center">
              <Image
                src="/images/icons/GIMP.png"
                width={100}
                height={100}
                alt=""
                className="rounded-xl m-3"
              ></Image>
              GIMP
            </div>
            <div className="my-4 flex flex-col items-center">
              <Image
                src="/images/icons/Slack.png"
                width={100}
                height={100}
                alt=""
                className="rounded-xl m-3"
              ></Image>
              Slack
            </div>
            <div className="my-4 flex flex-col items-center">
              <Image
                src="/images/icons/VSCode.png"
                width={100}
                height={100}
                alt=""
                className="rounded-xl m-3"
              ></Image>
              VSCode
            </div>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="max-h-[360px] text-left">
        <div className="flex flex-col max-h-80 min-h-80 p-5 text-left">
          <div className="flex items-end flex-row mb-6">
            <Image
              src="/images/icons/platzi-icon.png"
              width={40}
              height={40}
              alt=""
              className="flex self-start rounded-md mr-3"
            />
            <div className="text-base md:text-xl font-bold whitespace-break-spaces">
              Platzi - Web Development relevant courses:
            </div>
          </div>
          <div className="grid">
            <ul className="grid grid-cols-2 gap-4 list-none pl-2 text-sm md:text-lg">
              <li>HTML and CSS</li>
              <li>Javascript</li>
              <li>Asynchronism</li>
              <li>ECMAScript</li>
              <li>Typescript</li>
              <li>React.Js</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
              <li>Node.Js</li>
              <li>MySQL</li>
              <li>Next.Js</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col max-h-80 min-h-80 p-5 text-left mt-8">
          <div className="flex items-end flex-row mb-6">
            <Image
              src="/images/icons/platzi-icon.png"
              width={40}
              height={40}
              alt="company I worked for"
              className="flex self-start rounded-md mr-3"
            />
            <div className="text-base md:text-xl font-bold whitespace-pre">
              Platzi Fundamental Courses:
            </div>
          </div>
          <div className="grid">
            <ul className="grid grid-cols-2 gap-4 list-none pl-2 text-sm md:text-lg">
              <li>English academy</li>
              <li>Programming Fundamentals</li>
              <li>Terminal and commands</li>
              <li>Git and Github</li>
              <li>Design for Developers</li>
              <li>Frontend Fundamentals</li>
              <li>Backend Fundamentals</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="max-h-80 min-h-80 text-left">
        <div className="my-5">
          <div className=" font-bold text-base md:text-xl text-left">
            Advanced English level certification:
          </div>
          <ul className="list-none pl-2 mt-3">
            <div className="flex flex-col max-h-80 min-h-80 p-5 text-left">
              <div className="flex items-end flex-row mb-7">
                <div className=" text-base md:text-lg underline underline-offset-2 font-bold mr-3 whitespace-pre">
                  <Link target="_blank" href="https://cert.efset.org/b9diuv">
                    EF C2 English level
                  </Link>
                </div>
                <Image
                  src="/images/icons/eflogo.png"
                  width={30}
                  height={30}
                  alt="company I worked for"
                  className="flex self-start rounded-md "
                />
              </div>
            </div>
          </ul>
        </div>
      </div>
    ),
  },
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
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              <p className="text-xl">Certifications</p>
            </TabButton>
          </div>
          <div className="mt-8 overflow-y-scroll max-h-80 min-h-80">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
