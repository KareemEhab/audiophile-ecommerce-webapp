import {
  FormControl,
  RadioGroup,
  Radio,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useFormikContext } from "formik";
import { useState } from "react";
import FormField from "./common/FormField";

function CheckoutPaymentMethods() {
  const formik = useFormikContext();
  const [showEMoneyFields, setShowEMoneyFields] = useState(false);

  // Toggle e-Money fields visibility based on selected payment method
  const handlePaymentMethodChange = (value: string) => {
    setShowEMoneyFields(value === "e-Money");
  };

  return (
    <VStack width="100%" gap="1.5rem" align="left">
      <Text
        className="subtitle"
        color="orange.800"
        fontSize="0.75rem"
        fontWeight="bold"
      >
        Payment Details
      </Text>
      <HStack
        width="100%"
        maxW="calc(100vw - 3rem)"
        justify="space-between"
        align="flex-start"
        gap="1rem"
        flexDir={{ base: "column", md: "row" }}
      >
        <Text
          width="100%"
          fontSize="0.75rem"
          fontWeight="bold"
          color="black.800"
        >
          Payment Method
        </Text>
        <FormControl>
          <RadioGroup
            name="paymentMethod"
            defaultValue="cashOnDelivery"
            width="100%"
            onChange={(value) => {
              formik.setFieldValue("paymentMethod", value);
              handlePaymentMethodChange(value);
            }}
          >
            <HStack
              width={{ md: "19.3125rem" }}
              height="3.5rem"
              borderWidth="2px"
              borderRadius="0.5rem"
              borderColor={showEMoneyFields ? "orange.800" : "white.500"}
              padding="1rem"
              _hover={{
                borderColor: "orange.800",
                transition: "border-color 0.3s ease",
              }}
            >
              <Radio
                width="100%"
                value="e-Money"
                _checked={{ bg: "orange.800" }}
              >
                <Text fontSize="14px" fontWeight="bold" color="black.800">
                  e-Money
                </Text>
              </Radio>
            </HStack>
            <HStack
              width={{ md: "19.3125rem" }}
              height="3.5rem"
              borderWidth="2px"
              borderRadius="0.5rem"
              borderColor={!showEMoneyFields ? "orange.800" : "white.500"}
              fontSize="14px"
              fontWeight="bold"
              color="black.800"
              padding="1rem"
              marginTop="1rem"
              _hover={{
                borderColor: "orange.800",
                transition: "border-color 0.3s ease",
              }}
            >
              <Radio
                width="100%"
                value="cashOnDelivery"
                _checked={{ bg: "orange.800", boxShadow: "0 0 0 2px white" }}
              >
                <Text fontSize="14px" fontWeight="bold" color="black.800">
                  Cash on Delivery
                </Text>
              </Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
      </HStack>

      {showEMoneyFields ? (
        <HStack
          width="100%"
          justify="space-between"
          flexDir={{ base: "column", md: "row" }}
        >
          <FormField
            label="e-Money Number"
            name="eMoneyNumber"
            placeholder="238521993"
          />
          <FormField label="e-Money PIN" name="eMoneyPIN" placeholder="6891" />
        </HStack>
      ) : (
        <HStack
          width="100%"
          justify="space-between"
          flexDir={{ base: "column", md: "row" }}
        >
          <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938H9.844c-.777 0-1.406.63-1.406 1.406v15.6a14.053 14.053 0 0 0-7.824 3.089 1.406 1.406 0 1 0 1.772 2.185 11.226 11.226 0 0 1 7.048-2.499h3.129c.775 0 1.406.63 1.406 1.406 0 .776-.631 1.407-1.406 1.407H8.436a1.406 1.406 0 0 0 0 2.812h13.728a4.226 4.226 0 0 1-3.977 2.813H1.405a1.406 1.406 0 0 0 0 2.812h16.782c3.395 0 6.236-2.42 6.89-5.625h7.36c.776 0 1.406-.63 1.406-1.406V25.312h9.843c.777 0 1.407-.63 1.407-1.406V11.25h1.5a1.406 1.406 0 0 0 0-2.813ZM33.61 17.599a1.404 1.404 0 0 0-1.172-.63h-3.085c-1.084-1.834.241-4.172 2.381-4.172 2.531 0 3.708 3.115 1.876 4.802ZM21.188 8.437h14.06c-.744 1.03-1.057 1.305-1.352 1.983-4.216-1.779-8.726 2.057-7.559 6.549h-5.15V8.437ZM19.78 19.782h2.813v5.625H19.78v-5.625Zm11.25 19.782h-14.49c.969-2.735-1.07-5.626-3.979-5.626H11.25V19.782h5.719v7.032c0 .776.63 1.406 1.406 1.406H24c.777 0 1.406-.63 1.406-1.407v-7.03h5.625v19.78ZM33.844 22.5v-1.771a5.56 5.56 0 0 0 3.453-4.769 3.954 3.954 0 0 0 3.424-1.611l1.56-2.127V22.5h-8.437Z"
              fill="#D87D4A"
            />
          </svg>
          <Text
            className="regular"
            width={{ md: "34.625rem" }}
            color="black.800"
            opacity="50%"
          >
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </Text>
        </HStack>
      )}
    </VStack>
  );
}

export default CheckoutPaymentMethods;
