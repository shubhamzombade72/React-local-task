import Home from "./Home";
        function ContactForm() {
  return (
    <>
    <div>
    <Home/>
    </div>
     <section className="contactForm-section py-5">
     <div className="container mt-5">
        <div className="card p-4 shadow-lg border-0 rounded">
          <h2 className="text-center mb-4">Contact Us</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control shadow-sm"
                id="name"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control shadow-sm"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control shadow-sm"
                id="message"
                rows="4"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100 shadow">
              Send Message
            </button>
          </form>
        </div>
      </div>
     </section>
    </>
  );
}

export default ContactForm;
