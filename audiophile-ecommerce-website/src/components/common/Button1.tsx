import { Button } from "@chakra-ui/react";

interface Props {
  children: string;
  onClick: () => void;
}

const Button1 = ({ children, onClick }: Props) => {
  return (
    <Button
      width="10rem"
      height="3rem"
      bg="orange.800"
      color="white.800"
      onClick={onClick}
      borderRadius={0}
      fontFamily="Manrope"
      fontSize="13px"
      letterSpacing="1px"
      _hover={{ bg: "orange.700" }}
    >
      {children}
    </Button>
  );
};

export default Button1;
