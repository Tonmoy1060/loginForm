import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginPhoto from "../../../photos/login.png";
import logo from "../../../photos/logo.png";

const Login = () => {
  const [checkPassword, setCheckPassword] = useState("");
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const loginData = {email:email, password:password}



    if (e.target.password.value.length > 7) {
      fetch("https://test.nexisltd.com/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          e.target.reset();
          navigate('/tableData')
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const handlePassword = (e) => {
    e.preventDefault();
    if (e.target.value.length < 8) {
      setCheckPassword("Your password must be 8 character");
    } else {
      setCheckPassword("");
    }
  };
  return (
    <div className="hero min-h-screen  bg-base-100">
      <div className="hero-content flex-col lg:p-0 lg:flex-row ">
        <div className="text-center drop-shadow-none ">
          <img className="max-w-40 max-h-14" src={logo} alt="" />
          <img
            className="max-w-xl drop-shadow-none lg:mx-20"
            src={loginPhoto}
          />
        </div>
        <div className="card flex justify-end text-center rounded-none   py-14 flex-shrink-0 w-full lg:max-w-[516px] max-h-[630px]  drop-shadow-2xl bg-base-100">
          <form
            onSubmit={handleLogin}
            className="card-body rounded-none text-center  pt-12"
          >
            <h1 className="text-5 font-bold text-center">Log in Form</h1>
            <div className="form-control flex justify-center  p-0 mx-16  mt-28">
              <input
                name="email"
                type="text"
                placeholder="Write Email Address"
                className="px-3.5 border-b-2 w-full"
                required
              />
            </div>
            <div className="form-control flex justify-center  p-0 mx-16 mb-0  mt-16">
              <input
                onChange={handlePassword}
                name="password"
                type="text"
                placeholder="Write Password"
                className="px-3.5 border-b-2 w-full"
                required
              />
            </div>
            <span className="text-xs pb-0 mb-0 p-0 mt-[-8px] ml-[-110px]">
              {checkPassword}
            </span>
            <div className="mt-14">
              <button className="btn btn-primary rounded-xl btn-sm capitalize">
                Log in
              </button>
            </div>
          </form>
          <div className="text-end m mr-2">
            <span className="text-xs inline">Don't have an account?</span>
            <Link
              to={"/register1"}
              className="inline text-sm ml-3.5 mr-16 underline underline-offset-2 text-primary"
            >
              SIGNUP HERE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
