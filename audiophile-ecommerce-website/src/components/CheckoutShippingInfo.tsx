import { VStack, SimpleGrid, Text } from "@chakra-ui/react";
import FormField from "./common/FormField";

const CheckoutShippingInfo = () => {
  return (
    <VStack width="100%" align="left" gap="1rem">
      <Text className="subtitle" color="orange.800">
        Shipping Info
      </Text>
      <FormField
        width="100%"
        label="Address"
        name="address"
        placeholder="1137 Williams Avenue"
      />
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        width="100%"
        spacingX="inherit"
        spacingY="1rem"
        alignItems="center"
      >
        <FormField label="ZIP Code" name="zipCode" placeholder="10001" />
        <FormField label="City" name="city" placeholder="New York" />
        <FormField label="Country" name="country" placeholder="United States" />
      </SimpleGrid>
    </VStack>
  );
};

export default CheckoutShippingInfo;
