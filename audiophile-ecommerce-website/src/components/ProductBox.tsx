import { HStack, Image, VStack, Text } from "@chakra-ui/react";
import Button1 from "./common/Button1";

interface Props {
  image: string;
  name: string;
  price: number;
  description: string;
  url: string;
  isNew?: boolean;
  count: number;
  setCount: (count: number) => void;
}

const ProductBox = ({
  image,
  name,
  price,
  description,
  url,
  isNew,
  count,
  setCount,
}: Props) => {
  return (
    <HStack width="100%" justify="space-between" gap="10rem">
      <Image src={image} width="33.75rem" borderRadius="0.5rem" />
      <VStack width="27.8rem" align="left" gap="2rem">
        <VStack align="inherit">
          {isNew && (
            <Text className="overline" color="orange.800">
              New Product
            </Text>
          )}
          <Text className="h2" color="black.800">
            {name}
          </Text>
        </VStack>
        <Text className="regular" color="black.800" opacity="50%">
          {description}
        </Text>
        <Text className="h6">$ {price.toLocaleString()}</Text>
        <HStack gap="1rem">
          <HStack
            width="7.5rem"
            height="3rem"
            bg="white.600"
            justify="space-between"
            paddingX="1.5rem"
            className="subtitle"
            textColor="black.800"
          >
            <Text
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
              }}
              opacity="25%"
              cursor="pointer"
              userSelect="none"
              _hover={{ color: "orange.800", opacity: 1 }}
            >
              -
            </Text>
            <Text>{count}</Text>
            <Text
              onClick={() => {
                if (count < 100) {
                  setCount(count + 1);
                }
              }}
              opacity="25%"
              cursor="pointer"
              userSelect="none"
              _hover={{ color: "orange.800", opacity: 1 }}
            >
              +
            </Text>
          </HStack>
          <Button1 onClick={() => {}}>ADD TO CART</Button1>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default ProductBox;
