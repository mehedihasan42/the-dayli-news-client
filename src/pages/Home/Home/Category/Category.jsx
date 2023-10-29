import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from '../CategoryCard/CategoryCard';

const Category = () => {
    const categoryNews = useLoaderData()
    return (
        <div>
            <h2>This is category {categoryNews.length}</h2>
            {
                categoryNews.map(categorys=><CategoryCard key={categorys._id} news={categorys}></CategoryCard>)
            }
        </div>
    );
};

export default Category;