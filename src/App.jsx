import { HashRouter, Route, Routes } from "react-router-dom";

import Header from "./Components/UI Components/Header/Header";

import Home from "./Components/Home/Home";
import Blogs from "./Components/Blogs/Blogs";
import About from "./Components/About/About";
import Pricing from "./Components/Pricing/Pricing";
import Support from "./Components/Support/Support";
import Contact from "./Components/Contact/Contact";

import Footer from "./Components/UI Components/Footer/Footer";

// Admin
import PlanCategory from "./Components/Admin/Forms/Plan/PlanCategory/PlanCategory";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/plancategory" element={<PlanCategory />} />
        </Routes>
        <Footer />
      </main>
    </HashRouter>
  );
}

export default App;
