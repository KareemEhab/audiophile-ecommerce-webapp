import { VStack, Text, useBreakpointValue } from "@chakra-ui/react";
import Button1 from "./common/Button1";
import { useNavigate } from "react-router-dom";

const XX99M2Headphones = () => {
  const navigate = useNavigate();
  const breakpoint = useBreakpointValue({ base: "h2", md: "h1" });

  return (
    <VStack
      width="69.4rem"
      maxW="calc(100vw - 3rem)"
      height="21.625rem"
      paddingX={{ base: "2rem" }}
      justify="space-between"
      align={{ base: "center", lg: "flex-start" }}
      textAlign={{ base: "center", lg: "left" }}
      marginInline="auto"
    >
      <Text className="overline" fontWeight="bold">
        New product
      </Text>
      <Text className={breakpoint} maxW="25rem" color="white.800">
        XX99 Mark II HeadphoneS
      </Text>
      <Text
        className="regular"
        maxW="21.8125rem"
        color="white.800"
        opacity="75%"
      >
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </Text>
      <Button1
        onClick={() => {
          navigate("/headphones/xx99-mark-two-headphones");
        }}
      >
        SEE PRODUCT
      </Button1>
    </VStack>
  );
};

export default XX99M2Headphones;
