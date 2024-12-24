import React, { useState } from "react";

function Validation2() {
  const [user, setvalue] = useState({
    tableno: "",
    name: "",
    select: "",
    price: "",
  });
  const [multiusers, setmultiusers] = useState([]);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!user.tableno) newErrors.tableno = "Table Number is required.";
    if (!user.name) newErrors.name = "Dish Name is required.";
    if (!user.select) newErrors.select = "Please select an option.";
    if (!user.price) newErrors.price = "Price is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show alerts step by step for missing fields
    if (!user.tableno) {
      alert("Please fill the Table Number.");
      return;
    }
    if (!user.name) {
      alert("Please fill the Dish Name.");
      return;
    }
    if (!user.select) {
      alert("Please select an option.");
      return;
    }
    if (!user.price) {
      alert("Please fill the Price.");
      return;
    }

    // If all fields are valid, add to the list
    if (validate()) {
      setmultiusers([...multiusers, user]);
      setvalue({
        tableno: "",
        name: "",
        select: "",
        price: "",
      });
      setErrors({});
    }
  };

  const handleInputChange = (field, value) => {
    // Dynamically update input value and clear its error
    setvalue({ ...user, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };
  const [printableData,setPrinableData] = useState({
    tableno: "",
    name: "",
    select: "",
    price: "",
  });
  const printData = (data)=>{
    setPrinableData(data);
    setTimeout(() => {
        let og = document.body.innerHTML;
        let printableContent = document.getElementById("printData").innerHTML;
        document.body.innerHTML = printableContent;
        window.print()
        document.body.innerHTML = og;
    }, 3000);
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center">
            <u>Bill System</u>
          </h2>
          <div className="row ms-2">
            <div className="col-md-6">
              <form onSubmit={handleSubmit} className="col-12">
                <div className="mb-3">
                  <label htmlFor="tableno" className="form-label">
                    Table Number
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.tableno ? "is-invalid" : ""}`}
                    id="tableno"
                    value={user.tableno}
                    onChange={(e) => handleInputChange("tableno", e.target.value)}
                  />
                  {errors.tableno && <div className="invalid-feedback">{errors.tableno}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Dish Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    id="name"
                    value={user.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="input-group mb-3">
                  <label className="input-group-text" htmlFor="select">
                    Options
                  </label>
                  <select
                    className={`form-select ${errors.select ? "is-invalid" : ""}`}
                    id="select"
                    value={user.select}
                    onChange={(e) => handleInputChange("select", e.target.value)}
                  >
                    <option value="">Choose...</option>
                    <option value="Veg">Veg</option>
                    <option value="Non-veg">Non-veg</option>
                  </select>
                  {errors.select && <div className="invalid-feedback">{errors.select}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    className={`form-control ${errors.price ? "is-invalid" : ""}`}
                    id="price"
                    value={user.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                  />
                  {errors.price && <div className="invalid-feedback">{errors.price}</div>}
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
              <div className="col-md-3 mb-4" id="printData" style={{display:"none"}}>
              <div className="card">
                      <div className="card-body text-center">
                        <h5 className="card-title">{printableData.tableno}</h5>
                        <h6 className="card-subtitle mb-2 text-uppercase">{printableData.name}</h6>
                        <p className="card-text text-uppercase">{printableData.select}</p>
                        <p className="card-text fs-5 fw-bold">₹{printableData.price}</p>
                         
                      </div>
                    </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="row">
                {multiusers.map((data, index) => (
                  <div key={index} className="col-md-3 mb-4">
                    <div className="card">
                      <div className="card-body text-center">
                        <h5 className="card-title">{data.tableno}</h5>
                        <h6 className="card-subtitle mb-2 text-uppercase">{data.name}</h6>
                        <p className="card-text text-uppercase">{data.select}</p>
                        <p className="card-text fs-5 fw-bold">₹{data.price}</p>
                        <i className="fas fa-print" style={{ fontSize: "24px", color: "blue" }} onClick={()=>{
                            printData(data);
                            
                        }}></i>
                        <i
                          className="fas fa-regular fa-trash"
                          style={{ fontSize: "24px", color: "red", marginLeft: "20px" }}
                          onClick={()=>{
                            setmultiusers(multiusers.filter((item,i)=> i != index))
                          }}
                        ></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Validation2;
