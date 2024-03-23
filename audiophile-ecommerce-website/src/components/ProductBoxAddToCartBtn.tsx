import { useToast } from "@chakra-ui/react";
import Button1 from "./common/Button1";
import { CartItem } from "../App";
import { Product } from "../hooks/useProducts";
import { Dispatch, SetStateAction } from "react";

interface Props {
  product: Product;
  count: number;
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
}

const ProductBoxAddToCartBtn = ({ product, count, cart, setCart }: Props) => {
  const toast = useToast();

  const addToCart = () => {
    // Check if the product is already in the cart
    const existingCartItem = cart.find(
      (item) => item.product.name === product.name
    );
    if (existingCartItem) {
      toast({
        title: "Item Already in Cart",
        description: `${product.name} is already in your cart.`,
        status: "warning",
        colorScheme: "yellow",
        duration: 3000,
        isClosable: true,
        position: "bottom-right",
      });
      return;
    }

    // If the item is not in the cart, add it
    const newCartItem: CartItem = {
      product: product,
      quantity: count,
    };

    setCart((prevCart) => {
      toast({
        title: "Item Added to Cart",
        description: `${product.name} has been added to your cart.`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom-right",
      });
      return [...prevCart, newCartItem];
    });
  };

  return <Button1 onClick={addToCart}>ADD TO CART</Button1>;
};

export default ProductBoxAddToCartBtn;
