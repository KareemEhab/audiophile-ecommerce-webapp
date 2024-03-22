import { Image, Text, VStack } from "@chakra-ui/react";
import Button3 from "./common/Button3";
import { useNavigate } from "react-router-dom";

interface Props {
  imageURL: string;
  header: string;
  route: string;
}

const CategoryThumbnail = ({ imageURL, header, route }: Props) => {
  const navigate = useNavigate();

  return (
    <VStack bg="white.600" width="21.9rem" maxH="10rem" borderRadius="0.5rem">
      <VStack position="relative" top="-4.5rem" gap={0}>
        <Image src={imageURL} height="10rem" />
        <Text fontWeight="bold" marginBottom="0.75rem">
          {header}
        </Text>
        <Button3
          onClick={() => {
            navigate(route);
          }}
        >
          SHOP
        </Button3>
      </VStack>
    </VStack>
  );
};

export default CategoryThumbnail;
