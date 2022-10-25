import Footer from "./components/Footer";
import Home from "./pages/Home"
import Aboute from "./pages/Aboute"
import Contact from "./pages/Contact"
import Plan from "./pages/Plan"
import Projects from "./pages/Projects"
import Error from "./pages/Error"

import {BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Whatsapp from "./components/Whatsapp";
import Service from "./pages/Service";

function App() {
  
  return (
    <div className="">
       <Navbar/>
       <BrowserRouter>
       <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Plan" element={<Plan/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Aboute" element={<Aboute/>}/>
        <Route path="/*" element={<Error/>}/>
       </Routes>
       </BrowserRouter>
       <ScrollToTop/>
       <Whatsapp/>
      <Footer/>
    </div>
  );
}

export default App;
