import { useRef, useState, useEffect } from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import { GoArrowRight } from "react-icons/go";
import { cardData } from "../services/data";
import ProjectPreviewModal from "./ProjectPreviewModal";

import * as carousel from "@/components/ui/carousel";

const ProjectsSection = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const modalRef = useRef();

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  const onModalOpen = (project) => {
    modalRef.current.toggleModal(project);
  };
  return (
    <FullScreenSection
      id="Projects-section"
      backgroundColor="#f9f9f9"
      width="100%"
    >
      <Box className="text-black" width="100%" margin="20px 0">
        <Heading as="h3" className="text-3xl">
          Portfolio
          <span className="h-[2px] w-[130px] block bg-black my-[20px]"></span>
        </Heading>
      </Box>

      <div className="w-full relative flex flex-col justify-center lg:px-5 xlg:h-[7rem]">
        <carousel.Carousel setApi={setApi}>
          <carousel.CarouselContent className="">
            {cardData.map((card, i) => {
              return (
                <carousel.CarouselItem
                  key={i}
                  className="basis-full md:basis-2/3 lg:basis-1/3"
                >
                  <div
                    key={i}
                    className=" drop-shadow-2xl flex flex-col gap-3 md:px-2 py-5 max-w-xl min-h-64  rounded-xl border
                     border-gray-200 shadow
                      border-spacing-12  my-10 bg-gradient-to-br from-white-100 to-slate-300 "
                  >
                    <div className="flex flex-col gap-5 py-3">
                      <div className="flex flex-col-reverse lg:flex-row w-full justify-between items-center">
                        <div className="flex flex-col gap-3">
                          <h1 className="text-2xl font-bold text-black">
                            {" "}
                            {card.projectName}
                          </h1>
                          <div className="flex divide-x solid divide-slate-600">
                            {card.skills.map((skill, i) => {
                              return (
                                <div key={i} className="px-1 text-gray-500">
                                  {skill}
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <div className="min-w-20 min-h-20 w-20 h-20 border-2 rounded-full overflow-clip border-black">
                          <img
                            className=" w-full h-full object-cover"
                            src={card.image}
                            alt="Dagime"
                            loading="eager"
                            decoding="asynchronous"
                          />
                        </div>
                      </div>
                      <div className="min-h-20 p-5 lg:p-0 text-gray-700 text-left my-4">
                        {card.description}
                      </div>
                      <div className="flex justify-center items-center lg:justify-start">
                        <button
                          onClick={() => {
                            onModalOpen(card.id);
                          }}
                          className="transition duration-700 ease-in-out
                          hover:-translate-y-1 hover:scale-110 flex gap-2 justify-center items-center rounded-xl p-4 font-semibold text-neutral-50 bg-neutral-950 "
                        >
                          More Detail
                          <GoArrowRight className="text-white font-light text-lg" />
                        </button>
                      </div>
                    </div>
                  </div>
                </carousel.CarouselItem>
              );
            })}
          </carousel.CarouselContent>
          <div className="hidden md:block">
            <carousel.CarouselPrevious className="absolute top-[570px]  left-1/3 w-16 h-16 bg-black text-white" />
            <carousel.CarouselNext className="absolute top-[570px] right-1/3  w-16 h-16 bg-black text-white" />
          </div>
        </carousel.Carousel>
      </div>
      <div className="flex w-full h-8 justify-evenly items-center md:hidden overflow-clip">
        {cardData.map((card, i) => {
          return (
            <div
              key={i}
              className="flex mx-5 h-3 w-3 ring-2 rounded-full justify-evenly items-center ring-black"
            >
              <div
                className={`rounded-full h-[8px] w-[8px] bg-black ${
                  i == current - 1 ? "visible" : "invisible"
                } `}
              ></div>
            </div>
          );
        })}
        {/* Slide {current} of {count} */}
      </div>
      <ProjectPreviewModal ref={modalRef} />
    </FullScreenSection>
  );
};

export default ProjectsSection;
