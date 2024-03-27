import { HStack, VStack, Image, Text } from "@chakra-ui/react";
import Button4 from "./common/Button4";
import logo from "../../assets/shared/desktop/logo.svg";
import Facebook from "./common/SVGImageButtons/Facebook";
import Twitter from "./common/SVGImageButtons/Twitter";
import Instagram from "./common/SVGImageButtons/Instagram";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <VStack
      width="100%"
      minH={{ base: "40.875rem", md: "25rem", lg: "22.8125rem" }}
      bg="black.800"
      justify="center"
    >
      <VStack
        width="69.4rem"
        maxW="calc(100vw - 3rem)"
        minH="100%"
        paddingTop={{ base: "2rem", lg: "5.5rem" }}
        paddingBottom="2rem"
        justify="space-between"
        gap={{ base: "3rem", lg: "2" }}
      >
        <HStack
          width="100%"
          justify="space-between"
          alignItems={{ base: "center", md: "flex-start" }}
          flexDirection={{ base: "column", lg: "row" }}
          align={{ md: "left" }}
          gap={{ base: "2rem" }}
        >
          <Image maxW="9rem" src={logo} />
          <HStack gap="2rem" flexDir={{ base: "column", md: "row" }}>
            <Button4
              onClick={() => {
                navigate("/");
              }}
            >
              HOME
            </Button4>
            <Button4
              onClick={() => {
                navigate("/headphones");
              }}
            >
              HEADPHONES
            </Button4>
            <Button4
              onClick={() => {
                navigate("/speakers");
              }}
            >
              SPEAKERS
            </Button4>
            <Button4
              onClick={() => {
                navigate("/earphones");
              }}
            >
              EARPHONES
            </Button4>
          </HStack>
        </HStack>
        <HStack
          width="100%"
          justify="space-between"
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: "3rem" }}
        >
          <VStack
            width="33.75rem"
            maxWidth="100%"
            align={{ base: "center", md: "flex-start" }}
            textAlign={{ base: "center", md: "left" }}
            gap="3rem"
          >
            <Text
              className="regular"
              minW={{ md: "43.125rem", lg: "100%" }}
              color="white.800"
              opacity="50%"
            >
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </Text>
            <Text
              className="regular"
              color="white.800"
              opacity="50%"
              fontWeight="bold"
            >
              Copyright {new Date().getFullYear()}. All Rights Reserved
            </Text>
          </VStack>
          <HStack gap="1rem" alignSelf={{ md: "flex-end", lg: "center" }}>
            <Facebook />
            <Twitter />
            <Instagram />
          </HStack>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Footer;
