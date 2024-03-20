import { Image, VStack } from "@chakra-ui/react";
import desktopHeroIcon from "../../assets/home/desktop/image-hero.jpg";
import ZX9SPeaker from "../components/HomeZX9SPeaker";
import ZX7Speaker from "../components/HomeZX7Speaker";
import YX1EarPhones from "../components/HomeYX1EarPhones";
import HomeDescription from "../components/common/AudioPhileDescription";
import Categories from "../components/common/Categories";

const HomePage = () => {
  return (
    <VStack width="100%">
      <Image src={desktopHeroIcon} width="100%" />
      <VStack maxW="69.4rem" marginTop="10rem">
        <Categories />
        <VStack gap="3rem">
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
