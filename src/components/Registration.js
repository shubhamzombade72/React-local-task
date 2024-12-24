// src/components/Register.js
import React, { useState } from 'react';

function Register(props) { 
  return (
    <div className="col-md-6">
    <form onSubmit={props.handleRegister} className="p-4 border rounded shadow bg-light">
      <h3 className="text-center mb-4">Student Registration Form</h3>
      <div className="mb-3">
        <label htmlFor="fname" className="form-label">
          First Name
        </label>
        <input
          type="text"
          id="fname"
          className="form-control shadow"
          placeholder="Enter First Name"
          value={props.user.fname}
          onChange={(e) => props.setvalue({ ...props.user, fname: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lname" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          id="lname"
          className="form-control shadow"
          placeholder="Enter Last Name"
          value={props.user.lname}
          onChange={(e) => props.setvalue({ ...props.user, lname: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="pnumber" className="form-label">
          Phone Number
        </label>
        <input
          type="text"
          id="pnumber"
          className="form-control shadow"
          placeholder="Enter Phone Number"
          value={props.user.pnumber}
          onChange={(e) => props.setvalue({ ...props.user, pnumber: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="pincode" className="form-label">
          Pincode
        </label>
        <input
          type="text"
          id="pincode"
          className="form-control shadow"
          placeholder="Enter Pincode"
          value={props.user.pincode}
          onChange={(e) => props.setvalue({ ...props.user, pincode: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="form-control shadow"
          placeholder="Enter Email"
          value={props.user.email}
          onChange={(e) => props.setvalue({ ...props.user, email: e.target.value })}
        />
      </div>
      <button type="submit" className="btn btn-primary shadow w-100">
        Register
      </button>
    </form>
  </div>
  );
}

export default Register;
