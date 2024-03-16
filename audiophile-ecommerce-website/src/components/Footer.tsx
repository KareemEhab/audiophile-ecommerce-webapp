import { HStack, VStack, Image, Text } from "@chakra-ui/react";
import Button4 from "./common/Button4";
import logo from "../../assets/shared/desktop/logo.svg";
import Facebook from "./common/SVGImageButtons/Facebook";
import Twitter from "./common/SVGImageButtons/Twitter";
import Instagram from "./common/SVGImageButtons/Instagram";

const Footer = () => {
  return (
    <VStack width="100%" height="22.8125rem" bg="black.800" justify="center">
      <VStack
        width="69.4rem"
        height="100%"
        paddingTop="5.5rem"
        paddingBottom="2rem"
        justify="space-between"
      >
        <HStack width="100%" justify="space-between">
          <Image src={logo} />
          <HStack gap="2rem">
            <Button4 onClick={() => {}}>HOME</Button4>
            <Button4 onClick={() => {}}>HEADPHONES</Button4>
            <Button4 onClick={() => {}}>SPEAKERS</Button4>
            <Button4 onClick={() => {}}>EARPHONES</Button4>
          </HStack>
        </HStack>
        <HStack width="100%" justify="space-between">
          <VStack width="33.75rem" align="left" gap="3rem">
            <Text className="regular" color="white.800" opacity="50%">
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
          <HStack gap="1rem">
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
