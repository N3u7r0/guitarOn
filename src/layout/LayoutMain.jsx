import { BrowserRouter } from "react-router-dom";
import { RouterMain } from "../routes/RouterMain";
import { NavBar } from "../components";
import { Footer } from "../components";

export const LayoutMain = () => {
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <RouterMain />
      </BrowserRouter>
      <Footer  />
    </>
  );
};
