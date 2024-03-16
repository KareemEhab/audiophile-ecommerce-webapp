import { HStack, Text } from "@chakra-ui/react";

interface Props {
  children: string;
  onClick: () => void;
}

const Button4 = ({ children, onClick }: Props) => {
  return (
    <HStack onClick={onClick}>
      <Text
        className="subtitle"
        color="white.800"
        _hover={{ color: "orange.800", opacity: "1" }}
        cursor="pointer"
      >
        {children}
      </Text>
    </HStack>
  );
};

export default Button4;
