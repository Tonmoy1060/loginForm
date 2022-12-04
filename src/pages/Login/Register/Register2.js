import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import loginPhoto from "../../../photos/login.png";
import logo from "../../../photos/logo.png";

const Register2 = () => {
  const navigate = useNavigate();

  const handleSecondPage = (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    if (phone && email) {
      localStorage.setItem('phone', phone);
      localStorage.setItem('email', email);
      navigate('/register3')
    }
  };
   return (
      <div className="hero min-h-screen  bg-base-100">
      <div className="hero-content flex-col lg:p-0 lg:flex-row ">
        <div className="text-center drop-shadow-none ">
          <img className="max-w-40 max-h-14" src={logo} alt="" />
          <img className="max-w-xl drop-shadow-none lg:mx-20" src={loginPhoto} />
        </div>
        <div className="card flex justify-end text-center rounded-none py-20 flex-shrink-0 w-full lg:max-w-[516px]  max-h-[630px] drop-shadow-2xl bg-base-100">
          <form onSubmit={handleSecondPage} className="card-body rounded-none text-center">
            <h1 className="text-5 font-bold text-center">SignUp Form</h1>
            <div className="form-control flex justify-center  p-0 mx-16  mt-28">
              <input
              name='phone'
                type="text"
                placeholder="+880"
                className="px-3.5 border-b-2 w-full"
                required
              />
            </div>
            <div className="form-control flex justify-center  p-0 mx-16 mb-0  mt-16">
              <input
              name='email'
                type="email"
                placeholder="Write Email Address"
                className="px-3.5 border-b-2 w-full"
                required
              />
            </div>
            
            <div className="mt-14  pb-2">
              <Link to={'/register1'} className='inline-block text-sm font-bold ml-[-95px] mr-3'>Back</Link>
              <button className="btn ml-16 btn-primary rounded-xl btn-sm capitalize">
               <span className='flex justify-between '>


                Next step <AiOutlineArrowRight className='ml-2 text-white font-bold'></AiOutlineArrowRight>

               </span>
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
    );
};

export default Register2;