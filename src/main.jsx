import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import LoginPage from './components/LoginPage';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
    path: "/login",
    element: <LoginPage />,
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
