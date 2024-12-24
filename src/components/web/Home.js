import { Link } from "react-router-dom";


function Home() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="#">
                  Home
                </Link>
                <Link className="nav-link" to="/About" id="About">
                  About
                </Link>
                <Link className="nav-link" to="/Contact" id="Contact">
                  Contact
                </Link>
                <Link className="nav-link" to="/Services" id="Services">
                  Services
                </Link>
                <div className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    More
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="#">Portfolio</Link></li>
                    <li><Link className="dropdown-item" to="#">Blog</Link></li>
                  </ul>
                </div>
              </div>
              <form className="d-flex ms-auto" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        <div className="text-center">
        <h1 >Welcome to Home Page</h1>
        <p>This is the main content of the Home page.</p>
      </div>
    
      </>
    );
  }
  
  export default Home;
  