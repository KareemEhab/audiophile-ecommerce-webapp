import { Image, VStack } from "@chakra-ui/react";
import desktopHeroIcon from "../../assets/home/desktop/image-hero.jpg";
import ZX9SPeaker from "./ZX9SPeaker";
import ZX7Speaker from "./ZX7Speaker";
import YX1EarPhones from "./YX1EarPhones";
import HomeDescription from "./AudioPhileDescription";
import Categories from "./Categories";

const Home = () => {
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

export default Home;
