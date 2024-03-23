import { HStack, Image, VStack, Text } from "@chakra-ui/react";
import { CartItem } from "../App";
import { Product } from "../hooks/useProducts";
import { Dispatch, SetStateAction } from "react";
import ProductBoxAddToCartBtn from "./ProductBoxAddToCartBtn";

interface Props {
  product: Product;
  count: number;
  setCount: (count: number) => void;
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
}

const ProductBox = ({ product, count, setCount, cart, setCart }: Props) => {
  return (
    <HStack width="100%" justify="space-between" gap="10rem">
      <Image
        src={product.image.desktop}
        width="33.75rem"
        borderRadius="0.5rem"
      />
      <VStack width="27.8rem" align="left" gap="2rem">
        <VStack align="inherit">
          {product.new && (
            <Text className="overline" color="orange.800">
              New Product
            </Text>
          )}
          <Text className="h2" color="black.800">
            {product.name}
          </Text>
        </VStack>
        <Text className="regular" color="black.800" opacity="50%">
          {product.description}
        </Text>
        <Text className="h6">$ {product.price.toLocaleString()}</Text>
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
          <ProductBoxAddToCartBtn
            product={product}
            count={count}
            cart={cart}
            setCart={setCart}
          />
        </HStack>
      </VStack>
    </HStack>
  );
};

export default ProductBox;
