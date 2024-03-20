import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navbar";
import { Container } from "postcss";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-24 mx-auto px-4 py-4">
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <ContactSection/>
      </div>
    </main>
  );
}
