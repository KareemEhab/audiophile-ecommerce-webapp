import { HStack } from "@chakra-ui/react";
import categoryThumbnailEarphones from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import categoryThumbnailHeadphones from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import categoryThumbnailSpeakers from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import CategoryThumbnail from "../CategoryThumbnail";

const Categories = () => {
  return (
    <HStack
      justify="space-between"
      width="100%"
      maxW="calc(100vw - 3rem)"
      gap={{ base: "6rem", md: 2 }}
      flexDirection={{ base: "column", md: "row" }}
    >
      <CategoryThumbnail
        imageURL={categoryThumbnailHeadphones}
        header="HEADPHONES"
        route="/headphones"
      />
      <CategoryThumbnail
        imageURL={categoryThumbnailSpeakers}
        header="SPEAKERS"
        route="/speakers"
      />
      <CategoryThumbnail
        imageURL={categoryThumbnailEarphones}
        header="EARPHONES"
        route="/earphones"
      />
    </HStack>
  );
};

export default Categories;
