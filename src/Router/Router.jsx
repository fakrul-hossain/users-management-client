import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Error from '../Pages/Error/Error';
import MainLayout from '../layout/MainLayout/MainLayout';


const myCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                
            },
            {
                path:'/login',
               
               
            },
            {
                path:'/signIn',
                
               
            },
            {
                path: '/donations/:id',
               
                
            }
        ]
    }
])

export default myCreateRoute;