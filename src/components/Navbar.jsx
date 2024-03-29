import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaFileDownload } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Roboto_Condensed } from "next/font/google";
import GameProjectsInfo from "./projectsComponent/GameProjectsInfo";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [showProjectsDd, setShowProjectsDd] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const handleSideNavbar = () => {
    setNav(!nav);
  };

  const handleActiveTab = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const ProjectsDropdown = () => {
    return (
      <ul>
        {Object.keys(GameProjectsInfo.Details).map((p, index) => {
          return (
            <Link href={GameProjectsInfo.Details[p].projectUrl} key={index}>
              <li className="border-b" onClick={() => setNav(false)}>
                {GameProjectsInfo.Details[p].name}
              </li>
            </Link>
          );
        })}
      </ul>
    );
  };

  return (
    <div
      style={{ backgroundColor: "#ecf0f3" }}
      className={
        shadow
          ? "fixed top-0 w-full h-16 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed top-0 w-full h-16 z-[100]"
      }
    >
      <div className="flex justify-start items-center w-full h-full px-2">
        <ul
          style={{ color: "#1f2937" }}
          className="hidden md:flex ease-in duration-300 justify-center text-center w-full"
        >
          <Link href="/" onClick={() => handleActiveTab("Home")}>
            <li
              className={`nav-link text-sm uppercase rounded hover:border-2 border-b-[#0e7490] ${
                activeTab == "Home" ? "border-b-2 border-b-[#0e7490]" : ""
              }`}
            >
              Home
            </li>
          </Link>
          <Link href="/#about" onClick={() => handleActiveTab("About")}>
            <li
              className={`nav-link ml-10 text-sm uppercase rounded hover:border-2 border-b-[rgb(14,116,144)] ${
                activeTab == "About" ? "border-b-2 border-b-[#0e7490]" : ""
              }`}
            >
              About
            </li>
          </Link>
          <Link href="/#skills" onClick={() => handleActiveTab("Skills")}>
            <li
              className={`nav-link ml-10 text-sm uppercase rounded hover:border-2 border-b-[#0e7490] ${
                activeTab == "Skills" ? "border-b-2 border-b-[#0e7490]" : ""
              }`}
            >
              Skills
            </li>
          </Link>
          <div
            onMouseEnter={() => setShowProjectsDd(true)}
            onMouseLeave={() => setShowProjectsDd(false)}
          >
            <Link href="/#projects" onClick={() => handleActiveTab("Projects")}>
              <li
                className={`nav-link ml-10 text-sm uppercase rounded hover:border-2 border-b-[#0e7490] ${
                  activeTab == "Projects" ? "border-b-2 border-b-[#0e7490]" : ""
                }`}
              >
                Projects
              </li>
            </Link>
            {showProjectsDd && (
              <div className="absolute bg-white shadow-lg shadow-gray-400">
                <ProjectsDropdown />
              </div>
            )}
          </div>
          <Link href="/#contact" onClick={() => handleActiveTab("Contact")}>
            <li
              className={`nav-link ml-10 text-sm uppercase rounded hover:border-2 border-b-[#0e7490] ${
                activeTab == "Contact" ? "border-b-2 border-b-[#0e7490]" : ""
              }`}
            >
              Contact
            </li>
          </Link>
        </ul>
        {/* Hamburger Icon */}
        <div onClick={handleSideNavbar} className="md:hidden cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-full bg-[#ecf0f3] p-10 ease-in duration-500 overflow-auto"
              : "fixed left-[-100%] top-0 p-10"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between mb-[10%]">
              <h2
                className={`${roboto_condensed.className} text-3xl uppercase tracking-tighter`}
              >
                Anmol Goyal
              </h2>
              <div
                onClick={handleSideNavbar}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/" onClick={() => handleActiveTab("Home")}>
                <li
                  onClick={() => setNav(false)}
                  className={`pt-6 text-sm border-b border-gray-300 hover:border-l-3 hover:border-[#0e7490] hover:border-y-0 ${
                    activeTab == "Home" ? "border-l-3 border-l-[#0e7490]" : ""
                  }`}
                >
                  Home
                </li>
              </Link>
              <Link href="/#about" onClick={() => handleActiveTab("About")}>
                <li
                  onClick={() => setNav(false)}
                  className={`pt-6 text-sm border-b border-gray-300 hover:border-l-3 hover:border-[#0e7490] hover:border-y-0 ${
                    activeTab == "About" ? "border-l-3 border-l-[#0e7490]" : ""
                  }`}
                >
                  About
                </li>
              </Link>
              <Link href="/#skills" onClick={() => handleActiveTab("Skills")}>
                <li
                  onClick={() => setNav(false)}
                  className={`pt-6 text-sm border-b border-gray-300 hover:border-l-3 hover:border-[#0e7490] hover:border-y-0 ${
                    activeTab == "Skills" ? "border-l-3 border-l-[#0e7490]" : ""
                  }`}
                >
                  Skills
                </li>
              </Link>
              <div>
                <Link
                  href="/#projects"
                  className="flex items-center"
                  onClick={() => handleActiveTab("Projects")}
                >
                  <li
                    className={`pt-6 text-sm border-b border-gray-300 hover:border-l-3 hover:border-[#0e7490] hover:border-y-0 grid grid-cols-2 w-full ${
                      activeTab == "Projects"
                        ? "border-l-3 border-l-[#0e7490]"
                        : ""
                    }`}
                    onClick={() => setNav(false)}
                  >
                    Projects
                  </li>
                  <RiArrowDropDownLine
                    size={30}
                    onClick={() => setShowProjectsDd(!showProjectsDd)}
                    className="cursor-pointer"
                  />
                </Link>
                {showProjectsDd && (
                  <div className="text-sm pl-6 bg-gray-200 border-l-2 border-l-[#0e7490]">
                    <ProjectsDropdown />
                  </div>
                )}
              </div>
              <Link href="/#contact" onClick={() => handleActiveTab("Contact")}>
                <li
                  onClick={() => setNav(false)}
                  className={`pt-6 text-sm border-b border-gray-300 hover:border-l-3 hover:border-[#0e7490] hover:border-y-0 ${
                    activeTab == "Contact"
                      ? "border-l-3 border-l-[#0e7490]"
                      : ""
                  }`}
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-[30%] h-auto">
              <p className="uppercase tracking-widest text-[#2f347a]">
                Let&#39;s Connect
              </p>
              <div className="flex justify-center items-center">
                <div className="w-full">
                  <div className="flex items-center justify-between my-4 ">
                    <a
                      href="https://www.linkedin.com/in/anmol07goyal/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <a
                      href="https://github.com/anmol20goyal?tab=repositories"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaGithub />
                      </div>
                    </a>
                    <Link href="mailto:anmol77goyal@gmail.com">
                      <div
                        onClick={() => setNav(!nav)}
                        className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                      >
                        <AiOutlineMail />
                      </div>
                    </Link>
                  </div>
                  {/* resume download button */}
                  <div className="py-3 justify-center flex">
                    <a
                      className="resume-button"
                      href="https://drive.google.com/file/d/13aYpHmtiDrqAmMF6lQlsCKMATyc-pEb1/view?usp=sharing"
                      target="_blank"
                    >
                      Resume
                      <FaFileDownload className="text-white justify-center ml-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
