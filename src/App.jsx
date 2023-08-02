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
    path: '/about',
    element: <h1>About Page</h1>
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;