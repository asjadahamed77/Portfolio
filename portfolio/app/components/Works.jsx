import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
const Works = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-ovo">My Latest Works</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Welcome to my portfolio! Explore a collection of projects showcasing my
        expertise in development.
      </p>
      <div className="grid grid-cols-auto my-10 gap-5">
        {workData.map((project, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className="bg-cover bg-center bg-no-repeat rounded-lg aspect-square relative cursor-pointer group"
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition duration-500">
                <Image
                  src={assets.send_icon}
                  alt="icon"
                  className="w-5"
                ></Image>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href="" className="w-max flex items-center justify-center gap-2 py-3 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 mx-auto my-20 hover:bg-lightHover transition duration-500">
        Show more <Image src={assets.right_arrow_bold} className="w-4" alt="arrow"></Image>
      </a>
    </div>
  );
};

export default Works;
