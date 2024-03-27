import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Text,
  VStack,
  HStack,
  ModalHeader,
  Image,
  Divider,
} from "@chakra-ui/react";
import { CartItem } from "../App";
import Button1 from "./common/Button1";
import { useNavigate } from "react-router-dom";
import OrderConfirmedItem from "./OrderConfirmedItem";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
}

const OrderConfirmedModal = ({ isOpen, onClose, cart, setCart }: Props) => {
  const navigate = useNavigate();
  const [showOtherItems, setShowOtherItems] = useState(false);

  const total = cart.reduce((total, cartItem) => {
    return total + cartItem.product.price * cartItem.quantity;
  }, 0);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        paddingX="1rem"
        paddingY={{ md: "1rem" }}
        width="33.75rem"
        maxW="calc(100vw - 5rem)"
        minH={{ base: "70vh", md: "36.3125rem" }}
        bg="white.700"
      >
        <ModalHeader></ModalHeader>
        <ModalBody display="flex" justifyContent="center">
          <VStack align="left" gap="2rem">
            <Image
              src="https://res.cloudinary.com/dhhfdtixq/image/upload/v1711123238/audiophile/checkout/spk9veb7sicfjb8qcopg.svg"
              maxW="4rem"
            />
            <Text className="h3" maxW="17.75rem" color="black.800">
              Thank you for your order
            </Text>
            <Text className="regular" color="black.800" opacity="50%">
              You will receive an email confirmation shortly.
            </Text>
            <HStack
              width="100%"
              minH="8.75rem"
              borderRadius="0.5rem"
              gap={0}
              flexDir={{ base: "column", md: "row" }}
            >
              <VStack
                width={{ base: "100%", md: "15.375rem" }}
                minH="100%"
                overflow="auto"
                bg="white.600"
                justify="center"
                paddingY="1rem"
              >
                <OrderConfirmedItem cartItem={cart[0]} />
                {cart.length > 1 && (
                  <>
                    {showOtherItems &&
                      cart.map(
                        (cartItem, index) =>
                          index !== 0 && (
                            <OrderConfirmedItem
                              key={cartItem.product.id + cartItem.product.slug}
                              cartItem={cartItem}
                            />
                          )
                      )}
                    <Divider width="12.375rem" color="black.800" opacity="1" />
                    <Text
                      fontSize="0.75rem"
                      fontWeight="bold"
                      color="black"
                      opacity="0.5"
                      cursor="pointer"
                      _hover={{ color: "orange.800", opacity: "1" }}
                      userSelect="none"
                      onClick={() => {
                        setShowOtherItems(!showOtherItems);
                      }}
                    >
                      {showOtherItems
                        ? "View less"
                        : `and ${cart.length - 1} other item(s)`}
                    </Text>
                  </>
                )}
              </VStack>
              <VStack
                width={{ base: "100%", md: "12.375rem" }}
                height="100%"
                bg="black.800"
                align="left"
                justify="flex-end"
                padding="1.5rem"
              >
                <Text className="regular" color="white.800" opacity="50%">
                  GRAND TOTAL
                </Text>
                <Text className="h6" color="white.800">
                  $ {(total + 50).toLocaleString()}
                </Text>
              </VStack>
            </HStack>
            <HStack marginTop={{ base: "4rem", md: "0" }}></HStack>
            <Button1
              width="100%"
              onClick={() => {
                setCart([]);
                onClose();
                navigate("/");
              }}
            >
              BACK TO HOME
            </Button1>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default OrderConfirmedModal;
