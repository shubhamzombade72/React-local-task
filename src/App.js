// import Mod from "./components/Mod"
// import Registration from "./components/Registration";
// import Login from "./components/Login";
import Home from "./components/web/Home";
import About from "./components/web/About";
import ContactForm from "./components/web/Contact";
import Services from "./components/web/Services";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Registration/> 
      <Login/> */}
      {/* <Mod/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<ContactForm />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
