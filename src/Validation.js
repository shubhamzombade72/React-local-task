import React, { useState } from 'react';

function Validation() {
  const [userName, setUserName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
 
    if(PhoneNumber.length!==10){
        alert('enter a valid phone number')
 }
    else if (userName === 'admin' && Password === '1234') {
      alert('Login successfully');
    } else if (userName !== 'admin' && Password === '1234') {
      alert('Username Invalid');
    } else if (Password !== '1234' && userName === 'admin') {
      alert('Invalid password');
    }  
    else {
      alert('Invalid username & password');
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <h2 className="text-center">
          <u>Student Form</u>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
    
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={Email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phonenumber" className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phonenumber"
              placeholder="Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)} 
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="check" />
            <label className="form-check-label" htmlFor="check">Remember me</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Validation;