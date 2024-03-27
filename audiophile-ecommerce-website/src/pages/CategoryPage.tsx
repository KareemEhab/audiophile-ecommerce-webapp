import { VStack, Text, HStack } from "@chakra-ui/react";
import CategoryProduct from "../components/CategoryProduct";
import Categories from "../components/common/Categories";
import AudioPhileDescription from "../components/common/AudioPhileDescription";
import { Product } from "../hooks/useProducts";
import { useParams } from "react-router-dom";

interface Props {
  products: Product[];
}

const CategoryPage = ({ products }: Props) => {
  const params = useParams();
  const filteredProducts = products
    ? products
        .filter((product) => product.category === params.category)
        .reverse()
    : [];

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
          {params.category}
        </Text>
      </HStack>
      <VStack width="69.4rem" maxW="calc(100vw - 3rem)" marginTop="10rem">
        <VStack width="100%" gap="8rem">
          {filteredProducts.map((product, index) => (
            <CategoryProduct
              key={product.slug + index}
              image={product.categoryImage}
              name={product.name}
              description={product.description}
              url={`/${product.category}/${product.slug}`}
              invert={index % 2 !== 0}
              isNew={product.new}
            />
          ))}
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
