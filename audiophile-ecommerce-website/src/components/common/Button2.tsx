import { Button } from "@chakra-ui/react";

interface Props {
  children: string;
  onClick: () => void;
}

const Button2 = ({ children, onClick }: Props) => {
  return (
    <Button
      width="10rem"
      height="3rem"
      fontFamily="Manrope"
      fontSize="13px"
      letterSpacing="1px"
      bg="0"
      color="black.800"
      borderColor="black.800"
      borderRadius={0}
      borderWidth="2px"
      _hover={{ bg: "black.800", color: "white.800" }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default Button2;
