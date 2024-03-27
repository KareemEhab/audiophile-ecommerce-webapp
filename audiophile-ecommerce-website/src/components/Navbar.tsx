import {
  HStack,
  Image,
  useDisclosure,
  Text,
  VStack,
  Box,
  Show,
} from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import ShoppingCartButton from "./common/SVGImageButtons/ShoppingCart";
import CartModal from "./CartModal";
import { useNavigate } from "react-router-dom";
import Button4 from "./common/Button4";
import logo from "../../assets/shared/desktop/logo.svg";
import { CartItem } from "../App";
import { Dispatch, SetStateAction } from "react";
import Categories from "./common/Categories";

interface Props {
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
}

const Navbar = ({ cart, setCart }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isMenuOpen, onToggle: onMenuToggle } = useDisclosure();
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem("audiophile-token");
    // Navigate to the login page
    navigate("/login");
  };

  return (
    <HStack width="100%" position="absolute" justifyContent="center" zIndex="1">
      <HStack
        width="69.4rem"
        maxW="calc(100vw - 3rem)"
        marginInline="auto"
        justify="space-between"
        paddingY="2rem"
        borderBottom="1px solid gray"
      >
        {/* Hamburger Menu Button for Base and MD Screens */}
        {isMenuOpen && (
          <VStack
            position="absolute"
            top="5rem"
            left="0"
            width="100%"
            height="fit-content"
            justify="center"
            paddingX="2rem"
            paddingTop="7rem"
            paddingBottom="4rem"
            bg="white.800"
            zIndex="2"
            onClick={onMenuToggle}
          >
            <Categories />
          </VStack>
        )}
        <HStack gap="2rem">
          <Box display={{ base: "block", lg: "none" }} onClick={onMenuToggle}>
            <Image src="https://res.cloudinary.com/dhhfdtixq/image/upload/v1711123294/audiophile/shared/tablet/nzrc8vwm5qgguepobdvb.svg" />
          </Box>
          {/* Logo */}
          <Image
            src={logo}
            justifySelf="flex-start"
            onClick={() => navigate("/")}
          />
        </HStack>
        {/* Main Navigation */}
        <Show above="lg">
          <HStack gap="2rem">
            <Button4 onClick={() => navigate("/")}>HOME</Button4>
            <Button4 onClick={() => navigate("/headphones")}>
              HEADPHONES
            </Button4>
            <Button4 onClick={() => navigate("/speakers")}>SPEAKERS</Button4>
            <Button4 onClick={() => navigate("/earphones")}>EARPHONES</Button4>
          </HStack>
        </Show>
        {/* Additional Navigation Items */}
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
        {/* Cart Modal */}
        <CartModal
          isOpen={isOpen}
          onClose={onClose}
          cart={cart}
          setCart={setCart}
        />
      </HStack>
    </HStack>
  );
};

export default Navbar;
