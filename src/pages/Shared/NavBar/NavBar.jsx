import React, { useContext } from 'react';
import { BiSolidUserCircle } from "react-icons/bi";
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const {displayName,user,logOut} = useContext(AuthContext)

  const handleLogout = ()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.log(error))
  }

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
         <a>Item2</a>
        </li>
        <li><a>Item 3</a></li>
        <p>{displayName}</p>
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
       <a>Item2</a>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end space-x-2">
    {user?<Link onClick={handleLogout} className="btn">Log out</Link>:
   <> <a className="btn"><BiSolidUserCircle className='text-2xl'/></a>
   <Link to='/logIn' className="btn">Log in</Link></>
    }
    
  </div>
</div>
    );
};

export default NavBar;