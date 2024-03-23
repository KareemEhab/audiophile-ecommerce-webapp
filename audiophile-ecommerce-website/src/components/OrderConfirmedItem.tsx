import { HStack, Image, VStack, Text } from "@chakra-ui/react";
import { CartItem } from "../App";

interface Props {
  cartItem: CartItem;
}

const OrderConfirmedItem = ({ cartItem }: Props) => {
  return (
    <HStack
      width="12.375rem"
      height="3.125rem"
      justify="space-between"
      align="flex-start"
      paddingRight="0.5rem"
    >
      <Image
        maxW="3.125rem"
        maxH="3.125rem"
        src={cartItem.product.image.desktop}
        borderRadius="0.5rem"
      />
      <VStack
        width="100%"
        height="100%"
        justifyContent="center"
        align="left"
        gap={0}
        paddingLeft="0.5rem"
      >
        <Text className="regular" fontWeight="bold" color="black.800">
          {cartItem.product.name.split(" ")[0]}
        </Text>
        <Text
          fontSize="0.875rem"
          fontWeight="bold"
          color="black.800"
          opacity="50%"
        >
          $ {cartItem.product.price.toLocaleString()}
        </Text>
      </VStack>
      <Text
        fontSize="0.9375rem"
        fontWeight="bold"
        color="black.800"
        opacity="50%"
        marginTop="0.7rem"
      >
        x{cartItem.quantity}
      </Text>
    </HStack>
  );
};

export default OrderConfirmedItem;
