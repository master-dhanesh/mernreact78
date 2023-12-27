import { useContext, useState } from "react";
import Create from "./components/Create";
import Show from "./components/Show";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Details from "./components/Details.jsx";
import { ProductContext } from "./utils/Context.jsx";
import Edit from "./components/Edit.jsx";
import Products from "./components/Products.jsx";

const App = () => {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/show" element={<Show />}>
                    <Route path="/show/details/:title" element={<Details />} />
                </Route>
                <Route path="/show/edit/:title" element={<Edit />} />
                <Route path="/product" element={<Products />} />
            </Routes>
        </>
    );
};

export default App;
