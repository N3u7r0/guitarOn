import { BrowserRouter } from "react-router-dom";
import { RouterMain } from "../routes/RouterMain";
import { NavBar,Footer, Toast } from "../components";

export const LayoutMain = () => {
 
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <RouterMain />
      </BrowserRouter>
      <Footer  />
      {/* tostada que da las alertas */}
      <Toast/>
    </>
  );
};
