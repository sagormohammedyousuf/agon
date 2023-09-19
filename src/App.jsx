import "./App.css";

import { Navbar, Footer } from "./component/import";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Discovery, Photos, Contact, NotFound } from "./pages/import";

function App() {
  return (
    <div className="main-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discovery" element={<Discovery />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
