import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
const Works = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        My Latest Works
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        Welcome to my portfolio! Explore a collection of projects showcasing my
        expertise in development.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="grid grid-cols-auto my-10 gap-5  xl:grid-cols-4"
      >
        {workData.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            key={index}
          
            className="p-2   hover:shadow-black duration-500 transition cursor-pointer hover:-translate-y-1 dark:hover:shadow-white rounded-lg"
          >
            <img src={project.bgImage} alt={project.name} />
              <div className="p-2 mt-2 ">
                <p className="font-semibold  font-ovo whitespace-nowrap overflow-hidden text-ellipsis">{project.title}</p>
                <p className="whitespace-nowrap overflow-hidden text-ellipsis mt-[-2px]">{project.description}</p>
              </div>
              <div className="flex justify-end gap-2 mt-2 items-center">
                <a
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500  dark:text-white hover:opacity-75 duration-300 transition-all"
                >
                  <FaGithub size={25} />
                </a>
               {
                project.link && (
                  <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-white  hover:opacity-75 duration-300 transition-all ml-2"
                >
                  <FaLink size={25} />
                </a>
                )
               }
              </div>
              
            
          </motion.div>
        ))}
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        href=""
        className="w-max flex items-center justify-center gap-2 py-3 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 mx-auto my-20 hover:bg-lightHover transition duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more{" "}
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          className="w-4"
          alt="arrow"
        ></Image>
      </motion.a>
    </motion.div>
  );
};

export default Works;
