import { Button } from "@chakra-ui/react";

interface Props {
  children: string;
  onClick: () => void;
  width?: string;
}

const Button1 = ({ children, onClick, width }: Props) => {
  return (
    <Button
      width={width ? width : "10rem"}
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
