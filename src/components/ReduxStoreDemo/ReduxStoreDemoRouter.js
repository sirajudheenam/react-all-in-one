import * as React from 'react';
import { useParams } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Card from './components/Card';
import Contact from './components/Contact';
import User from './components/User';
import UserList from './components/UserList';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const ReduxStoreDemoRouter = () => {
  const username = useParams();
  const router = createBrowserRouter([
    {
      exact: true,
      path: '/',
      element: <Home />,
    },
    {
      path: 'about',
      element: <About />,
    },
    {
      path: 'contact',
      element: <Contact />,
    },
    {
      path: 'users',
      element: <UserList />,
    },
    {
      path: 'user/:username',
      element: <User username={username} />,
    },
    {
      path: ':user',
      element: <Card />,
    },
  ]);

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
};
export default ReduxStoreDemoRouter;
