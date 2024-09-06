import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { RouterMain } from "../routes/RouterMain";

export const LayoutMain = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <RouterMain />
            </BrowserRouter>
            <Footer />
        </>
    )
}
