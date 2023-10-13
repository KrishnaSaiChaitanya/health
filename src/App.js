import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit"; // module
import ProductSection from "./components/ProductSection";

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
