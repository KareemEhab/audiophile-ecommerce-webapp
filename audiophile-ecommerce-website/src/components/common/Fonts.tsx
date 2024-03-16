import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: "Manrope";
        src: url("../assets/font/Manrope-VariableFont_wght.ttf") format("truetype");
      }      
      `}
  />
);

export default Fonts;
