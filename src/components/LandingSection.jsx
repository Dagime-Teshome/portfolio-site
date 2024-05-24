import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
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
            Experienced front-end developer with 5+ years of expertise crafting
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
        {/* <div
          className=" flex min-w-80 min-h-80 border-2 border-solid shadow-md
       outline-gray-900 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 overflow-clip"
        >
          <Image className=" object-cover" src={img} alt="me" />
        </div> */}
        <svg
          className="w-full h-full"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="blobClip">
              <path
                fill="#F2F4F8"
                d="M32.1,-60.6C39.5,-51.3,42,-38.5,52.2,-27.8C62.5,-17.1,80.6,-8.6,84.2,2.1C87.7,12.7,76.7,25.3,67.3,37.4C57.8,49.5,49.9,61.1,38.9,67.7C28,74.4,14,76.1,0.2,75.7C-13.5,75.3,-27,72.7,-41.2,67.9C-55.3,63.2,-70.1,56.1,-72.2,44.4C-74.2,32.7,-63.4,16.3,-60.3,1.8C-57.3,-12.8,-62,-25.7,-60.5,-38.3C-59,-50.9,-51.3,-63.2,-40.2,-70.5C-29.1,-77.7,-14.5,-79.7,-1.1,-77.8C12.3,-75.9,24.7,-70,32.1,-60.6Z"
                transform="translate(100 100)"
              />
            </clipPath>
          </defs>
          <path
            fill="#F2F4F8"
            d="M32.1,-60.6C39.5,-51.3,42,-38.5,52.2,-27.8C62.5,-17.1,80.6,-8.6,84.2,2.1C87.7,12.7,76.7,25.3,67.3,37.4C57.8,49.5,49.9,61.1,38.9,67.7C28,74.4,14,76.1,0.2,75.7C-13.5,75.3,-27,72.7,-41.2,67.9C-55.3,63.2,-70.1,56.1,-72.2,44.4C-74.2,32.7,-63.4,16.3,-60.3,1.8C-57.3,-12.8,-62,-25.7,-60.5,-38.3C-59,-50.9,-51.3,-63.2,-40.2,-70.5C-29.1,-77.7,-14.5,-79.7,-1.1,-77.8C12.3,-75.9,24.7,-70,32.1,-60.6Z"
            transform="translate(100 100)"
          />
          <image
            clip-path="url(#blobClip)"
            href={img}
            x="-45"
            y="-10"
            height="250px"
            width="250px"
          />
        </svg>
      </div>
    </div>
    <FontAwesomeIcon
      className="hidden animate-bounce lg:block text-6xl -mt-10"
      icon={faArrowDownLong}
    />
  </FullScreenSection>
);

export default LandingSection;
