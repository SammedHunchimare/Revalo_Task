import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const nevigate = useNavigate();
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
    else{
        nevigate("/Register");
    }
}

  return (
    <div className="container  mt-5">
      <div className="row ">
        <div className="offset-lg-4 offset-2 col-lg-4 col-md-6 col-8">
          <div class="bg-light rounded shadow p-4">
            <p class="alert shadow text-center">
              <img
                src="/logo.png"
                style={{ height: "40px", width: "100px", objectFit: "contain" }}
              />
            </p>
            <h3 class="text-center text-danger mb-3">Login</h3>
            <div class="mb-3 input-group">
              <span class="input-group-text">
                <i class="fa fa-envelope"></i>
              </span>
              <input
                type="email"
                class="form-control"
                placeholder="Enter Email"
                onChange={(e)=>{setEmail(e.target.value)}}
                value={email}
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
                onChange={(e)=>{setPassword(e.target.value)}}
                value={password}
              />
            </div>
            <div class="text-center">
              <button
                class="btn btn-primary"
                onClick={onSubmit}
              >
                Login <i class="fa fa-arrow-right"></i>{" "}
              </button>
            </div>
            <div class="text-center">
              <div
                onClick={() => {
                    nevigate("/Register");
                  }}
                style={{color:"gray",cursor:"pointer"}}
              >
                {" "}
                Create New Account?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
