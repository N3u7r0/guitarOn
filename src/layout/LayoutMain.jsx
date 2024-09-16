import { NavBar } from "../components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import { RouterMain } from "../routes/RouterMain";
import { Footer } from "../components/Footer/Footer";
export const LayoutMain = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar  />
        <RouterMain />
      </BrowserRouter>
        <Footer />
    </>
  );
};