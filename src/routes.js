import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FavoritosProvider from "./Context/Favoritos";

function AppRoutes() {
    return (
        <FavoritosProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favoritos" element={<Favoritos />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </FavoritosProvider>
    );
}

export default AppRoutes;
