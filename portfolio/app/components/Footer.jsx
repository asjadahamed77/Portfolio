import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
const Footer = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="logo"
          className="w-40 mx-auto mb-2"
        ></Image>
        <div className="flex w-max items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail "
            className="w-6"
          ></Image>
          asjadahamed77@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>ⓒ 2025 Asjad Ahamed. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/asjadahamed77">
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/asjad-ahamed-71941b288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://instagram.com/asjad_ahd">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
