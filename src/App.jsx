import { HashRouter, Route, Routes } from "react-router-dom";

import Header from "./Components/UI Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/UI Components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </main>
    </HashRouter>
  );
}

export default App;
