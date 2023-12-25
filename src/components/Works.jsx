import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Globe} from 'lucide-react';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deployed_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end gap-2 m-3 card-img_hover">
          <div
              onClick={() => window.open(deployed_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Globe className="w-1/2 h-1/2 object-contain" />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const projectsPerPage = 3; // Number of projects per page
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(projects.length / projectsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Calculate which pagination buttons to display
  const getPaginationButtons = () => {
    const activePage = currentPage + 1;

    let buttons = [];
    if (pageCount <= 7) {
      for (let i = 1; i <= pageCount; i++) {
        buttons.push(i);
      }
    } else {
      if (activePage < 3) {
        buttons = [1, 2, 3, "...", pageCount];
      } else if (activePage === 3) {
        buttons = [1, 2, 3, 4, "...", pageCount];
      } else if (activePage > pageCount - 2) {
        buttons = [1, "...", pageCount - 2, pageCount - 1, pageCount];
      } else if (activePage === pageCount - 2) {
        buttons = [
          1,
          "...",
          pageCount - 3,
          pageCount - 2,
          pageCount - 1,
          pageCount,
        ];
      } else {
        buttons = [1, "..."];
        for (let i = activePage - 1; i <= activePage + 1; i++) {
          buttons.push(i);
        }
        buttons.push("...", pageCount);
      }
    }

    return buttons;
  };

  const displayProjects = projects
    .slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage)
    .map((project, index) => (
      <ProjectCard key={`project-${index}`} index={index} {...project} />
    ));

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">{displayProjects}</div>

      <div className="mt-8 flex justify-center">
        <ul className="flex space-x-2">
          <li>
          <button
              className={`px-3 py-1 rounded border border-gray-300`}
              onClick={() => setCurrentPage(0)}
              disabled={currentPage === 0}
            >
              {"<<"}
            </button>
            </li>
            <li>
            <button
              className={`px-3 py-1 rounded border border-gray-300`}
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 0}
            >
              {"<"}
            </button>
          </li>
          {getPaginationButtons().map((button, index) => (
            <li key={index}>
              {button === "..." ? (
                <span>...</span>
              ) : (
                <button
                  className={`px-3 py-1 rounded border border-gray-300 ${
                    currentPage + 1 === button ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() => setCurrentPage(button - 1)}
                >
                  {button}
                </button>
              )}
            </li>
          ))}
          <li>
            <button
              className={`px-3 py-1 rounded border border-gray-300`}
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === pageCount - 1}
            >
              {">"}
            </button>
          </li>
          <li>
          <button
              className={`px-3 py-1 rounded border border-gray-300`}
              onClick={() => setCurrentPage(pageCount - 1)}
              disabled={currentPage === 0}
            >
              {">>"}
            </button>
            </li>
        </ul>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
