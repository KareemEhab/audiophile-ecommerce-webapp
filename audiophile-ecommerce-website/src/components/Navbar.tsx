import { HStack, Image, useDisclosure } from "@chakra-ui/react";
import Button4 from "./common/Button4";
import logo from "../../assets/shared/desktop/logo.svg";
import ShoppingCartButton from "./common/SVGImageButtons/ShoppingCart";
import CartModal from "./CartModal";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <HStack width="100%" position="absolute" justifyContent="center">
      <HStack
        width="69.4rem"
        justify="space-between"
        paddingY="2rem"
        borderBottom="1px solid gray"
      >
        <Image src={logo} />
        <HStack gap="2rem">
          <Button4
            onClick={() => {
              navigate("/");
            }}
          >
            HOME
          </Button4>
          <Button4
            onClick={() => {
              navigate("/headphones");
            }}
          >
            HEADPHONES
          </Button4>
          <Button4
            onClick={() => {
              navigate("/speakers");
            }}
          >
            SPEAKERS
          </Button4>
          <Button4
            onClick={() => {
              navigate("/earphones");
            }}
          >
            EARPHONES
          </Button4>
        </HStack>
        <ShoppingCartButton handleClick={onOpen} />
        <CartModal isOpen={isOpen} onClose={onClose} />
      </HStack>
    </HStack>
  );
};

export default Navbar;
