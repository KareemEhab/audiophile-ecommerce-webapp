import { HStack, Image, VStack, Text } from "@chakra-ui/react";
import image from "../../assets/home/desktop/image-earphones-yx1.jpg";
import Button2 from "./common/Button2";
import { useNavigate } from "react-router-dom";

const YX1EarPhones = () => {
  const navigate = useNavigate();

  return (
    <HStack width="100%" height="20rem" justify="space-between">
      <Image src={image} borderRadius="0.5rem" />
      <VStack
        width="33.75rem"
        height="100%"
        align="left"
        justify="center"
        paddingX="6rem"
        gap="2.5rem"
        bg="white.600"
        borderRadius="0.5rem"
      >
        <Text className="h3" color="black.800" overflowWrap="normal">
          YX1 EARPHONES
        </Text>
        <Button2
          onClick={() => {
            navigate("/earphones/yx1-earphones");
          }}
        >
          SEE PRODUCT
        </Button2>
      </VStack>
    </HStack>
  );
};

export default YX1EarPhones;
