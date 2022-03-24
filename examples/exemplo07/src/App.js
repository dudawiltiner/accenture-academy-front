import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import UserProvider from "./context/UserContext";
import GlobalStyle from "./styles/global";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Pokemon from "./pages/Pokemon/Pokemon";
import Details from "./pages/Details/Details";
import CountExemple from "./pages/CountExemple/CountExemple";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/pokemon/details" element={<Details />} />

          <Route path="/count" element={<CountExemple />} />
        </Routes>

        <GlobalStyle />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
