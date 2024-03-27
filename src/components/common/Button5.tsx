import { Button } from "@chakra-ui/react";

interface Props {
  children: string;
  onClick: () => void;
}

const Button5 = ({ children, onClick }: Props) => {
  return (
    <Button
      width="10rem"
      height="3rem"
      bg="black.800"
      color="white.800"
      borderRadius={0}
      onClick={onClick}
      fontFamily="Manrope"
      fontSize="13px"
      letterSpacing="1px"
      _hover={{ bg: "gray.800" }}
    >
      {children}
    </Button>
  );
};

export default Button5;
