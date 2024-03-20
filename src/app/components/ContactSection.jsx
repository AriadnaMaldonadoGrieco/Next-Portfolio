import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section className="mb-10" id="contact">
      <h2 className="text-center text-4xl font-bold text-white mb-9">
        Contact me
      </h2>
      <div className="grid md:grid-cols-2   gap-4">
        <div className="">
          <p className="text-[#ADB7BE] mb-4 max-w-md">
          Need to get in touch? Feel free to reach out on my socials or write me an email at: ariadnamaldonadogrieco@gmail.com. I'm always interested in hearing about exciting new opportunities!
          </p>
        </div>
        <div className="grid place-content-center justify-items-center h-auto grid-cols-3 gap-6 md:gap-8 mt-6 md:mt-0 mb-10 md:mb-0">
          <Link target="_blank" href={"https://www.linkedin.com/in/ariadnamgrieco/"}>
            <FontAwesomeIcon
              className="text-white hover:text-red-600 text-6xl md:text-8xl"
              icon={faLinkedin}
            />
          </Link>
          <Link target="_blank" href={"https://github.com/AriadnaMaldonadoGrieco"}>
            <FontAwesomeIcon
              className="text-white hover:text-red-600 text-6xl md:text-8xl"
              icon={faGithub}
            />
          </Link>
          <Link target="_blank" href={"https://twitter.com/AriadnaMGrieco"}>
            <FontAwesomeIcon
              className="text-white hover:text-red-600 text-6xl md:text-8xl"
              icon={faTwitter}
            />
          </Link>
          {/* <Link href={"https://www.linkedin.com/in/ariadnamgrieco/"}>
            <FontAwesomeIcon
              className="text-white hover:text-red-600"
              icon={faEnvelope}
              size="5x"
              color="white"
            />
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
