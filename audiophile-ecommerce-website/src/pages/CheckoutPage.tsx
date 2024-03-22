import { Box, HStack, VStack } from "@chakra-ui/react";
import CheckoutForm from "../components/CheckoutForm";
import CheckoutSummary from "../components/CheckoutSummary";
import { useState } from "react";
import Button6 from "../components/common/Button6";

const CheckoutPage = () => {
  const [formSubmit, setFormSubmit] = useState(false);

  return (
    <VStack maxW="100%" overflow="hidden" bg="#F2F2F2">
      <Box minW="100vw" height="5.6rem" bg="black.800"></Box>
      <VStack width="69.4rem" align="left" marginY="5rem" gap="2rem">
        <Button6 onClick={() => {}}>Go Back</Button6>
        <HStack width="100%" justify="space-between" align="flex-start">
          <CheckoutForm formSubmit={formSubmit} setFormSubmit={setFormSubmit} />
          <CheckoutSummary setFormSubmit={setFormSubmit} />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default CheckoutPage;