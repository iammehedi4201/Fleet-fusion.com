import React, {  } from 'react';
import HomeDetails from '../../Components/HomeDetails/HomeDetails';
import './Home.css'
import useTitle from '../../Hooks/useTitle';

const Home = () => { 

    useTitle("Home Page")
    
    return (
        <div className='home-section'>
            <HomeDetails></HomeDetails>
        </div>
    );
};

export default Home;