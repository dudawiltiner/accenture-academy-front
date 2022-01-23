import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/global";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Pokemon from "./pages/Pokemon/Pokemon";
import Details from "./pages/Details/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/pokemon/details" element={<Details />} />
      </Routes>

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
