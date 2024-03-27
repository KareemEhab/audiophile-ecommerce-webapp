import { Box, VStack } from "@chakra-ui/react";
import ProductBox from "../components/ProductBox";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ProductFeatures from "../components/ProductFeatures";
import ProductGalleryComponent from "../components/ProductGallery";
import ProductOthers from "../components/ProductOthers";
import AudioPhileDescription from "../components/common/AudioPhileDescription";
import Categories from "../components/common/Categories";
import Button6 from "../components/common/Button6";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import useProducts, { Product } from "../hooks/useProducts";
import { CartItem } from "../App";

interface Props {
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
}

const ProductPage = ({ cart, setCart }: Props) => {
  const [product, setProduct] = useState<Product>();
  const { getProduct } = useProducts();
  const [productCount, setCount] = useState(1);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const params = useParams();
  const { category, slug } = params;

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProduct(
        category ? category : "",
        slug ? slug : ""
      );
      setProduct(productData);
    };

    fetchProduct();
  }, [category, slug]);

  if (!product) return null;

  return (
    <VStack maxW="100%" overflow="hidden">
      <Box minW="100vw" height="5.6rem" bg="black.800"></Box>
      <VStack
        width="69.4rem"
        maxW="calc(100vw - 3rem)"
        marginTop="5rem"
        gap="2.5rem"
        align="left"
      >
        <Button6 onClick={goBack}>Go Back</Button6>
        <VStack width="100%" maxW="calc(100vw - 3rem)" gap="10rem" align="left">
          <ProductBox
            product={product}
            count={productCount}
            setCount={setCount}
            cart={cart}
            setCart={setCart}
          />
          <ProductFeatures
            includes={product.includes}
            text={product.features}
          />
          <ProductGalleryComponent gallery={product.gallery} />
          <ProductOthers others={product.others} />
        </VStack>
      </VStack>
      <VStack maxW="69.4rem" marginTop="15rem" gap={0}>
        <Categories />
        <AudioPhileDescription />
      </VStack>
    </VStack>
  );
};

export default ProductPage;
