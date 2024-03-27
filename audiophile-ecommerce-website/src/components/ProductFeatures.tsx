import { HStack, VStack, Text } from "@chakra-ui/react";
import { ProductInclude } from "../hooks/useProducts";

interface Props {
  text: string;
  includes: ProductInclude[];
}

const ProductFeatures = ({ text, includes }: Props) => {
  return (
    <HStack
      width="100%"
      justify="space-between"
      gap={{ base: "8rem", lg: 1 }}
      align="flex-start"
      flexDir={{ base: "column", lg: "row" }}
    >
      <VStack textColor="black.800" align="left" width={{ lg: "39.7rem" }}>
        <Text className="h3">Features</Text>
        <Text className="regular" opacity="50%">
          {text}
        </Text>
      </VStack>
      <VStack
        width={{ md: "100%", lg: "21.875rem" }}
        textColor="black.800"
        align="left"
        gap="2rem"
        flexDir={{ base: "column", md: "row", lg: "column" }}
      >
        <Text className="h3" width="100%">
          In the box
        </Text>
        <VStack align="left" width="100%">
          {includes.map((include) => {
            return (
              <HStack gap="1.5rem" key={include.item}>
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
