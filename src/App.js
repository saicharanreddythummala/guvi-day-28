import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Allprod from "./components/Allprod";
import Addprod from "./components/Addprod";
import Editprod from "./components/Editprod";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Allprod />} />
        <Route path="/all-products" element={<Allprod />} />
        <Route path="/add-product" element={<Addprod />} />
        <Route path="/edit-product/:id" element={<Editprod />} />
      </Routes>
    </>
  );
}

export default App;
