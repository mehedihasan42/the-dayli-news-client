import React from 'react';
import LeftNavBar from './LeftNavBar/LeftNavBar';
import RightNavBar from './RightNavBar/RightNavBar';

const Home = () => {
    return (
        <div className='flex'>
            <div className='w-3/12'>
                <LeftNavBar></LeftNavBar>
            </div>
            <div className='w-6/12'>
                
            </div>
            <div className='w-3/12'>
                <RightNavBar></RightNavBar>
            </div>
        </div>
    );
};

export default Home;