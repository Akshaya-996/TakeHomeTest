import React from "react";
import { GlobalStyles } from "./styles/globalStyles";
import HotelsPage from "./pages/hotelpage/HotelPage";

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <HotelsPage />
  </>
);

export default App;