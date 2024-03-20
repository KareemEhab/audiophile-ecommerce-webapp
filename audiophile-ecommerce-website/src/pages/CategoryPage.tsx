import { VStack, Text, HStack } from "@chakra-ui/react";
import CategoryProduct from "../components/CategoryProduct";
import image from "../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import Categories from "../components/common/Categories";
import AudioPhileDescription from "../components/common/AudioPhileDescription";

const CategoryPage = () => {
  return (
    <VStack width="100%">
      <HStack
        width="100%"
        height="21rem"
        paddingTop="6rem"
        bg="black.800"
        alignItems="center"
        justifyContent="center"
      >
        <Text className="h2" color="white.800">
          HEADPHONES
        </Text>
      </HStack>
      <VStack maxW="69.4rem" marginTop="10rem">
        <VStack width="100%" gap="8rem">
          <CategoryProduct
            image={image}
            name="XX99 Mark II Headphones"
            description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
            url=""
            isNew
          />
          <CategoryProduct
            image={image}
            name="XX99 Mark II Headphones"
            description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
            url=""
            invert
          />
          <CategoryProduct
            image={image}
            name="XX99 Mark II Headphones"
            description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
            url=""
          />
        </VStack>
        <VStack marginTop="13rem">
          <Categories />
          <AudioPhileDescription />
        </VStack>
      </VStack>
    </VStack>
  );
};

export default CategoryPage;
