import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Manrope, sans-serif",
    body: "Manrope, sans-serif",
  },
  colors: {
    white: {
      400: "#979797",
      500: "#CFCFCF",
      600: "#F1F1F1",
      700: "#FAFAFA",
      800: "#FFFFFF",
    },

    black: {
      700: "#101010",
      800: "#000000",
    },
    orange: {
      700: "#FBAF85",
      800: "#D87D4A",
    },
    gray: {
      800: "#4C4C4C",
    },
    red: "#CD2C2C",
  },
});

export default theme;
