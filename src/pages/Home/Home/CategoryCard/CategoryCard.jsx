import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CategoryCard = ({news}) => {
    const {_id,image_url,details,title} = news;
    return (
            <div className="card w-5/6 bg-base-100 shadow-xl my-8 mx-auto">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{details.slice(0,200)}.......</p>
    <div className="card-actions justify-end">
      <Link to={`/news/${_id}`} className="btn btn-neutral">Details<BsFillArrowRightCircleFill className='text-xl'/></Link>
    </div>
  </div>
</div>
    );
};

export default CategoryCard;