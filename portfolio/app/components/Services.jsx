import { assets, serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
const Services = ({isDarkMode, setIsDarkMode}) => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Crafting Stunning Designs, Building Powerful Websites, Delivering
        Full-Stack Solutions.
      </p>
      <div className="grid grid-cols-auto gap-6 my-10">
{
    serviceData.map(({icon,title,description,link},index)=>(
        <div key={index} className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black duration-500 transition cursor-pointer hover:-translate-y-1 dark:hover:shadow-white">
<Image src={icon} alt="icon" className="w-10"></Image>
<h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
<p className="text-sm text-gray-600 leading-5 dark:text-white/80">{description}</p>
<a href={link} className="flex items-center gap-2 text-sm mt-5">Read more <Image className="w-4" src={assets.right_arrow} alt="arrow" ></Image></a>
        </div>
    ))
}
      </div>
    </div>
  );
};

export default Services;
