import { Routes, Route } from "react-router-dom";
import { ChakraProvider, ThemeProvider, theme, ColorModeProvider, CSSReset } from "@chakra-ui/react";
import Home from "./pages/Home";
import QRCode from "./pages/QRCode";
import Passwd from "./pages/Passwd";
import Base64 from "./pages/Base64";
import Notfound from "./pages/NotFound";

function App() {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qrcode" element={<QRCode />} />
            <Route path="/base64" element={<Base64 />} />
            <Route path="/passwd" element={<Passwd />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </ColorModeProvider>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
