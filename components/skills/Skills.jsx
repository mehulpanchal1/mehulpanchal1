// eslint-disable-next-line no-unused-vars
import React from "react";
import Frontend from "./Frontend";
import { FaHtml5, FaNodeJs, FaReact, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { BsBootstrapFill } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa6";
import { VscAzureDevops, VscAzure } from "react-icons/vsc";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiSocketdotio } from "react-icons/si";
import "./skills.css";

const Skills = () => {
  const skills = [
    { name: "HTML", level: "Basic", icon: <FaHtml5 /> },
    { name: "CSS", level: "Advanced", icon: <FaCss3Alt /> },
    { name: "JavaScript", level: "Intermediate", icon: <IoLogoJavascript /> },
    { name: "PostgreSQL", level: "Basic", icon: <BiLogoPostgresql /> },
    { name: "TypeScript", level: "Basic", icon: <BiLogoTypescript /> },
    { name: "Bootstrap", level: "Intermediate", icon: <BsBootstrapFill /> },
    { name: "Git", level: "Intermediate", icon: <FaGitAlt /> },
    { name: "React", level: "Basic", icon: <FaReact /> },
    { name: "Next Js", level: "Basic", icon: <RiNextjsFill /> },
    { name: "Node Js", level: "Basic", icon: <FaNodeJs /> },
    { name: "Tailwind CSS", level: "Basic", icon: <RiTailwindCssFill /> },
    { name: "Azure", level: "Basic", icon: <VscAzure /> },
    { name: "Azure Devops", level: "Basic", icon: <VscAzureDevops /> },
    { name: "Express Js", level: "Basic", icon: <SiExpress /> },
    { name: "Socketdotio", level: "Basic", icon: <SiSocketdotio /> },
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills 🛠️</h2>
      <span className="section__subtitle">My Technical Skills</span>

      <div className="skills__container container grid">
        <Frontend title={"Frontend Developer"} skills={skills} />
      </div>
    </section>
  );
};

export default Skills;
