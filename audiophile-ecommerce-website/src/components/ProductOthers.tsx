import { VStack, Text, HStack } from "@chakra-ui/react";
import { ProductOther } from "../hooks/useProducts";
import ProductOthersSingle from "./ProductOthersSingle";

interface Props {
  others: ProductOther[];
}

const ProductOthers = ({ others }: Props) => {
  return (
    <VStack gap="4rem">
      <Text className="h3" color="black.800">
        You may also like
      </Text>
      <HStack>
        {others.map((product) => (
          <ProductOthersSingle product={product} />
        ))}
      </HStack>
    </VStack>
  );
};

export default ProductOthers;
