"use client"
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GlobalProvider = ({children}) => {
    return (
        <>
            <ToastContainer position='bottom-center'/>
            {children}
        </>
    );
};

export default GlobalProvider;