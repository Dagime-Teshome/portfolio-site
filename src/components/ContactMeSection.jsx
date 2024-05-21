import { Input, Textarea, Box, Heading } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const LandingSection = () => {
  return (
    <FullScreenSection
      id="contacts-section"
      backgroundColor="#FBFFFE"
      minHeight="50vh"
      width="100%"
    >
      <div id="contacts-section" className="w-full flex flex-col">
        <Box className="text-black" width="100%" margin="20px 0">
          <Heading as="h3" className="text-3xl">
            Contact
            <span className="h-[2px] w-[110px] block bg-black my-[20px]"></span>
          </Heading>
        </Box>
        <div className="flex flex-col lg:flex-row justify-evenly">
          <div className="w-full lg:w-1/3 flex lg:justify-center">
            <div className="flex flex-col lg:max-w-96">
              <h1 className="text-2xl font-bold mb-8">Say Hello!</h1>
              <p className="text-left">
                If you have any questions about my work or project ideas you
                would like to discuss, feel free to contact me . I'll get back
                to you as soon as possible
              </p>
            </div>
          </div>
          <div className="hidden lg:w-1/12 xl:flex justify-center">
            <span className="w-[2px] h-[300px] bg-black"></span>
          </div>
          <div className="w-full mt-7 lg:w-1/3 flex justify-center lg:justify-center">
            <form
              className="w-2/3 flex flex-col gap-4 lg:max-w-2xl h-[18rem]"
              action="https://formsubmit.co/93d4b602ccda8a73a9c5cfa20f58cfeb"
              method="POST"
            >
              <Input
                type="text"
                placeholder="Name"
                name="name"
                required
              ></Input>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                required
              ></Input>
              <Textarea
                name="message"
                resize="none"
                placeholder="Message"
                required
              />
              <button
                type="submit"
                className=" mt-5 ring-offset-2 ring-4 ring-slate-800 outline outline-offset-1 rounded-full
                          text-base p-4  w-full text-neutral-50 bg-neutral-950 font-medium self-center
                          transition duration-700 ease-in-out
              hover:-translate-y-1 hover:scale-110"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </FullScreenSection>
  );
};

export default LandingSection;
