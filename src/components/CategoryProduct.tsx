import {
  HStack,
  Image,
  VStack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Button1 from "./common/Button1";
import { useNavigate } from "react-router-dom";
import { ProductImage } from "../hooks/useProducts";

interface Props {
  image: ProductImage;
  name: string;
  description: string;
  url: string;
  isNew?: boolean;
  invert?: boolean;
}

const CategoryProduct = ({
  image,
  name,
  description,
  url,
  isNew,
  invert,
}: Props) => {
  const navigate = useNavigate();
  const imageUrl = useBreakpointValue({
    base: image.mobile,
    md: image.tablet,
    lg: image.desktop,
  });
  const breakpointFont = useBreakpointValue({ base: "h4", md: "h2" });

  return (
    <HStack
      width="100%"
      align="center"
      justify="space-between"
      flexDirection={{ base: "column", lg: invert ? "row-reverse" : "row" }}
      gap={{ base: "3rem", lg: "10rem" }}
    >
      <Image
        src={imageUrl}
        width={{ base: "100%", lg: "33.75rem" }}
        maxW={{ lg: "40vw" }}
        borderRadius="0.5rem"
      />
      <VStack
        width={{ base: "100%", lg: "27.8rem" }}
        align={{ base: "center", lg: "flex-start" }}
        textAlign={{ base: "center", lg: "left" }}
        gap="2rem"
        paddingX={{ base: "2rem", md: "5rem", lg: 0 }}
      >
        <VStack align="inherit">
          {isNew && (
            <Text className="overline" color="orange.800">
              New Product
            </Text>
          )}
          <Text className={breakpointFont} color="black.800">
            {name}
          </Text>
        </VStack>
        <Text className="regular" color="black.800" opacity="50%">
          {description}
        </Text>
        <Button1
          onClick={() => {
            navigate(url);
          }}
        >
          SEE PRODUCT
        </Button1>
      </VStack>
    </HStack>
  );
};

export default CategoryProduct;
