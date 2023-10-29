import React from 'react';
import LeftNavBar from './LeftNavBar/LeftNavBar';
import RightNavBar from './RightNavBar/RightNavBar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex'>
            <div className='w-3/12'>
                <LeftNavBar></LeftNavBar>
            </div>
            <div className='w-6/12'>
                <Outlet></Outlet>
            </div>
            <div className='w-3/12'>
                <RightNavBar></RightNavBar>
            </div>
        </div>
    );
};

export default Home;