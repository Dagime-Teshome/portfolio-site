import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import { Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import img from "../images/portfolio_crop-removebg.png";
import Socials from "./Socials";
import resume from "../assets/Dagime-s-Resume.pdf";

const LandingSection = () => (
  <FullScreenSection id="Landing-Section">
    <div className="mt-10 flex flex-col-reverse gap-4 justify-between items-center max-w-screen-2xl  xl:w-full xl:flex-row xl:mt-12 ">
      <div className=" lg:w-1/2 flex justify-center">
        <div className="max-w-96 flex flex-col justify-center items-center mt-4">
          <h6 className=" text-nowrap text-4xl font-black">Hey,I'm Dagime</h6>
          <h5 className="mt-2 text-nowrap text-2xl text-gray-500">
            Front-end Developer
          </h5>
          <h3 className="text-pretty mt-5  text-center text-xl">
            Experienced front-end developer with 4+ years of expertise crafting
            dynamic and user-friendly web experiences.
          </h3>
          <Socials />
          <a href={resume} target="blank">
            {" "}
            <button
              className="ring-offset-2 ring-4 ring-slate-800 outline outline-offset-1 rounded-full
        mt-20 text-base p-4 w-52 text-neutral-50 bg-neutral-950 font-medium
        transition duration-700 ease-in-out
              hover:-translate-y-1 hover:scale-110"
            >
              Resume
            </button>
          </a>
        </div>
      </div>
      <div className="flex justify-center lg:w-1/2">
        <div
          className=" flex min-w-80 min-h-80 border-2 border-solid shadow-md
       outline-gray-900 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 overflow-clip"
        >
          <Image className=" object-cover" src={img} alt="me" />
        </div>
      </div>
    </div>
    <FontAwesomeIcon
      className="hidden animate-bounce lg:block text-6xl mt-16"
      icon={faArrowDownLong}
    />
  </FullScreenSection>
);

export default LandingSection;
