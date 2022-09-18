import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "../pages";
import Reserve from "../pages/reserve";
import Menu from "../pages/menu";
import AboutUs from "../pages/aboutUs";
import Contact from "../pages/contact";

export const Router = () => (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/reserveren" element={<Reserve/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/over" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>
)
