import {BrowserRouter ,Routes,Route} from "react-router-dom";

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
      <Navbar></Navbar>

      <Routes>
        <Route path= "/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/education" element={<Education />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/weather" element={<Weather />}></Route>
      </Routes>

      <Footer></Footer>
    </BrowserRouter>

  );
}
export default App;