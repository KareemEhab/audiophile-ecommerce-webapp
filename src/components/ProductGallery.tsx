import { HStack, Image, VStack } from "@chakra-ui/react";
import { ProductGallery } from "../hooks/useProducts";

interface Props {
  gallery: ProductGallery;
}

const ProductGalleryComponent = ({ gallery }: Props) => {
  return (
    <HStack
      width="100%"
      justify="space-between"
      align="stretch"
      flexDir={{ base: "column", md: "row" }}
    >
      <VStack maxW="calc(100vw - 3rem)" justify="space-between">
        <Image
          width="27.8125rem"
          borderRadius="0.5rem"
          src={gallery.first.desktop}
        />
        <Image
          width="27.8125rem"
          borderRadius="0.5rem"
          src={gallery.second.desktop}
        />
      </VStack>
      <Image
        width="39.6875rem"
        maxW={{ md: "55%" }}
        borderRadius="0.5rem"
        src={gallery.third.desktop}
      />
    </HStack>
  );
};

export default ProductGalleryComponent;
