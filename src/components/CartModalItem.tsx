import { HStack, Image, VStack, Text } from "@chakra-ui/react";
import { CartItem } from "../App";
import { Dispatch, SetStateAction } from "react";

interface Props {
  cartItem: CartItem;
  setCart: Dispatch<SetStateAction<CartItem[]>>;
}

const CartModalItem = ({ cartItem, setCart }: Props) => {
  return (
    <HStack width="100%" height="4rem" justify="space-between" align="center">
      <Image
        maxW="4rem"
        maxH="4rem"
        src={cartItem.product.image.desktop}
        borderRadius="0.5rem"
      />
      <VStack
        width="100%"
        height="4rem"
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
      <HStack
        minW="6rem"
        height="2rem"
        bg="white.600"
        justify="space-between"
        gap="1rem"
        padding="1rem"
        className="subtitle"
        textColor="black.800"
      >
        <Text
          onClick={() => {
            if (cartItem.quantity > 1) {
              setCart((prevCart) => {
                const updatedCart = prevCart.map((item) => {
                  if (item.product.id === cartItem.product.id) {
                    return {
                      ...item,
                      quantity: item.quantity - 1,
                    };
                  }
                  return item;
                });
                return updatedCart;
              });
            } else {
              // Remove item from cart if quantity is 0
              setCart((prevCart) =>
                prevCart.filter(
                  (item) => item.product.name !== cartItem.product.name
                )
              );
            }
          }}
          opacity="25%"
          cursor="pointer"
          userSelect="none"
          _hover={{ color: "orange.800", opacity: 1 }}
        >
          -
        </Text>
        <Text>{cartItem.quantity}</Text>
        <Text
          onClick={() => {
            if (cartItem.quantity < 100) {
              setCart((prevCart) => {
                const updatedCart = prevCart.map((item) => {
                  if (item.product.name === cartItem.product.name) {
                    return {
                      ...item,
                      quantity: item.quantity + 1,
                    };
                  }
                  return item;
                });
                return updatedCart;
              });
            }
          }}
          opacity="25%"
          cursor="pointer"
          userSelect="none"
          _hover={{ color: "orange.800", opacity: 1 }}
        >
          +
        </Text>
      </HStack>
    </HStack>
  );
};

export default CartModalItem;
