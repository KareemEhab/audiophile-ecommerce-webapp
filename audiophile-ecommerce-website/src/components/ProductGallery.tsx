import { HStack, Image, VStack } from "@chakra-ui/react";
import { ProductGallery } from "../hooks/useProducts";

interface Props {
  gallery: ProductGallery;
}

const ProductGalleryComponent = ({ gallery }: Props) => {
  return (
    <HStack width="100%" justify="space-between" align="stretch">
      <VStack justify="space-between">
        <Image
          maxW="27.8125rem"
          borderRadius="0.5rem"
          src={gallery.first.desktop}
        />
        <Image
          maxW="27.8125rem"
          borderRadius="0.5rem"
          src={gallery.second.desktop}
        />
      </VStack>
      <Image
        maxW="39.6875rem"
        borderRadius="0.5rem"
        src={gallery.third.desktop}
      />
    </HStack>
  );
};

export default ProductGalleryComponent;
