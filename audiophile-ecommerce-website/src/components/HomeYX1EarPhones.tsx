import {
  HStack,
  Image,
  VStack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Button2 from "./common/Button2";
import { useNavigate } from "react-router-dom";

const YX1EarPhones = () => {
  const navigate = useNavigate();
  const image = useBreakpointValue({
    base: "https://res.cloudinary.com/dhhfdtixq/image/upload/v1711123240/audiophile/home/mobile/nmisnnaqnypolw15k72r.jpg",
    md: "https://res.cloudinary.com/dhhfdtixq/image/upload/v1711123243/audiophile/home/tablet/repfuyaigxmivoxe7emt.jpg",
    lg: "https://res.cloudinary.com/dhhfdtixq/image/upload/v1711123238/audiophile/home/desktop/potu8kbi3dmhyxpsnsjd.jpg",
  });

  return (
    <HStack
      width="100%"
      maxW="calc(100vw - 3rem)"
      height={{ md: "20rem" }}
      justify="space-between"
      gap={{ base: "1rem" }}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Image
        maxW={{ sm: "20.4rem", md: "21.1rem", lg: "100%" }}
        src={image}
        borderRadius="0.5rem"
      />
      <VStack
        width="100%"
        height={{ base: "12.5rem", md: "100%" }}
        align="left"
        justify="center"
        paddingX={{ base: "2rem", lg: "6rem" }}
        gap="2.5rem"
        bg="white.600"
        borderRadius="0.5rem"
      >
        <Text className="h3" color="black.800" overflowWrap="normal">
          YX1 EARPHONES
        </Text>
        <Button2
          onClick={() => {
            navigate("/earphones/yx1-earphones");
          }}
        >
          SEE PRODUCT
        </Button2>
      </VStack>
    </HStack>
  );
};

export default YX1EarPhones;
