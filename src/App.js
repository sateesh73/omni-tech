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
        <Route path="/omni-tech" element={<Home/>}/>
        <Route path="omni-tech/Aboute" element={<Aboute/>}/>
        <Route path="omni-tech/Contact" element={<Contact/>}/>
        <Route path="omni-tech/Plan" element={<Plan/>}/>
        <Route path="omni-tech/Projects" element={<Projects/>}/>
        <Route path="omni-tech/Offer" element={<Offer/>}/>
        <Route path="omni-tech/Login" element={<Login/>}/>
        <Route path="omni-tech/*" element={<Error/>}/>
       </Routes>
       </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
