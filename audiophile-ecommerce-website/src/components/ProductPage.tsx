import { Box, VStack } from "@chakra-ui/react";
import Product from "./Product";
import { useState } from "react";
import ProductFeatures from "./ProductFeatures";
import ProductGalleryComponent from "./ProductGallery";
import data from "../../../starter-code/data.json";
import ProductOthers from "./ProductOthers";
import AudioPhileDescription from "./AudioPhileDescription";
import Categories from "./Categories";

const ProductPage = () => {
  const [productCount, setCount] = useState(1);

  return (
    <VStack maxW="100%" overflow="hidden">
      <Box minW="100vw" height="5.6rem" bg="black.800"></Box>
      <VStack maxW="69.4rem" marginTop="5rem" gap="10rem">
        <Product
          image={data[0].image.desktop}
          name={data[0].name}
          description={data[0].description}
          url=""
          isNew
          count={productCount}
          setCount={setCount}
        />
        <ProductFeatures includes={data[0].includes} text={data[0].features} />
        <ProductGalleryComponent gallery={data[0].gallery} />
        <ProductOthers others={data[0].others} />
      </VStack>
      <VStack maxW="69.4rem" marginTop="15rem" gap={0}>
        <Categories />
        <AudioPhileDescription />
      </VStack>
    </VStack>
  );
};

export default ProductPage;
