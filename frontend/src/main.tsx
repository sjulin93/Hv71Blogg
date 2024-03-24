import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import * as React from "react";
import { ChakraProvider , extendTheme} from "@chakra-ui/react";

const colors = {
  blue : {
    800: '#2A4365',
    900: '#1A365D',
    hvBlue: '#0a2240'
  },
  white : {
    500: 'RGBA(255, 255, 255, 0.36)',
    600: 'RGBA(255, 255, 255, 0.48)'
  }
}

const body = {
  height: '100dvh'
}
const theme = extendTheme({colors, body});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme = {theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
