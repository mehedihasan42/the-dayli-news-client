import React from 'react';

const CategoryCard = ({news}) => {
    const {details} = news;
    return (
            <div className="card w-5/6 bg-base-100 shadow-xl my-8 mx-auto">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>{details}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default CategoryCard;