import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        maxWidth: "100vw",
      },
      body: {
        color: "gray.900",
        backgroundColor: "gray.200",
      },
    },
  },
});

export default theme;
