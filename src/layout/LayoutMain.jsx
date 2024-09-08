import { NavBar } from "../components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import { RouterMain } from "../routes/RouterMain";
/* import { Footer } from "../components/Footer/Footer"; */


/* import ComponenteProto from "./componenteProto"; */

export const LayoutMain = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <RouterMain />
                {/* <Footer /> */}
            </BrowserRouter>
        </>
    )
};