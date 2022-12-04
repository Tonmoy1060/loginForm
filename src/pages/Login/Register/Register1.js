import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginPhoto from "../../../photos/login.png";
import logo from "../../../photos/logo.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Register1 = () => {
  const navigate = useNavigate();

  const handleFirstPage = (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    if (firstName && lastName) {
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);
      navigate('/register2')
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
        <div className="card flex justify-end text-center rounded-none    py-14 flex-shrink-0 w-full lg:max-w-[516px]  max-h-[630px] drop-shadow-2xl bg-base-100">
          <form
            onSubmit={handleFirstPage}
            className="card-body rounded-none text-center  pt-12"
          >
            <h1 className="text-5 font-bold text-center">SignUp Form</h1>
            <div className="form-control flex justify-center  p-0 mx-16  mt-28">
              <input
                name="firstName"
                type="text"
                placeholder="Write First Name"
                className="px-3.5 border-b-2 w-full"
              />
            </div>
            <div className="form-control flex justify-center  p-0 mx-16 mb-0  mt-16">
              <input
                name="lastName"
                type="text"
                placeholder="Write Last Name"
                className="px-3.5 border-b-2 w-full"
              />
            </div>

            <div className="mt-14">
              <button className="btn btn-primary rounded-xl btn-sm capitalize">
                Next step <AiOutlineArrowRight></AiOutlineArrowRight>
              </button>
            </div>
          </form>
          <div className="text-end mt-4 mr-2">
            <span className="text-xs inline">Already have an account?</span>
            <Link
              to={"/"}
              className="inline text-sm ml-3.5 mr-16 underline underline-offset-2 text-primary"
            >
              LOGIN HERE!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register1;
