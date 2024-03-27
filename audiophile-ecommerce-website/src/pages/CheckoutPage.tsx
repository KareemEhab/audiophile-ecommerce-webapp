import { Box, HStack, VStack } from "@chakra-ui/react";
import CheckoutForm from "../components/CheckoutForm";
import CheckoutSummary from "../components/CheckoutSummary";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Button6 from "../components/common/Button6";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../App";

interface Props {
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
}

const CheckoutPage = ({ cart, setCart }: Props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (cart.length === 0) navigate("/");
  }, [cart]);

  const [formSubmit, setFormSubmit] = useState(false);

  const goBack = () => {
    navigate(-1); // Navigate back to the previous route
  };

  return (
    <VStack width="100%" overflow="hidden" bg="#F2F2F2">
      <Box minW="100vw" height="5.6rem" bg="black.800"></Box>
      <VStack
        width="69.4rem"
        maxW="calc(100vw - 3rem)"
        align="left"
        marginY="5rem"
        gap="2rem"
      >
        <Button6 onClick={goBack}>Go Back</Button6>
        <HStack
          width="100%"
          justify="space-between"
          align={{ base: "center", lg: "flex-start" }}
          gap={{ base: "2rem", lg: 1 }}
          flexDir={{ base: "column", lg: "row" }}
        >
          <CheckoutForm
            formSubmit={formSubmit}
            setFormSubmit={setFormSubmit}
            cart={cart}
            setCart={setCart}
          />
          <CheckoutSummary setFormSubmit={setFormSubmit} cart={cart} />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default CheckoutPage;
