import {
  HStack,
  VStack,
  Text,
  Image,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";

const HomeDescription = () => {
  const image = useBreakpointValue({
    base: "https://res.cloudinary.com/dhhfdtixq/image/upload/v1711123253/audiophile/shared/mobile/zkm6wxhxwco1cr84iz5f.jpg",
    md: "https://res.cloudinary.com/dhhfdtixq/image/upload/v1711319536/audiophile/shared/tablet/image-best-gear_n2i4pc.jpg",
    lg: "https://res.cloudinary.com/dhhfdtixq/image/upload/v1711123248/audiophile/shared/desktop/qyntagohfjkwyxtsnvjb.jpg",
  });

  return (
    <HStack
      width="100%"
      maxW="calc(100vw - 3rem)"
      gap="8rem"
      marginY="13rem"
      flexDirection={{ base: "column-reverse", lg: "row" }}
    >
      <VStack
        width={{ md: "36rem", lg: "100%" }}
        gap="3rem"
        justify="center"
        textAlign={{ base: "center", lg: "left" }}
      >
        <Box className="h2" color="black.800">
          Bringing you the{" "}
          <Text display="inline" color="orange.800">
            best
          </Text>{" "}
          audio gear
        </Box>
        <Text className="regular" color="black.800" opacity="50%">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Text>
      </VStack>
      <Image
        src={image}
        width="100%"
        maxW={{ lg: "50vw" }}
        borderRadius="0.5rem"
      />
    </HStack>
  );
};

export default HomeDescription;
