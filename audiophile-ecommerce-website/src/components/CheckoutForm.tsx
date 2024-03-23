import { VStack, Text, useDisclosure } from "@chakra-ui/react";
import { Formik, Form, FormikValues } from "formik";
import * as Yup from "yup";
import CheckoutPaymentMethods from "../components/CheckoutPaymentMethods";
import CheckoutBillingDetails from "./CheckoutBillingDetails";
import CheckoutShippingInfo from "./CheckoutShippingInfo";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import OrderConfirmedModal from "./OrderConfirmedModal";
import { CartItem } from "../App";

interface Props {
  formSubmit: boolean;
  setFormSubmit: (value: boolean) => void;
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
}

function CheckoutForm({ formSubmit, setFormSubmit, cart, setCart }: Props) {
  const initialValues = {
    billingName: "",
    emailAddress: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "cashOnDelivery",
    eMoneyNumber: "",
    eMoneyPIN: "",
  };

  const validationSchema = Yup.object().shape({
    billingName: Yup.string().required("Required"),
    emailAddress: Yup.string().email("Wrong format").required("Required"),
    phoneNumber: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    zipCode: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    paymentMethod: Yup.string().required("Required"),
    eMoneyNumber: Yup.string()
      .nullable()
      .when("paymentMethod", {
        is: "e-Money",
        then: Yup.string().required("Required"),
        otherwise: Yup.string(),
      }),
    eMoneyPIN: Yup.string()
      .nullable()
      .when("paymentMethod", {
        is: "e-Money",
        then: Yup.string().required("Required"),
        otherwise: Yup.string(),
      }),
  });

  const formikRef = useRef<any>(null);

  useEffect(() => {
    if (formSubmit) {
      formikRef.current.submitForm();
      setFormSubmit(false); // Reset the formSubmit flag after submission
    }
  }, [formSubmit, setFormSubmit]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = (values: FormikValues) => {
    // Handle form submission logic here
    console.log(values);
    onOpen();
  };

  return (
    <VStack
      width="45.625rem"
      height="70.375rem"
      bg="white.800"
      borderRadius="0.5rem"
      align="flex-start"
      padding="3rem"
      gap="3rem"
    >
      <Text className="h2" color="black.800">
        Checkout
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        innerRef={formikRef}
      >
        <Form>
          <VStack width="100%" align="start" spacing={4} gap="3rem">
            <CheckoutBillingDetails />
            <CheckoutShippingInfo />
            <CheckoutPaymentMethods />
          </VStack>
        </Form>
      </Formik>
      <OrderConfirmedModal
        isOpen={isOpen}
        onClose={onClose}
        cart={cart}
        setCart={setCart}
      />
    </VStack>
  );
}

export default CheckoutForm;
