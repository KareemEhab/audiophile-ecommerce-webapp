import { HStack, Text } from "@chakra-ui/react";
import arrowRightIcon from "../../../assets/shared/desktop/icon-arrow-right.svg";

interface Props {
  children: string;
  onClick: () => void;
}

const Button3 = ({ children, onClick }: Props) => {
  return (
    <HStack
      onClick={onClick}
      cursor="pointer"
      _hover={{ ".hoverable": { color: "orange.800", opacity: "1" } }}
    >
      <Text
        className="subtitle hoverable"
        fontSize="0.81rem"
        fontWeight="bold"
        color="black.800"
        opacity="0.5"
      >
        {children}
      </Text>
      <img
        src={arrowRightIcon}
        alt="Arrow Right Icon"
        style={{ marginLeft: "8px" }}
      />
    </HStack>
  );
};

export default Button3;
