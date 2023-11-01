import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {

    const {logIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const form = location.state?.from?.pathname;

    const handleSignUp = event =>{
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email,password)
        
        logIn(email,password)
        .then(result=>{
          const user = result.user;
          console.log(user)
          navigate(form, { replace: true })
        })
        .catch(error=>console.log(error))
        
      }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
                <h2 className='text-xl font-bold text-center'>Log in!</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type='submit' value={'log in'} className="btn btn-neutral"/>
              </div>
            </form>
            <Link to='/signUp'>Sign Up</Link>
          </div>
        </div>
      </div>
    );
};

export default SignIn;