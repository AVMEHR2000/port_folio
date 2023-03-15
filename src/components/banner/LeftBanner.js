import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaReact,FaLaptopCode,FaGamepad} from "react-icons/fa";
import { SiTailwindcss, SiFigma } from "react-icons/si";
import { TbMathIntegralX } from "react-icons/tb";
const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Mathematician.", "Full Stack Developer.", "Game Designer.","Machine Learning Engineer.","Data Scientist."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-black">
          Hi, I'm <span className="text-designColor capitalize">Ali VahidiMehr</span>
        </h1>
        <h2 className="text-4xl font-bold text-black">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am 23 years old right now.
        I am going to graduate as the top bachelor's 
        student in both Mathematics and Computer Science from Amirkabir University of 
        Technology in Iran. I love learning new things and problem solving.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <TbMathIntegralX />
            </span>
            <span className="bannerIcon">
              <FaLaptopCode />
            </span>
            <span className="bannerIcon">
              <FaGamepad />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner