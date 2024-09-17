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
          100: '#F6F6F6',
        },
        green: {
          300: "#07C961",
        },
      },
});

export default theme;
