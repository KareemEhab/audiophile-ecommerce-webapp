import { HStack, VStack, Text } from "@chakra-ui/react";
import { ProductInclude } from "../hooks/useProducts";

interface Props {
  text: string;
  includes: ProductInclude[];
}

const ProductFeatures = ({ text, includes }: Props) => {
  return (
    <HStack width="100%" justify="space-between" align="flex-start">
      <VStack textColor="black.800" align="left" width="39.7rem">
        <Text className="h3">Features</Text>
        <Text className="regular" opacity="50%">
          {text}
        </Text>
      </VStack>
      <VStack width="21.875rem" textColor="black.800" align="left" gap="2rem">
        <Text className="h3">In the box</Text>
        <VStack align="left" width="100%">
          {includes.map((include) => {
            return (
              <HStack gap="1.5rem">
                <Text className="regular" color="orange.800">
                  {include.quantity}x
                </Text>
                <Text className="regular" color="black.800" opacity="50%">
                  {include.item}
                </Text>
              </HStack>
            );
          })}
        </VStack>
      </VStack>
    </HStack>
  );
};

export default ProductFeatures;
