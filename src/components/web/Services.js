import Home from "./Home";
function Services() {
    return (
      <>
      <div>
      <Home/>
      
        <div className="container my-5">
          <h2 className="text-center mb-4">Our Services</h2>
          <p className="text-center text-muted mb-5">
            Explore the variety of services we offer to help you grow and succeed.
          </p>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow-lg border-0 h-100">
                <div className="card-body text-center">
                  <i className="bi bi-laptop display-4 text-primary mb-3"></i>
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text text-muted">
                    Create stunning and responsive websites tailored to your needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-lg border-0 h-100">
                <div className="card-body text-center">
                  <i className="bi bi-bar-chart display-4 text-success mb-3"></i>
                  <h5 className="card-title">SEO Optimization</h5>
                  <p className="card-text text-muted">
                    Boost your online presence with our expert SEO services.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-lg border-0 h-100">
                <div className="card-body text-center">
                  <i className="bi bi-gear-fill display-4 text-warning mb-3"></i>
                  <h5 className="card-title">Custom Solutions</h5>
                  <p className="card-text text-muted">
                    Get tailored solutions to solve your unique business challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
        </div>
      </>
    );
  }
  
  export default Services;
  