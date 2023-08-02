import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  HomeLayout,
  Landing,
  Error,
  Register,
  DashboardLayout,
  Login
} 
from './pages';

const router= createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: '/landing',
    element: <Landing />
  },
  {
    path: '/error',
    element: <Error />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/dashboardlayout',
    element: <DashboardLayout />
  },
  {
    path: '/login',
    element: <Login />
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;