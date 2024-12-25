// import Mod from "./components/Mod"
// import Registration from "./components/Registration";
// import Login from "./components/Login";
import Home from "./components/web/Home";
import About from "./components/web/About";
import ContactForm from "./components/web/Contact";
import Services from "./components/web/Services";

// import About from "./components/Portfolio/QAboutt";
// import Contact from "./components/Portfolio/Contact";
// import Footer from "./components/Portfolio/Footer";
// import Home from "./components/Portfolio/Home";
// import Portfolio from "./components/Portfolio/Portfolio";
// import Resume from "./components/Portfolio/Resume";
// import Services from "./components/Portfolio/Services";
// import Sidebar from "./components/Portfolio/Sidebar";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Registration/> 
      <Login/> */}
      {/* <Mod/> */}
      {/* <Sidebar/>
      <Home/>
      <QAboutt/>
      <Resume/>
      <Portfolio/>
      <Services/>
      <Contact/>
      <Footer/> */}
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
