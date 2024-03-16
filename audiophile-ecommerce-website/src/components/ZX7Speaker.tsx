import { HStack, Text, VStack } from "@chakra-ui/react";
import Button2 from "./common/Button2";
import image from "../../assets/home/desktop/image-speaker-zx7.jpg";

const ZX7Speaker = () => {
  return (
    <HStack
      width="100%"
      justify="space-between"
      padding="5rem"
      bgImage={image}
      borderRadius="0.5rem"
    >
      <VStack align="left" gap="2.5rem">
        <Text className="h2" color="black.800">
          ZX7 SPEAKER
        </Text>
        <Button2 onClick={() => {}}>SEE PRODUCT</Button2>
      </VStack>
    </HStack>
  );
};

export default ZX7Speaker;
