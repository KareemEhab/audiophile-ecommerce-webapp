import { VStack, useBreakpointValue } from "@chakra-ui/react";
import ZX9SPeaker from "../components/HomeZX9SPeaker";
import ZX7Speaker from "../components/HomeZX7Speaker";
import YX1EarPhones from "../components/HomeYX1EarPhones";
import HomeDescription from "../components/common/AudioPhileDescription";
import Categories from "../components/common/Categories";
import XX99M2Headphones from "../components/XX99M2Headphones";

const HomePage = () => {
  const bgImage = useBreakpointValue({
    lg: "url('https://res.cloudinary.com/dhhfdtixq/image/upload/v1711123239/audiophile/home/desktop/sv4qwjuijj9hzlsydblp.jpg')",
    md: "url('https://res.cloudinary.com/dhhfdtixq/image/upload/v1711123243/audiophile/home/tablet/aqqhsdmgkfroasu9xnit.jpg')",
    base: "url('https://res.cloudinary.com/dhhfdtixq/image/upload/v1711123241/audiophile/home/mobile/k9gv6mvcuzqoec93sisk.jpg')",
  });

  return (
    <VStack width="100%">
      <VStack
        width="100%"
        height="100vh"
        backgroundImage={bgImage}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        justify="center"
      >
        <XX99M2Headphones />
      </VStack>
      <VStack
        width={{ sm: "20.4rem", md: "43rem", lg: "69.4rem" }}
        maxW={{ sm: "20.4rem", md: "43rem", lg: "69.4rem" }}
        marginTop="10rem"
      >
        <Categories />
        <VStack gap="3rem" width="100%">
          <ZX9SPeaker />
          <ZX7Speaker />
          <YX1EarPhones />
        </VStack>
        <HomeDescription />
      </VStack>
    </VStack>
  );
};

export default HomePage;
