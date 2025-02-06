import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react"
const Header = ({isDarkMode, setIsDarkMode}) => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="profile"
          className="aspect-square rounded-full object-cover w-32"
        ></Image>
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Hi! I am Asjad Ahamed{" "}
        <Image src={assets.hand_icon} alt="profile" className="w-6"></Image>
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        Mastering Web Development Trends
      </h1>
      <p className="max-w-2xl mx-auto font-ovo">
        Full-Stack Developer skilled in MERN, Tailwind, Next.js, and Spring
        Boot. Passionate about creating sleek, responsive frontends and robust,
        scalable backends for impactful digital solutions.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a href="#contact" className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 cursor-pointer dark:bg-transparent">
            contact me <Image src={assets.right_arrow_white} alt="arrow" className="w-4"></Image>
        </a>
        <a href="/sample-resume.pdf" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 cursor-pointer dark:bg-white  dark:text-black">
            my resume <Image src={assets.download_icon} alt="arrow" className="w-4"></Image>
        </a>
      </div>
    </div>
  );
};

export default Header;
