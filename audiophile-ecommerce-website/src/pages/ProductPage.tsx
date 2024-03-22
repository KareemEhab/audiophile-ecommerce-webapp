import { Box, VStack } from "@chakra-ui/react";
import Product from "../components/Product";
import { useState } from "react";
import ProductFeatures from "../components/ProductFeatures";
import ProductGalleryComponent from "../components/ProductGallery";
import data from "../../../starter-code/data.json";
import ProductOthers from "../components/ProductOthers";
import AudioPhileDescription from "../components/common/AudioPhileDescription";
import Categories from "../components/common/Categories";
import Button6 from "../components/common/Button6";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const [productCount, setCount] = useState(1);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <VStack maxW="100%" overflow="hidden">
      <Box minW="100vw" height="5.6rem" bg="black.800"></Box>
      <VStack maxW="69.4rem" marginTop="5rem" gap="2.5rem" align="left">
        <Button6 onClick={goBack}>Go Back</Button6>
        <VStack width="100%" gap="10rem" align="left">
          <Product
            image={data[0].image.desktop}
            name={data[0].name}
            description={data[0].description}
            url=""
            isNew
            count={productCount}
            setCount={setCount}
          />
          <ProductFeatures
            includes={data[0].includes}
            text={data[0].features}
          />
          <ProductGalleryComponent gallery={data[0].gallery} />
          <ProductOthers others={data[0].others} />
        </VStack>
      </VStack>
      <VStack maxW="69.4rem" marginTop="15rem" gap={0}>
        <Categories />
        <AudioPhileDescription />
      </VStack>
    </VStack>
  );
};

export default ProductPage;
