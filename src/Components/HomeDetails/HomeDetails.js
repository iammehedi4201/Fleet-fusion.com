import React from 'react';
import Benefits from '../Benefits/Benefits';
import Booking from '../Booking/Booking';
import Cars from '../../Components/Cars/Cars';
import OverallDetails from '../../Components/OverallDetails/OverallDetails';
import Reviews from '../Reviews/Reviews';
import TeamMembers from '../TeamMembers/TeamMembers';

const HomeDetails = () => {
    return (
        <div>
             <Booking></Booking>
             <Benefits></Benefits>
             <Cars></Cars>
             <OverallDetails></OverallDetails>
             <Reviews></Reviews>
             <TeamMembers></TeamMembers>
        </div>
    );
};

export default HomeDetails;