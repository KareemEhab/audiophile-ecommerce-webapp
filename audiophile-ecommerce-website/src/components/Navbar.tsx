import { HStack, Image, useDisclosure, Text } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import ShoppingCartButton from "./common/SVGImageButtons/ShoppingCart";
import CartModal from "./CartModal";
import { useNavigate } from "react-router-dom";
import Button4 from "./common/Button4";
import logo from "../../assets/shared/desktop/logo.svg";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem("audiophile-token");
    // Navigate to the login page
    navigate("/login");
  };

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
        <HStack gap="3rem">
          <ShoppingCartButton handleClick={onOpen} />
          <Text
            fontSize="1.25rem"
            color="white.800"
            onClick={handleLogout}
            _hover={{ color: "orange.800" }}
            cursor="pointer"
          >
            <FiLogOut />
          </Text>
        </HStack>
        <CartModal isOpen={isOpen} onClose={onClose} />
      </HStack>
    </HStack>
  );
};

export default Navbar;
