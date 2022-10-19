import Footer from "./components/Footer";
import Home from "./pages/Home"
import Aboute from "./pages/Aboute"
import Contact from "./pages/Contact"
import Plan from "./pages/Plan"
import Projects from "./pages/Projects"
import Error from "./pages/Error"
import Offer from "./pages/Offer"

import {BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

function App() {
  return (
    <div className="">
       <Navbar/>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Aboute" element={<Aboute/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="/Plan" element={<Plan/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Offer" element={<Offer/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/*" element={<Error/>}/>
       </Routes>
       </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
