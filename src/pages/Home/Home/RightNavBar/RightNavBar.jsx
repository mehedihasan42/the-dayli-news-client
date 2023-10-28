import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import {  BsFacebook, BsTwitter } from "react-icons/bs";
import qZone1 from '../../../../assets/qZone1.png'
import qZone2 from '../../../../assets/qZone2.png'
import qZone3 from '../../../../assets/qZone3.png'

const RightNavBar = () => {
    return (
       <div className='space-y-6'>
        <div className='space-y-2'>
            <h2 className='font-bold text-xl'>Log in with</h2>
            <button className='btn btn-outline'>Login with Google</button><br />
            <button className="btn btn-outline btn-error">Login with Github</button>
        </div>
        <div>
           <h2 className='font-bold text-xl'>Find Us On</h2>

           <div className="stats stats-vertical shadow">
  <div className="stat">
   <button className='flex'><BsFacebook className='text-xl'/>Facebook</button>
  </div>
  
  <div className="stat">
   <button className='flex'><BsTwitter className='text-2xl'/>Twiter</button>
  </div>

  <div className="stat">
  <button className='flex'><FaInstagramSquare className='text-xl'/>Instragram</button>
  </div>
  
</div>
        </div>
        <div>
            <h2 className='font-bold text-xl'>Q-Zone</h2>
            <div className="stats stats-vertical shadow">
  
  <div className="stat">
  <img src={qZone1} alt="" />
  </div>
  
  <div className="stat">
   <img src={qZone2} alt="" />
  </div>
  
  <div className="stat">
   <img src={qZone3} alt="" />
  </div>
  
</div>
        </div>
       </div>
    );
};

export default RightNavBar;