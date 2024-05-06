import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import LoginPage from './components/LoginPage';
import AdminLogin from './components/AdminLogin';
import AdminPage from './components/AdminPage';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
    path: "/login",
    element: <LoginPage />,
  },{
    path: "/adminlogin",
    element: <AdminLogin />,
  },{
    path: '/admin',
    element: <AdminPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className='dark'>
        <RouterProvider router={router} />
      </main>
    </NextUIProvider>
  </React.StrictMode>,
)
