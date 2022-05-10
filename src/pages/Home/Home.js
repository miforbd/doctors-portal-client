import React from 'react';
import Banner from '../Banner/Banner';
import Info from './Info/Info';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner/>
            <Info/>
        </div>
    );
};

export default Home;