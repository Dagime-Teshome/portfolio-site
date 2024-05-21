import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, ...boxProps }) => {
  return (
    <VStack
      className="px-8 py-14 xl:px-16"
      backgroundColor={boxProps.backgroundColor}
    >
      <VStack
        className="lg:align-start lg:justify-start h-full xl:justify-center"
        minWidth="100%"
        minHeight="100vh"
        {...boxProps}
      >
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
