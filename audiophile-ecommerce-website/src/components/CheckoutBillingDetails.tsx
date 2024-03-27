import { VStack, SimpleGrid, Text } from "@chakra-ui/react";
import FormField from "./common/FormField";

const CheckoutBillingDetails = () => {
  return (
    <VStack width="100%" align="left" gap="1rem">
      <Text className="subtitle" color="orange.800">
        Billing Details
      </Text>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        width="100%"
        spacingX="inherit"
        spacingY="1rem"
      >
        <FormField label="Name" name="billingName" placeholder="Alexei Ward" />
        <FormField
          label="Email Address"
          name="emailAddress"
          placeholder="alexei@mail.com"
        />
        <FormField
          label="Phone Number"
          name="phoneNumber"
          placeholder="+1 202-555-0136"
        />
      </SimpleGrid>
    </VStack>
  );
};

export default CheckoutBillingDetails;
