import { HStack, Text } from "@chakra-ui/react";

interface Props {
  children: string;
  onClick: () => void;
}

const Button6 = ({ children, onClick }: Props) => {
  return (
    <HStack
      onClick={onClick}
      cursor="pointer"
      _hover={{ ".hoverable": { color: "orange.800", opacity: "1" } }}
    >
      <Text
        className="regular hoverable"
        fontSize="0.81rem"
        fontWeight="bold"
        color="black.800"
        opacity="0.5"
      >
        {children}
      </Text>
    </HStack>
  );
};

export default Button6;
