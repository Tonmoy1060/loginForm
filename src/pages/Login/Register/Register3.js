import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginPhoto from "../../../photos/login.png";
import logo from "../../../photos/logo.png";

const Register3 = () => {
  const [checkPassword, setCheckPassword] = useState("");
  const navigate = useNavigate()


  const handleRegister = (e) => {
    e.preventDefault();
    
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const phone = localStorage.getItem('phone');
    const email = localStorage.getItem('email');
    const password = e.target.password.value;

    const signInData = {
      first_name:firstName,
      last_Name:lastName,
      phone_number:phone,
      email:email,
      password:password
    };

    if (e.target.password.value.length > 7) {
      fetch("https://test.nexisltd.com/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signInData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          e.target.reset();
          navigate('/tableData');
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
            <img className="max-w-xl drop-shadow-none lg:mx-20" src={loginPhoto} />
          </div>
          <div className="card flex justify-end text-center rounded-none  py-20 flex-shrink-0 w-full lg:max-w-[516px]  max-h-[630px] drop-shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body rounded-none text-center ">
              <h1 className="text-5 font-bold text-center">SignUp Form</h1>
              <div className="form-control flex justify-center  p-0 mx-16  mt-28">
                <input
                onChange={handlePassword}
                name='password'
                  type="password"
                  placeholder="Write Password"
                  className="px-3.5 border-b-2 w-full"
                  required
                />
              </div>
              <span className="text-xs pb-0 mb-0 p-0 mt-[-8px] ml-[-110px]">
              {checkPassword}
            </span>
              
              <div className="mt-14 mb-20 pb-2 ">
              <Link to={'/register2'} className='inline-block text-sm font-bold ml-[-105px] mr-3'>Back</Link>
                <button className="btn btn-primary ml-16  rounded-xl btn-sm capitalize">
                  Sign Up 
                </button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    );
};

export default Register3;