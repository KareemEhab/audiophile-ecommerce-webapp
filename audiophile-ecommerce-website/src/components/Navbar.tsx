import { HStack, Image } from "@chakra-ui/react";
import Button4 from "./common/Button4";
import logo from "../../assets/shared/desktop/logo.svg";
import ShoppingCartButton from "./common/ShoppingCart/ShoppingCartButton";

const Navbar = () => {
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
          <Button4 onClick={() => {}}>HOME</Button4>
          <Button4 onClick={() => {}}>HEADPHONES</Button4>
          <Button4 onClick={() => {}}>SPEAKERS</Button4>
          <Button4 onClick={() => {}}>EARPHONES</Button4>
        </HStack>
        <ShoppingCartButton />
      </HStack>
    </HStack>
  );
};

export default Navbar;
