import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react"
const Header = ({isDarkMode, setIsDarkMode}) => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="profile"
          className="aspect-square rounded-full object-cover w-32"
        ></Image>
      </motion.div>
      <motion.h3
       initial={{ y:-30, opacity: 0 }}
       whileInView={{ y:0, opacity: 1}}
       transition={{ duration: 0.8, delay:0.4 }}
      className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Hi! I am Asjad Ahamed{" "}
        <Image src={assets.hand_icon} alt="profile" className="w-6"></Image>
      </motion.h3>
      <motion.h1
      initial={{ y:-20, opacity: 0 }}
      whileInView={{ y:0, opacity: 1}}
      transition={{ duration: 0.5, delay:0.3 }}
      className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        Mastering Web Development Trends
      </motion.h1>
      <motion.p
       initial={{  opacity: 0 }}
       whileInView={{  opacity: 1}}
       transition={{ duration: 0.6, delay:0.8 }}
      className="max-w-2xl mx-auto font-ovo">
        Full-Stack Developer skilled in MERN, Tailwind, Next.js, and Spring
        Boot. Passionate about creating sleek, responsive frontends and robust,
        scalable backends for impactful digital solutions.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
         initial={{ y:30, opacity: 0 }}
         whileInView={{ y:0, opacity: 1}}
         transition={{ duration: 0.8, delay:1 }}
        href="#contact" className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 cursor-pointer dark:bg-transparent">
            contact me <Image src={assets.right_arrow_white} alt="arrow" className="w-4"></Image>
        </motion.a>
        <motion.a
         initial={{ y:30, opacity: 0 }}
         whileInView={{ y:0, opacity: 1}}
         transition={{ duration: 0.8, delay:1.2 }}
        href="/sample-resume.pdf" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 cursor-pointer dark:bg-white  dark:text-black">
            my resume <Image src={assets.download_icon} alt="arrow" className="w-4"></Image>
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
