import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";

const TimelineSection = () => {
  return (
    <FullScreenSection
      id="Timeline-section"
      justifyContent="center"
      backgroundColor="#1b1b1e;"
      color="#f9f9f9"
      width="100%"
    >
      <Box width="100%" margin="20px 0">
        <Heading as="h3" className="text-3xl">
          Experience
          <span className="h-[2px] w-[150px] block bg-white my-[20px]"></span>
        </Heading>
      </Box>
      <div id="container" className="w-full xl:px-20">
        <div className="w-full" gap="5rem">
          <div id="exp-cont" className="w-full">
            <div className="text-center xl:text-start">
              <h3 className="text-2xl my-14 font-bold">Experience</h3>
            </div>
            <div>
              <ul className="w-4/5 mx-auto">
                <li className="flex flex-col md:flex-row border-b-2 gap-2 py-5">
                  <div className="md:w-1/3 font-thin">Aug 2021 - Present</div>
                  <div className="md:w-1/3 font-extrabold">
                    Full Stack Developer
                  </div>
                  <div className="md:w-1/3">
                    Marakisoft Technologies, Addis Ababa
                  </div>
                </li>
                <li className="flex flex-col md:flex-row border-b-2 gap-2 py-5">
                  <div className="md:w-1/3 font-thin">Jun 2020 - Jul 2021</div>
                  <div className="md:w-1/3 font-extrabold">
                    Mid-Level Front End Developer
                  </div>
                  <div className="md:w-1/3">
                    Marakisoft Technologies, Addis Ababa
                  </div>
                </li>
                <li className="flex flex-col md:flex-row gap-2 py-5">
                  <div className="md:w-1/3 font-thin">Oct 2019 - May 2020</div>
                  <div className="md:w-1/3 font-extrabold">
                    Junior Front End Developer
                  </div>
                  <div className="md:w-1/3">
                    Marakisoft Technologies, Addis Ababa
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div id="edu-cont" className="text center w-full  xl:text-start">
            <div className="text-center xl:text-start">
              <h3 className=" text-2xl my-14 font-bold " as="h3">
                Education
              </h3>
            </div>
            <div className="w-full">
              <ul className="w-4/5 mx-auto">
                <li className="flex flex-col md:flex-row border-b-2 col gap-2 py-5">
                  <div className="md:w-1/3 font-thin">
                    Jul, 2023 - Dec, 2023
                  </div>
                  <div className="md:w-1/3 text-wrap font-extrabold">
                    Front-End Developer Professional Certificate
                  </div>
                  <div className="md:w-1/3 ">Meta</div>
                </li>
                <li className="flex flex-col md:flex-row gap-2 py-5">
                  <div className="md:w-1/3 font-thin">
                    Oct, 2015 - Dec, 2019
                  </div>
                  <div className="md:w-1/3 font-extrabold">
                    Computer Science - BSC
                  </div>
                  <div className="md:w-1/3 ">
                    HiLCoE School of Computer Science
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FullScreenSection>
  );
};

export default TimelineSection;
