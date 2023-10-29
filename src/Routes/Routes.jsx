import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from '../pages/Home/Home/Home';
import Category from '../pages/Home/Home/Category/Category';
import News from '../pages/Home/Home/News/News/News';
import NewsCars from '../pages/Home/Home/News/NewsCard/NewsCars';
import SignUP from '../pages/Authenticate/SignUp/SignUP';
import SignIn from '../pages/Authenticate/SignIn/SignIn';

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
                loader: ({params})=>fetch(`http://localhost:5000/category/${params.id}`)
              }
            ]
        },
       
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
      element: <News></News>,
      loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
      // children:[
      //   {
      //     path:':id',
      //     element:<NewsCars></NewsCars>,
      //     loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
      //   }
      // ]
    }
  ]);

  export default router;