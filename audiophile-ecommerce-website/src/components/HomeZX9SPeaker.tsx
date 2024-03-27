import {
  HStack,
  Image,
  VStack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import speaker from "../../assets/home/desktop/image-speaker-zx9.png";
import circlePatterns from "../../assets/home/desktop/pattern-circles.svg";
import Button5 from "./common/Button5";
import { useNavigate } from "react-router-dom";

const ZX9SPeaker = () => {
  const navigate = useNavigate();
  const breakpoint = useBreakpointValue({ base: "h2", md: "h1" });

  return (
    <HStack
      bg="orange.800"
      width="100%"
      maxW="calc(100vw - 3rem)"
      height={{ base: "37.5rem", md: "45rem", lg: "35rem" }}
      marginTop="10rem"
      borderRadius="0.5rem"
      justify="space-between"
      padding={{ lg: "7rem" }}
      paddingX={{ base: "3.25rem" }}
      paddingY={{ base: "3rem", lg: "0" }}
      paddingBottom={{ base: "5rem", md: "5rem", lg: "0" }}
      overflow="hidden"
      position="relative"
      zIndex="1"
      gap={{ base: "2rem", lg: "10rem" }}
      flexDirection={{ base: "column", lg: "row" }}
    >
      <Image
        src={circlePatterns}
        minW={{ base: "40rem", md: "59rem", lg: "fit-content" }}
        position="absolute"
        left={{ lg: "-10rem" }}
        bottom={{ base: "7rem", md: "5rem", lg: "-20rem" }}
        zIndex="-1"
      />
      <Image
        src={speaker}
        width={{ base: "10.75rem", md: "12.375rem", lg: "25rem" }}
        marginTop={{ lg: "6.25rem" }}
      />
      <VStack
        maxW={{ md: "23rem", lg: "fit-content" }}
        align={{ base: "center", lg: "flex-start" }}
        textAlign={{ base: "center", lg: "left" }}
        gap="2rem"
      >
        <Text className={breakpoint} color="white.800">
          ZX9 SPEAKER
        </Text>
        <Text className="regular" color="white.800" opacity="75%">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </Text>
        <Button5
          onClick={() => {
            navigate("/speakers/zx9-speaker");
          }}
        >
          SEE PRODUCT
        </Button5>
      </VStack>
    </HStack>
  );
};

export default ZX9SPeaker;
