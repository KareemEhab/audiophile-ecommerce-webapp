import { Image, VStack, Text } from "@chakra-ui/react";
import { ProductOther } from "../hooks/useProducts";
import Button1 from "./common/Button1";

interface Props {
  product: ProductOther;
}

const ProductOthersSingle = ({ product }: Props) => {
  return (
    <VStack gap="1.5rem">
      <Image
        maxW="21.875rem"
        src={product.image.desktop}
        borderRadius="0.5rem"
      />
      <Text className="h5" color="black.800">
        {product.name}
      </Text>
      <Button1 onClick={() => {}}>See product</Button1>
    </VStack>
  );
};

export default ProductOthersSingle;
