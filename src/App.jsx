import { HashRouter, Route, Routes } from "react-router-dom";

import Header from "./Components/UI Components/Header/Header";

import Home from "./Components/Home/Home";
import Blogs from "./Components/Blogs/Blogs";
import Pricing from "./Components/Pricing/Pricing";

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
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/admin/plancategory" element={<PlanCategory />} />
        </Routes>
        <Footer />
      </main>
    </HashRouter>
  );
}

export default App;
