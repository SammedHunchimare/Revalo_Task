import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const nevigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')


  
const onSubmit = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please Select Valid Email!",
        });
        return;
      }
    if (password == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter Password!",
      });
      return;
    }

    if (!/^[a-zA-Z\-]+$/.test(name)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter Valid Name",
      });
      return;
    }
    

    if (mobileNumber == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter Valid Number!",
      });
      return;
    }
    nevigate("/");
}

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="offset-md-4 offset-2 offset-col-3 col-lg-4 col-md-6 col-8">
          <div class="bg-light rounded shadow p-3">
            <p class="alert alert-info text-center"> Register Here </p>
            <div class="mb-3 input-group">
              <span class="input-group-text">
                <i class="fa fa-envelope"></i>
              </span>
              <input
                type="email"
                class="form-control"
                placeholder="Enter Email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
              />
            </div>
            <div class="mb-3 input-group">
              <span class="input-group-text">
                <i class="fa fa-lock"></i>
              </span>
              <input
                type="password"
                class="form-control"
                placeholder="Enter Password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
              />
            </div>
            <div class="mb-3 input-group">
              <span class="input-group-text">
                <i class="fa fa-user"></i>
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Name"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
              />
            </div>
            <div class="mb-3 input-group">
              <span class="input-group-text">
                <i class="fa fa-phone"></i>
              </span>
              <input
                type="number"
                class="form-control"
                placeholder="Enter Mobile No"
                value={mobileNumber}
                onChange={(e)=>{setMobileNumber(e.target.value)}}
              />
            </div>
            <div class="text-center">
              <button
                class="btn btn-primary"
                onClick={onSubmit}
              >
                Register <i class="fa fa-arrow-right"></i>
              </button>
            </div>
            <div class="text-center">
              <div
                onClick={() => {
                  nevigate("/");
                }}
                style={{ color: "gray", cursor: "pointer" }}
              >
                Already Have an Account?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
