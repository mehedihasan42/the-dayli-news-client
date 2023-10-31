import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const SignUP = () => {
    const {signUp} = useContext(AuthContext)
    const [accepted,setAccepted] = useState()

    const handleSignUp = event =>{
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email,password)

        signUp(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=>console.log(error))
    }

    const handleCheck = event =>{
      setAccepted(event.target.checked)
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
                <h2 className='text-xl font-bold text-center'>Sign Up!</h2>
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
              <input onClick={handleCheck} type="checkbox" className="checkbox" />
              <div className="form-control mt-6">
                <input type='submit' disabled={!accepted} value={'sign up'} className="btn btn-neutral"/>
              </div>
            </form>
            <Link to='/logIn'>Log in</Link>
          </div>
        </div>
      </div>
    );
};

export default SignUP;