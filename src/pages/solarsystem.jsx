import React from "react";
import Image from "next/image";
import Link from "next/link";
import solarCollage from "../../public/assets/projects/solar/collage.png";
import GameProjectsInfo from "@/components/projectsComponent/GameProjectsInfo";
import ProjectHeader from "@/components/projectsComponent/ProjectHeader";

const solarsystem = () => {
  const solarSystemProject = GameProjectsInfo.Details.SolarSystem;

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/50 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={solarSystemProject.thumbnail}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{solarSystemProject.name}</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid gap-8 py-8">
        <div>
          <ProjectHeader
            codeLink={solarSystemProject.codeLink}
            demoLink={solarSystemProject.demoLink}
          />

          <h2>Overview</h2>
          <p className="py-4 text-xl text-justify">
            {solarSystemProject.shortDesc}
          </p>

          <div className="project-desc">
            <p>
              In my role as the primary programmer for SolAR, an innovative AR
              educational game, I spearheaded the integration of Vuforia plugins
              with Unity, enabling a seamless augmented reality experience. My
              responsibilities included:
            </p>
            <ul>
              <li>
                <span>&#8226;</span>
                Crafting and optimizing the app&apos;s control mechanics for a
                user-friendly interface.
              </li>
              <li>
                <span>&#8226;</span>
                Seamless integration of Unity In-App Purchases to enhance the
                game&apos;s functionality.
              </li>
              <li>
                <span>&#8226;</span>
                Leveraging APIs from official sources to dynamically showcase
                comprehensive solar system data.
              </li>
              <li>
                <span>&#8226;</span>
                Collaborating closely with the design team to implement
                meticulously crafted 3D models and user interfaces into the
                Unity environment.
              </li>
            </ul>
            <p>
              This project not only underscored my technical proficiency in
              Unity programming but also showcased my ability to enhance
              educational experiences through innovative AR solutions. As a game
              programmer dedicated to merging technology with learning, SolAR
              stands as a testament to my commitment to creating immersive and
              educational gaming experiences.
            </p>
          </div>
        </div>

        <Image
          src={solarCollage}
          className="max-w-screen max-h-[900px]"
          alt="/"
        />

        <div className="flex justify-between w-full">
          <Link href="/pingpong">
            <p className="underline cursor-pointe">Previous Project</p>
          </Link>
          <Link href="/cyberwar">
            <p className="underline cursor-pointer">Next Project</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default solarsystem;
