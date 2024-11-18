import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";


import NavBar from "./Components/NavBar";

import Home from "./Pages/Home";
import Products from "./Pages/Products/Products";
import Store from "./Pages/Store";

export default function App()
{
    return(
        <>

        <BrowserRouter>
        
            <NavBar />

            <Routes>
                <Route path="/" element = {<Home/>} />
                <Route path="/Products" element = {<Products/>} />
                <Route path="/Stores" element = {<Store/>} />
            </Routes>
        
        
        </BrowserRouter>

        </>
    )
}