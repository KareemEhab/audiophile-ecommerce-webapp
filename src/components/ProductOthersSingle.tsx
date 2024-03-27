import { Image, VStack, Text, useBreakpointValue } from "@chakra-ui/react";
import { ProductOther } from "../hooks/useProducts";
import Button1 from "./common/Button1";
import { useNavigate } from "react-router-dom";

interface Props {
  product: ProductOther;
}

const ProductOthersSingle = ({ product }: Props) => {
  const navigate = useNavigate();
  const imageUrl = useBreakpointValue({
    base: product.image.mobile,
    md: product.image.tablet,
    lg: product.image.desktop,
  });

  const getCategory = (slug: string) => {
    if (slug.includes("headphones")) return "headphones";
    else if (slug.includes("speaker")) return "speakers";
    else if (slug.includes("earphones")) return "earphones";
  };

  return (
    <VStack gap="1.5rem">
      <Image
        width={{ md: "21.875rem" }}
        maxW={{ md: "31vw" }}
        src={imageUrl}
        borderRadius="0.5rem"
      />
      <Text className="h5" color="black.800">
        {product.name}
      </Text>
      <Button1
        onClick={() => {
          navigate(`/${getCategory(product.slug)}/${product.slug}`);
        }}
      >
        See product
      </Button1>
    </VStack>
  );
};

export default ProductOthersSingle;
