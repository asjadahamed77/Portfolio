import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";
const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            className="w-full rounded-3xl"
            alt="img"
          ></Image>
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-ovo">
            I'm a passionate Full-Stack Developer with expertise in crafting
            dynamic and user-centric applications. Proficient in the MERN stack,
            Tailwind CSS, and Next.js for building elegant and scalable
            frontends, paired with Spring Boot for robust backend solutions. I
            specialize in delivering seamless user experiences, efficient server
            logic, and modern, responsive designs. With a strong command of both
            frontend and backend development, I turn ideas into fully functional
            and visually captivating digital solutions.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {
              infoList.map(({icon,iconDark,title,description},index)=>(
                <li key={index} className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer  hover:-translate-y-1 duration-500 transition hover:shadow-black">
                  <Image src={icon} alt="icon" className="w-7 mt-3" >

                  </Image>
                  <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                  <p className="text-gray-600 text-sm">{description}</p>
                </li>
              ))
            }
          </ul>
        
          <h4 className="my-6 text-gray-700 font-ovo">Tools I use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {
              toolsData.map((tool,index)=>(
                <li key={index} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 transition">
                  <Image src={tool} alt="Tool" className="w-5 sm:w-7" />

                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
