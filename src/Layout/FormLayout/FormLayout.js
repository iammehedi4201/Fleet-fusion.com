import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header/Header';

const FormLayout = () => {
    return (
        <div>
             <Header></Header>
             <Outlet/>   
        </div>
    );
};

export default FormLayout;