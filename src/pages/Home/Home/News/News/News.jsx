import React from 'react';
import { useLoaderData } from 'react-router-dom';

const News = () => {
    const allNews = useLoaderData()
    const {_id,title,author,image_url,details} = allNews;
    return (
        <div className="card w-3/4 mx-auto mt-8 bg-base-100 shadow-xl">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{details}</p>
  </div>
</div>
    );
};

export default News;