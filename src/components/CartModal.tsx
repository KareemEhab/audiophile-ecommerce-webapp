import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { CartItem } from "../App";
import CartModalItem from "./CartModalItem";
import Button1 from "./common/Button1";
import { useNavigate } from "react-router-dom";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
}

const CartModal = ({ isOpen, onClose, cart, setCart }: Props) => {
  const navigate = useNavigate();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        paddingX="0"
        paddingY="1rem"
        width="23.56rem"
        minH="10rem"
        maxH="30.5rem"
        bg="white.700"
      >
        <ModalBody display="flex" justifyContent="center">
          {cart.length === 0 ? (
            <VStack spacing="4" alignSelf="center">
              <MdOutlineRemoveShoppingCart size={48} color="black.500" />
              <Text fontSize="xl" color="black.800" opacity="50%">
                Your cart is empty.
              </Text>
            </VStack>
          ) : (
            <VStack width="19.5625rem" gap="1.5rem">
              <HStack width="100%" justify="space-between">
                <Text className="h6" color="black.800">
                  Cart ({cart.length})
                </Text>
                <Text
                  className="regular"
                  fontSize="0.81rem"
                  fontWeight="bold"
                  textDecoration="underline"
                  color="black.800"
                  opacity="0.5"
                  cursor="pointer"
                  _hover={{ color: "orange.800", opacity: "1" }}
                  onClick={() => {
                    setCart([]);
                  }}
                >
                  Remove all
                </Text>
              </HStack>
              <VStack
                className="scrollable"
                maxH="14rem"
                width="100%"
                gap="1rem"
                overflow="auto"
              >
                {cart.map((cartItem) => (
                  <CartModalItem
                    key={cartItem.product.slug}
                    cartItem={cartItem}
                    setCart={setCart}
                  />
                ))}
              </VStack>
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
                  ${" "}
                  {cart
                    .reduce((total, cartItem) => {
                      return total + cartItem.product.price * cartItem.quantity;
                    }, 0)
                    .toLocaleString()}
                </Text>
              </HStack>
              <Button1
                onClick={() => {
                  navigate("/checkout");
                  onClose();
                }}
                width="100%"
              >
                CHECKOUT
              </Button1>
            </VStack>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CartModal;
