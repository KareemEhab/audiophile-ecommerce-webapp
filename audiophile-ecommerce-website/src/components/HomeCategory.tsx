import { Image, Text, VStack } from "@chakra-ui/react";
import Button3 from "./common/Button3";

interface Props {
  imageURL: string;
  header: string;
  route: string;
}

const HomeCategory = ({ imageURL, header, route }: Props) => {
  return (
    <VStack
      bg="white.600"
      width="21.9rem"
      maxH="10rem"
      borderRadius="0.5rem"
      marginTop="10rem"
    >
      <VStack position="relative" top="-4rem" gap={0}>
        <Image src={imageURL} height="10rem" />
        <Text fontWeight="bold" marginBottom="0.75rem">
          {header}
        </Text>
        <Button3
          onClick={() => {
            route;
          }}
        >
          SHOP
        </Button3>
      </VStack>
    </VStack>
  );
};

export default HomeCategory;
