import React from "react";
import Home from "./Home";
function About() {
  return (
    <>
    <div>
        <Home/>
    </div>
      <section className="about-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">About Us</h2>
          <div className="row align-items-center">
            {/* Left Column */}
            <div className="col-md-6 text-center">
              <img
                src="https://st2.depositphotos.com/3591429/6006/i/450/depositphotos_60063963-stock-photo-people-discussing-about-us.jpg"
                alt="About Us"
                className="img-fluid rounded shadow"
              />
            </div>
            {/* Right Column */}
            <div className="col-md-6">
              <p className="text-muted">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore, fugiat rerum repellat dolorum sit non accusantium,
                aspernatur ea veniam sint enim quasi quis illum, natus saepe
                deserunt recusandae assumenda maiores.
              </p>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Itaque vero optio fugit voluptatem hic at numquam cupiditate
                odio aspernatur quos repudiandae nulla corporis, ipsa ullam
                tenetur maxime minima quaerat aliquam.
              </p>
              <a href="#contact" className="btn btn-primary mt-3">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
