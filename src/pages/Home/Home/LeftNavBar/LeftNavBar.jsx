import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../../../../assets/1.png'
import pic2 from '../../../../assets/2.png'
import pic3 from '../../../../assets/3.png'

const LeftNavBar = () => {
    const [categorys,setCategorys] = useState([])
    useEffect(()=>{
        fetch('https://the-daily-news-server-28k1uqluy-mehedihasan42.vercel.app/category')
        .then(res=>res.json())
        .then(data=>setCategorys(data))
        .catch(error=>console.error(error))
    },[])
    return (
        <div className='ml-16'>
           <h2 className='font-bold text-xl'>All Caterogy</h2>
            {
                categorys.map(category=><p className='text-blue-500' key={category.id}><Link to={`/category/${category.id}`}>{category.name}</Link></p>)
            }
            <div className="stats stats-vertical shadow">
  
  <div className="stat">
   <img src={pic1} alt="" />
   <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
  </div>
  
  <div className="stat">
  <img src={pic2} alt="" />
  <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
  </div>
  
  <div className="stat">
  <img src={pic3} alt="" />
  <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
  </div>
  
</div>
        </div>
    );
};

export default LeftNavBar;