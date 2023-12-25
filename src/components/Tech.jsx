import React from "react";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
const Tech = () => {
  return (
    <>
           <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What Technologies and Skills I have used
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Skills.
        </h2>
      </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          className="w-28 h-28 mb-6 text-center hover:text-[#915EFF] hover:shadow-pink hover:underline transition-all duration-300 hover:cursor-pointer"
          key={technology.name}
        >
          <BallCanvas icon={technology.icon} />
          <p>{technology.name}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
