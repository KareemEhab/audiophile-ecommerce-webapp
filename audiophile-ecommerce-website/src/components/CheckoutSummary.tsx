import { HStack, Text, VStack } from "@chakra-ui/react";
import Button1 from "./common/Button1";
import data from "../../../starter-code/data.json";
import CheckoutSummaryProduct from "./CheckoutSummaryProduct";

interface Props {
  setFormSubmit: (value: boolean) => void;
}

const CheckoutSummary = ({ setFormSubmit }: Props) => {
  return (
    <VStack
      width="21.875rem"
      height="38.25rem"
      bg="white.800"
      borderRadius="0.5rem"
      align="left"
      padding="2rem"
      gap="2rem"
    >
      <Text className="h6" color="black.800">
        Summary
      </Text>
      <VStack className="scrollable" gap="1rem" height="16rem" overflow="auto">
        <CheckoutSummaryProduct
          image={data[0].image.desktop}
          name={data[3].name.split(" ")[0]}
          price={data[0].price}
          quantity={1}
        />
        <CheckoutSummaryProduct
          image={data[0].image.desktop}
          name={data[0].name}
          price={data[0].price}
          quantity={1}
        />
        <CheckoutSummaryProduct
          image={data[0].image.desktop}
          name={data[0].name}
          price={data[0].price}
          quantity={1}
        />
        <CheckoutSummaryProduct
          image={data[0].image.desktop}
          name={data[0].name}
          price={data[0].price}
          quantity={1}
        />
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
            $ 5,312
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
            $ 5,312
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
            $ 5,312
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
            $ 5,312
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
