import { HStack, Image, VStack, Text } from "@chakra-ui/react";

interface Props {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const CheckoutSummaryProduct = ({ image, name, price, quantity }: Props) => {
  return (
    <HStack
      width="100%"
      height="4rem"
      justify="space-between"
      align="flex-start"
      paddingRight="0.5rem"
    >
      <Image maxW="4rem" maxH="4rem" src={image} borderRadius="0.5rem" />
      <VStack
        width="100%"
        height="4rem"
        justifyContent="center"
        align="left"
        gap={0}
        paddingLeft="0.5rem"
      >
        <Text className="regular" fontWeight="bold" color="black.800">
          {name}
        </Text>
        <Text
          fontSize="0.875rem"
          fontWeight="bold"
          color="black.800"
          opacity="50%"
        >
          $ {price.toLocaleString()}
        </Text>
      </VStack>
      <Text
        fontSize="0.9375rem"
        fontWeight="bold"
        color="black.800"
        opacity="50%"
        marginTop="0.7rem"
      >
        x{quantity}
      </Text>
    </HStack>
  );
};

export default CheckoutSummaryProduct;
