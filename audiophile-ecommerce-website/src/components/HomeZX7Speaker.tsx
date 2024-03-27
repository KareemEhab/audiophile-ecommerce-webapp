import { HStack, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import Button2 from "./common/Button2";
import { useNavigate } from "react-router-dom";

const ZX7Speaker = () => {
  const navigate = useNavigate();

  const bgImage = useBreakpointValue({
    base: "url(https://res.cloudinary.com/dhhfdtixq/image/upload/v1711123242/audiophile/home/mobile/at1xoikw1s1tyv3absdn.jpg)",
    md: "url(https://res.cloudinary.com/dhhfdtixq/image/upload/v1711123244/audiophile/home/tablet/a43h3goxf2ehykwgdz1s.jpg)",
    lg: "url(https://res.cloudinary.com/dhhfdtixq/image/upload/v1711123239/audiophile/home/desktop/kiqibrq8j0wdqqodnndf.jpg)",
  });

  return (
    <HStack
      width="100%"
      maxW="calc(100vw - 3rem)"
      justify="space-between"
      padding="5rem"
      bgImage={bgImage}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      borderRadius="0.5rem"
    >
      <VStack
        minW={{ base: "14rem", md: "fit-content" }}
        align="left"
        gap="2.5rem"
      >
        <Text className="h3" color="black.800">
          ZX7 SPEAKER
        </Text>
        <Button2
          onClick={() => {
            navigate("/speakers/zx7-speaker");
          }}
        >
          SEE PRODUCT
        </Button2>
      </VStack>
    </HStack>
  );
};

export default ZX7Speaker;
