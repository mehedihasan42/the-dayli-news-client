import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from '../pages/Home/Home/Home';
import Category from '../pages/Home/Home/Category/Category';
import News from '../pages/Home/Home/News/News/News';
import SignUP from '../pages/Authenticate/SignUp/SignUP';
import SignIn from '../pages/Authenticate/SignIn/SignIn';
import PrivetRoutes from './PrivetRoutes';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            children:[
              {
                path:'/category/:id',
                element:<Category></Category>,
                loader: ({params})=>fetch(`https://the-daily-news-server-28k1uqluy-mehedihasan42.vercel.app/category/${params.id}`)
              }
            ]
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        } 
      ]
    },
    {
      path:'/signUp',
      element:<SignUP></SignUP>
    },
    {
      path:'/logIn',
      element:<SignIn></SignIn>
    },
    {
      path:'/news/:id',
      element: <PrivetRoutes><News></News></PrivetRoutes>,
      loader:({params})=>fetch(`https://the-daily-news-server-28k1uqluy-mehedihasan42.vercel.app/news/${params.id}`)
      // children:[
      //   {
      //     path:':id',
      //     element:<NewsCars></NewsCars>,
      //     loader:({params})=>fetch(`https://the-daily-news-server-28k1uqluy-mehedihasan42.vercel.app/news/${params.id}`)
      //   }
      // ]
    }
  ]);

  export default router;