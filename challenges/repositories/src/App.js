import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailRepo from "./pages/DetailRepo";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:name" element={<DetailRepo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
