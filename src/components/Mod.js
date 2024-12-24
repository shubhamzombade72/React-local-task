import { useState } from "react";
import Register from "./Registration";
import Login from "./Login";

function App() {
  const [user, setvalue] = useState({
    fname: "",
    lname: "",
    pnumber: "",
    pincode: "",
    email: "",
  });

  const [multiusers, setmultiusers] = useState([]);
  const [loginInfo, setLoginInfo] = useState({ email: "", pnumber: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    if (!user.fname || !user.lname || !user.pnumber || !user.pincode || !user.email) {
      alert("All fields are required for registration!");
      return;
    }

    if (multiusers.some((u) => u.email === user.email)) {
      alert("This email is already registered.");
      return;
    }

    setmultiusers([...multiusers, user]);
    alert("Registration successful!");

    setvalue({ fname: "", lname: "", pnumber: "", pincode: "", email: "" });
    
    
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const existingUser = multiusers.find(
      (u) => u.email === loginInfo.email && u.pnumber === loginInfo.pnumber
    );

    if (existingUser) {
      alert(`Welcome back, ${existingUser.fname}!`);
      setIsLoggedIn(true);
      setLoginInfo({ email: "", pnumber: "" });
    } else {
      alert("Invalid email or phone number.");
    }
  };

  return (
    <div className="container mt-5">
      {!isLoggedIn ? (
    <div className="row">
    {/* <div className="col-md-6">
      <form onSubmit={handleRegister} className="p-4 border rounded shadow bg-light">
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
            value={user.fname}
            onChange={(e) => setvalue({ ...user, fname: e.target.value })}
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
            value={user.lname}
            onChange={(e) => setvalue({ ...user, lname: e.target.value })}
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
            value={user.pnumber}
            onChange={(e) => setvalue({ ...user, pnumber: e.target.value })}
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
            value={user.pincode}
            onChange={(e) => setvalue({ ...user, pincode: e.target.value })}
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
            value={user.email}
            onChange={(e) => setvalue({ ...user, email: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary shadow w-100">
          Register
        </button>
      </form>
    </div> */}
    <Register user={user} setvalue={setvalue} handleRegister={handleRegister} />
{/*   
    <div className="col-md-6">
      <form onSubmit={handleLogin} className="p-4 border rounded shadow bg-light">
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
            value={loginInfo.email}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, email: e.target.value })
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
            value={loginInfo.pnumber}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, pnumber: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-success shadow w-100">
          Login
        </button>
      </form>
    </div> */}
    {multiusers.length > 0 && <Login handleLogin={handleLogin} loginInfo={loginInfo}/>}
  </div>
    
      ) : (
        <div className="text-center">
          <h2>Welcome, you are logged in!</h2>
          <button className="btn btn-danger mt-3" onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
