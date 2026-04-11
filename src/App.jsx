import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Weather from "./pages/Weather";

function App(){
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/education">Education</Link> |{" "}
        <Link to="/skills">Skills</Link> |{" "}
        <Link to="/weather">Weather</Link>
      </nav>

      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/education" element={<Education />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/weather" element={<Weather />}/>
      </Routes>

      <Footer></Footer>
    </BrowserRouter>

  );
}
export default App;