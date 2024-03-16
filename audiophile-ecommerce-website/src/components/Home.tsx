import { HStack, Image, VStack } from "@chakra-ui/react";
import desktopHeroIcon from "../../assets/home/desktop/image-hero.jpg";
import HomeCategory from "./HomeCategory";
import categoryThumbnailEarphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import categoryThumbnailHeadphones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import categoryThumbnailSpeakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import ZX9SPeaker from "./ZX9SPeaker";
import ZX7Speaker from "./ZX7Speaker";
import YX1EarPhones from "./YX1EarPhones";
import HomeDescription from "./AudioPhileDescription";

const Home = () => {
  return (
    <VStack width="100%" overflowX="hidden">
      <Image src={desktopHeroIcon} width="100%" overflowX="hidden" />
      <VStack maxW="69.4rem">
        <HStack justify="space-between" width="100%">
          <HomeCategory
            imageURL={categoryThumbnailHeadphones}
            header="HEADPHONES"
            route="/headphones"
          />
          <HomeCategory
            imageURL={categoryThumbnailSpeakers}
            header="SPEAKERS"
            route="/speakers"
          />
          <HomeCategory
            imageURL={categoryThumbnailEarphones}
            header="EARPHONES"
            route="/earphones"
          />
        </HStack>
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
