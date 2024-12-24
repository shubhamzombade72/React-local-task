// Login.js
import React, { useState } from 'react';
function Login(props) {
  
  return (
<div className="col-md-6">
      <form onSubmit={props.handleLogin} className="p-4 border rounded shadow bg-light">
        <h3 className="text-center mb-4">Login</h3>
        <div className="mb-3">
          <label htmlFor="loginEmail" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            id="loginEmail"
            className="form-control shadow"
            placeholder="Enter Email"
            value={props.loginInfo.email}
            onChange={(e) =>
              props.setLoginInfo({ ...props.loginInfo, email: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="loginPhone" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            id="loginPhone"
            className="form-control shadow"
            placeholder="Enter Phone Number"
            value={props.loginInfo.pnumber}
            onChange={(e) =>
              props.setLoginInfo({ ...props.loginInfo, pnumber: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-success shadow w-100">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
