import { HStack, Image, VStack, Text } from "@chakra-ui/react";
import speaker from "../../assets/home/desktop/image-speaker-zx9.png";
import circlePatterns from "../../assets/home/desktop/pattern-circles.svg";
import Button5 from "./common/Button5";
import { useNavigate } from "react-router-dom";

const ZX9SPeaker = () => {
  const navigate = useNavigate();

  return (
    <HStack
      bg="orange.800"
      width="100%"
      height="35rem"
      marginTop="10rem"
      borderRadius="0.5rem"
      justify="space-between"
      padding="7rem"
      overflow="hidden"
      position="relative"
      zIndex="1"
      gap="10rem"
    >
      <Image
        src={circlePatterns}
        position="absolute"
        left="-10rem"
        bottom="-20rem"
        zIndex="-1"
      />
      <Image src={speaker} height="30rem" marginTop="6.25rem" />
      <VStack align="left" gap="2rem">
        <Text className="h1" color="white.800">
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
