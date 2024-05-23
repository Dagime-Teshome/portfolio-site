import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GoArrowRight } from "react-icons/go";
import { forwardRef, useImperativeHandle, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { projectData } from "../services/data";
import { SiMysql } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ProjectPreviewModal = forwardRef((props, refs) => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState();
  useImperativeHandle(refs, () => {
    return {
      toggleModal,
    };
  });

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const toggleModal = (params) => {
    setSelectedProject(projectData.find((project) => project.id === params));
    onOpen();
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={"6xl"}
      className="rounded-2xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{selectedProject?.projectName}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="w-full lg:flex lg:flex-row gap-8  lg:min-h-[40vh] justify-center">
            <div className="flex justify-center align-middle h-96 w-full lg:w-[80%]   rounded-lg border-solid border-2 border-slate-950">
              <Carousel className="" setApi={setApi}>
                <CarouselContent>
                  {selectedProject?.images.map((image, i) => {
                    return (
                      <CarouselItem key={i} className="md:basis-1/2">
                        <div
                          className={`flex flex-row justify-center my-6 align-middle items-center`}
                        >
                          <Zoom>
                            <img
                              className={`max-h-full max-w-full object-cover ${
                                selectedProject.id === "MESS"
                                  ? "w-96 h-[30%]"
                                  : "p-3"
                              }`}
                              src={image}
                            ></img>
                          </Zoom>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                {selectedProject?.id !== "MESS" ? (
                  <div className="mt-8 h-14 hidden lg:block">
                    <CarouselPrevious className="absolute -left-[90px] top-[200px] w-16 h-16 bg-black text-white" />
                    <CarouselNext className="absolute -right-[90px] top-[200px] w-16 h-16 bg-black text-white" />
                  </div>
                ) : null}
              </Carousel>
            </div>
            <div className=" mt-5 flex w-full h-8 justify-evenly items-center lg:hidden overflow-clip">
              {selectedProject?.images.map((card, i) => {
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
            </div>
          </div>
          <div className="w-full py-10 flex lg:flex-row flex-col justify-between gap-10">
            <div className="lg:w-[70%] w-full">
              <div className="flex flex-col my-4">
                <h1 className="text-2xl font-bold text-black">
                  {selectedProject?.projectName}
                </h1>
                <h4 className="text-sm font-semibold text-gray-400">
                  {selectedProject?.projectYear}
                </h4>
              </div>
              <div className=" text-gray-700 text-left my-4">
                {selectedProject?.description}
              </div>
              <div className=" mb-10">
                <span className=" text-base font-bold text-black text-left">
                  Impact :
                </span>
                <div className="mt-2 text-grey-900">
                  {selectedProject?.projImpact}
                </div>
              </div>
            </div>
            <div className="flex flex-col my-5 lg:w-[30%] w-full">
              <div className="flex flex-col lg:flex-row gap-5 mb-5">
                {selectedProject?.projectLink ? (
                  <a href={selectedProject?.projectLink} target="blank">
                    <button
                      className="transition duration-700 ease-in-out
              hover:-translate-y-1 hover:scale-110 flex gap-2 justify-center items-center rounded-xl p-2 font-semibold text-neutral-50 bg-neutral-950 "
                    >
                      View Project
                      <GoArrowRight className="text-white font-light text-lg" />
                    </button>
                  </a>
                ) : null}
                {selectedProject?.sourceCodeLink ? (
                  <a href={selectedProject?.sourceCodeLink} target="blank">
                    <button
                      className="transition duration-700 ease-in-out
              hover:-translate-y-1 hover:scale-110 flex gap-2 justify-center items-center rounded-xl p-2 font-semibold text-neutral-50 bg-neutral-950 "
                    >
                      Source Code
                      <GoArrowRight className="text-white font-light text-lg" />
                    </button>
                  </a>
                ) : null}
              </div>
              <div className="">
                <span className="text-base font-bold text-gray-800 text-left">
                  Technologies used :
                </span>
                <div className="mt-5  grid grid-rows-2 grid-flow-col gap-10 justify-evenly place-items-center">
                  {selectedProject?.projSkills?.map((skill, i) => {
                    return (
                      <div
                        key={i}
                        className="flex  border-x-1 flex-col items-center justify-center w-10 h-10 
                      font-thin text-gray-600  text-center"
                      >
                        <FontAwesomeIcon
                          icon={skill.icons}
                          size="2x"
                        ></FontAwesomeIcon>
                        {skill.name}
                      </div>
                    );
                  })}
                  {selectedProject?.id == "MESS" ? (
                    <>
                      <div
                        className="flex  border-x-1 flex-col items-center justify-center
                    font-thin text-gray-600  text-center"
                      >
                        <SiMysql className="w-6 h-7" />
                        <span className="">MySql</span>
                      </div>
                      <div
                        className="flex  border-x-1 flex-col items-center justify-center
                    font-thin text-gray-600  text-center"
                      >
                        <SiNestjs className="text-5xl" />
                        <span className="">NestJs</span>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  {selectedProject?.id == "MR" ? (
                    <>
                      <div
                        className="flex  border-x-1 flex-col items-center justify-center
                    font-thin text-gray-600  text-center"
                      >
                        <SiTailwindcss className="w-6 h-7" />{" "}
                        <span className="">Tailwind</span>
                      </div>
                      <div
                        className="flex  border-x-1 flex-col items-center justify-center
                    font-thin text-gray-600  text-center"
                      >
                        <TbBrandCSharp className="w-6 h-7" />
                        <span className="">C#</span>
                      </div>
                      <div
                        className="flex  border-x-1 flex-col items-center justify-center
                    font-thin text-gray-600  text-center"
                      >
                        <SiMysql className="w-6 h-7" />
                        <span className="">MySql</span>
                      </div>
                      <div
                        className="flex  border-x-1 flex-col items-center justify-center
                    font-thin text-gray-600  text-center"
                      >
                        <SiDotnet className="w-6 h-7" />
                        <span className="">.Net</span>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});

export default ProjectPreviewModal;
