import { Button } from "@chakra-ui/react";

interface Props {
  children: string;
  onClick: () => void;
}

const Button1 = ({ children, onClick }: Props) => {
  return (
    <Button
      fontSize="0.81rem"
      bg="orange.800"
      color="white.800"
      onClick={onClick}
      borderRadius={0}
      padding="1.75rem"
      _hover={{ bg: "orange.700" }}
    >
      {children}
    </Button>
  );
};

export default Button1;
