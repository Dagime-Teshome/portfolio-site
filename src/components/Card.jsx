import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Box,
  Link,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <Box bg="white" borderRadius="lg" color="grey">
      <VStack align="start" padding="1">
        <Image borderRadius="8" objectFit="cover" src={imageSrc} />
        <Box paddingRight="1" paddingLeft="1">
          <Heading
            as="h4"
            size="md"
            color="black"
            alignSelf="start"
            paddingBottom="2"
          >
            <Text as="b">{title}</Text>
          </Heading>
          <Text paddingBottom="2">{description}</Text>
          <HStack align="start" justify="left">
            <Link
              color="black"
              fontSize="sm"
              alignSelf="start"
              href="https://chakra-ui.com"
              isExternal
            >
              See More <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </Link>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Card;
