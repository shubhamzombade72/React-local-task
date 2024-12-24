import React, { useState } from 'react';

function Validation2() {
    const [user, setvalue] = useState({
        userName: "",
        email: "",
        password: "",
        phoneNumber: ""
    });
    const [multiusers, setmultiusers] = useState([]);

    const handleSubmit = (e) => {

        // Validation logic
        // if (user.phoneNumber.length !== 10) {
        //   alert('Enter a valid phone number');
        // } else if (user.userName === 'admin' && user.password === '1234') {
        //   alert('Login successfully');
        // } else if (user.userName !== 'admin' && user.password === '1234') {
        //   alert('Username Invalid');
        // } else if (user.password !== '1234' && user.userName === 'admin') {
        //   alert('Invalid password');
        // } else {
        //   alert('Invalid username & password');
        // }

        // Log the user data
        setmultiusers([
            ...multiusers,
            user
        ])
    };

    const handleGetData = (e) => {
        console.log("User Data:", multiusers);
    };

    return (
        <div>
            <div className="container mt-5">
                <h2 className="text-center">
                    <u>Student Form</u>
                </h2>
                <form >
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter your name"
                            onChange={(e) => setvalue({
                                ...user, userName: e.target.value
                            })}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            required
                            placeholder="Enter your email"
                            onChange={(e) => setvalue({
                                ...user, email: e.target.value
                            })}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            onChange={(e) => setvalue({
                                ...user, password: e.target.value
                            })}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phonenumber" className="form-label">Phone Number</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="phonenumber"
                            placeholder="Phone Number"
                            onChange={(e) => setvalue({
                                ...user, phoneNumber: e.target.value
                            })}
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="check" />
                        <label className="form-check-label" htmlFor="check">Remember me</label>
                    </div>
                    <button onClick={handleSubmit} type="reset" className="btn btn-primary col-sm-2">Submit</button>
                    <button
                        type="button"
                        className="btn btn-danger col-sm-2 ms-3"
                        onClick={handleGetData}
                    >
                        Get Data
                    </button>
                </form>
                <div className=' mt-5 table-responsive'>
                    <table className='table border text-center '>
                        <thead className='border'>
                            <th>Sr. No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Mobile</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            {multiusers.map((data,index)=>{
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{data.userName}</td>
                                        <td>{data.email}</td>
                                        <td>{data.password}</td>
                                        <td>{data.phoneNumber}</td>
                                        <td> 
                                            <div className='btn btn-success btn-sm mx-2'>Edit</div> 
                                            <div className='btn btn-danger btn-sm'>Del</div> 
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default Validation2;
