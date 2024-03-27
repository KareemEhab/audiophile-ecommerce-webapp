import { VStack, Text, HStack } from "@chakra-ui/react";
import { ProductOther } from "../hooks/useProducts";
import ProductOthersSingle from "./ProductOthersSingle";

interface Props {
  others: ProductOther[];
}

const ProductOthers = ({ others }: Props) => {
  return (
    <VStack width="100%" gap="4rem">
      <Text className="h3" color="black.800">
        You may also like
      </Text>
      <HStack
        width="100%"
        justify="space-between"
        gap={{ base: "3rem", md: 1 }}
        flexDir={{ base: "column", md: "row" }}
      >
        {others.map((product) => (
          <ProductOthersSingle product={product} key={product.name} />
        ))}
      </HStack>
    </VStack>
  );
};

export default ProductOthers;
