import { HStack, Image, VStack, Text } from "@chakra-ui/react";
import Button1 from "./common/Button1";
import { useNavigate } from "react-router-dom";

interface Props {
  image: string;
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

  return (
    <HStack
      width="100%"
      justify="space-between"
      flexDirection={invert ? "row-reverse" : "row"}
      gap="10rem"
    >
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
