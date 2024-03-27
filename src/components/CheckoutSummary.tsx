import { HStack, Text, VStack } from "@chakra-ui/react";
import Button1 from "./common/Button1";
import CheckoutSummaryProduct from "./CheckoutSummaryProduct";
import { CartItem } from "../App";

interface Props {
  setFormSubmit: (value: boolean) => void;
  cart: CartItem[];
}

const CheckoutSummary = ({ setFormSubmit, cart }: Props) => {
  const total = cart.reduce((total, cartItem) => {
    return total + cartItem.product.price * cartItem.quantity;
  }, 0);
  const vat = Number((total * 0.2).toFixed());
  const grandTotal = total + 50;

  return (
    <VStack
      width={{ base: "100%", lg: "21.875rem" }}
      maxH="38.25rem"
      bg="white.800"
      borderRadius="0.5rem"
      align="left"
      padding="2rem"
      gap="2rem"
    >
      <Text className="h6" color="black.800">
        Summary
      </Text>
      <VStack className="scrollable" gap="1rem" maxH="16rem" overflow="auto">
        {cart.map((cartItem) => (
          <CheckoutSummaryProduct
            key={cartItem.product.slug + cartItem.product.id}
            image={cartItem.product.image.desktop}
            name={cartItem.product.name.split(" ")[0]}
            price={cartItem.product.price}
            quantity={cartItem.quantity}
          />
        ))}
      </VStack>
      <VStack>
        <HStack width="100%" justify="space-between">
          <Text
            fontSize="0.9375rem"
            fontWeight="500"
            color="black.800"
            opacity="50%"
          >
            TOTAL
          </Text>
          <Text fontSize="18px" fontWeight="bold" color="black.800">
            $ {total.toLocaleString()}
          </Text>
        </HStack>
        <HStack width="100%" justify="space-between">
          <Text
            fontSize="0.9375rem"
            fontWeight="500"
            color="black.800"
            opacity="50%"
          >
            SHIPPING
          </Text>
          <Text fontSize="18px" fontWeight="bold" color="black.800">
            $ 50
          </Text>
        </HStack>
        <HStack width="100%" justify="space-between">
          <Text
            fontSize="0.9375rem"
            fontWeight="500"
            color="black.800"
            opacity="50%"
          >
            VAT (INCLUDED)
          </Text>
          <Text fontSize="18px" fontWeight="bold" color="black.800">
            $ {vat.toLocaleString()}
          </Text>
        </HStack>
        <HStack width="100%" justify="space-between" marginTop="0.75rem">
          <Text
            fontSize="0.9375rem"
            fontWeight="500"
            color="black.800"
            opacity="50%"
          >
            GRAND TOTAL
          </Text>
          <Text fontSize="18px" fontWeight="bold" color="orange.800">
            $ {grandTotal.toLocaleString()}
          </Text>
        </HStack>
      </VStack>
      <Button1
        onClick={() => {
          setFormSubmit(true);
        }}
        width="100%"
      >
        CONTINUE & PAY
      </Button1>
    </VStack>
  );
};

export default CheckoutSummary;
