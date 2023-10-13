import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit"; // module
import ProductSection from "./ProductSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/products" element={<ProductSection />}></Route>
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
