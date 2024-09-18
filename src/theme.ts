import { extendTheme } from "@chakra-ui/react";
import '@fontsource/poppins';

const theme = extendTheme({
    fonts: {
        heading: `'Poppins', sans-serif`,
        body: `'Poppins', sans-serif`,
    },
    colors: {
        blue: {
          100: "#4B93D0",
        },
        gray: {
          100: '#FBFBFD',
          200: '#F6F6F6',
          900: '#12151A',
        },
        green: {
          300: "#07C961",
        },
      },
});

export default theme;
