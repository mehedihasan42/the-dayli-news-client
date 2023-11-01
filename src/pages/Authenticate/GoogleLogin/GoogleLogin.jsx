import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import {  } from "react-icons/fa";

const GoogleLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleLogin()
    .then(result=>{
        const user = result.user
        console.log(user) 
    })
    .catch(error=>{
        console.log(error)
    })
  };
  return (
    <div>
       <button onClick={handleGoogleSignIn} className='btn btn-outline'>Login with Google</button><br />
    </div>
  );
};

export default GoogleLogin;
