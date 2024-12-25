import React from 'react';

function App() {
  return (
    <div>
      <header className="bg-dark text-white p-3 text-center">
        <h1>Shubham Zombade Portfolio</h1>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#resume">Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/* <main>
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
      </main> */}
      <footer className="bg-dark text-white text-center p-3">
        &copy; 2024 Shubham Zombade. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
