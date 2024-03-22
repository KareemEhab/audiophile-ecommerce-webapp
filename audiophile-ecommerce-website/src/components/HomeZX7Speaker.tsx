import { HStack, Text, VStack } from "@chakra-ui/react";
import Button2 from "./common/Button2";
import image from "../../assets/home/desktop/image-speaker-zx7.jpg";
import { useNavigate } from "react-router-dom";

const ZX7Speaker = () => {
  const navigate = useNavigate();

  return (
    <HStack
      width="100%"
      justify="space-between"
      padding="5rem"
      bgImage={image}
      borderRadius="0.5rem"
    >
      <VStack align="left" gap="2.5rem">
        <Text className="h3" color="black.800">
          ZX7 SPEAKER
        </Text>
        <Button2
          onClick={() => {
            navigate("/speakers/zx7-speaker");
          }}
        >
          SEE PRODUCT
        </Button2>
      </VStack>
    </HStack>
  );
};

export default ZX7Speaker;
