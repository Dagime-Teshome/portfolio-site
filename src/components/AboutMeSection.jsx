import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import { skills } from "../services/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import "./aboutme.css";

const AboutMeSection = () => {
  return (
    <FullScreenSection
      id="About-section"
      backgroundColor="#1b1b1e;"
      width="100%"
    >
      <div className="w-full text-white">
        <Box width="100%" margin="20px 0">
          <Heading as="h3" className="text-3xl">
            About Me
            <span className="h-[2px] w-[130px] block bg-white my-[20px]"></span>
          </Heading>
        </Box>
        <div
          id="container"
          className="flex flex-col lg:flex-row justify-evenly"
        >
          <div id="whoAmI-cont" className="w-full  lg:1/3 ">
            <div className="flex flex-col ">
              <div className="w-full  mt-16">
                <h3 className="underline underline-offset-8 text-center text-xl font-semibold ">
                  Who Am I ?
                </h3>
              </div>
              <div
                id="aboutMe-cont"
                className="text-left mt-10 max-w-96 self-center"
              >
                <p className="text-left">
                  Hey there! I'm a computer science grad with{" "}
                  <span className="decoration-4 underline decoration-white-500">
                    5+ years of experience
                  </span>{" "}
                  crafting business solutions using various technologies. I
                  pride myself on being{" "}
                  <span className="decoration-4 underline decoration-white-500">
                    consistent and hardworking
                  </span>
                  , always striving to stay up-to-date with the latest
                  advancements in the tech world.
                </p>
                <br />
                <p className="text-left">
                  I{" "}
                  <span className="decoration-4 underline decoration-white-500">
                    enjoy the challenge
                  </span>{" "}
                  of learning new technologies and using them to build
                  innovative solutions. While I've primarily focused on frontend
                  development, I've also gained valuable experience in backend
                  work during my journey.
                </p>
                <br />
                <br />
                <p className="text-left">
                  Let's team up and build something awesome together!
                </p>
              </div>
            </div>
          </div>
          <div className="hidden w-12 xl:flex justify-center">
            <span className=" horDivider"></span>
          </div>
          <div id="tech-cont" className="w-full  lg:1/3">
            <div id="tech-flex" className="flex flex-col">
              <div className="w-full mt-16">
                <h2 className="underline underline-offset-8 text-center text-xl font-semibold">
                  Tech Stack
                </h2>
              </div>
              <div className="grid gap-5 grid-cols-3  min-w-32 min-h-[29rem] mt-10  self-center md:min-w-96 ">
                {skills.map((skill, i) => {
                  return (
                    <div
                      key={i}
                      className="flex  border-x-1 flex-col items-center justify-center w-24 h-24 xl:ring-2 xl:ring-white xl:rounded-3xl font-thin text-white  text-center"
                    >
                      <FontAwesomeIcon
                        icon={skill.icons}
                        size="2x"
                      ></FontAwesomeIcon>
                      {skill.name}
                    </div>
                  );
                })}
                <div className="flex  border-x-1 flex-col items-center justify-center w-24 h-24 xl:ring-2 xl:ring-white xl:rounded-3xl font-thin text-white  text-center">
                  <TbBrandNextjs className="text-5xl" />
                  NextJs
                </div>
                <div className="flex  border-x-1 flex-col items-center justify-center w-24 h-24 xl:ring-2 xl:ring-white xl:rounded-3xl font-thin text-white  text-center">
                  <SiMongodb className="text-5xl" />
                  MongoDb
                </div>
                <div className="flex  border-x-1 flex-col items-center justify-center w-24 h-24 xl:ring-2 xl:ring-white xl:rounded-3xl font-thin text-white  text-center">
                  <SiNestjs className="text-5xl" />
                  NestJs
                </div>
                <div className="flex  border-x-1 flex-col items-center justify-center w-24 h-24 xl:ring-2 xl:ring-white xl:rounded-3xl font-thin text-white  text-center">
                  <SiExpress className="text-5xl" />
                  Express
                </div>
                <div className="flex  border-x-1 flex-col items-center justify-center w-24 h-24 xl:ring-2 xl:ring-white xl:rounded-3xl font-thin text-white  text-center">
                  <DiMysql className="text-5xl" />
                  MySql
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FullScreenSection>
  );
};

export default AboutMeSection;
