"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-pink-500">
              Hi! I'm {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Ariadna",
                1000,
                "a Web Developer",
                1000,
                "a creative",
                1000,
                "one click away!",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl my-12">
            And this is my portfolio. Here you will find a showcase of my best work, places to contact me, and relevant info about me. <br/> Have a look around!
          </p>
          <div className="mt-12 lg:mt-0">
            <a
              href="/#contact"
              className="px-6 py-3 mr-4 rounded-full w-full sm:w-fit bg-white hover:bg-gradient-to-br hover:from-red-600 hover:via-rose-700 hover:to-pink-500 hover:text-white text-black"
            >
              Hire me
            </a>
            <a
              href="./Web-Developer-Ariadna-Maldonado.pdf"
              download={""}
              className="px-6 py-3 rounded-full w-full sm:w-fit bg-transparent hover:bg-slate-800 text-white border border-white mt-3"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-16 lg:mt-0">
          <div className="rounded-full overflow-hidden bg-[#181818] w-[310px] h-[310px] lg:w-[320px] lg:h-[320px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform rounded-full -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] "
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
