import { HStack, VStack, Text, Image } from "@chakra-ui/react";
import image from "../../assets/shared/desktop/image-best-gear.jpg";

const HomeDescription = () => {
  return (
    <HStack width="100%" gap="8rem" marginY="13rem">
      <VStack gap="3rem" justify="center">
        <Text className="h2" color="black.800">
          Bringing you the{" "}
          <Text display="inline" color="orange.800">
            best
          </Text>{" "}
          audio gear
        </Text>
        <Text className="regular" color="black.800" opacity="50%">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Text>
      </VStack>
      <Image src={image} borderRadius="0.5rem" />
    </HStack>
  );
};

export default HomeDescription;
