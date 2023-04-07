import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App';
import Home from './pages/Home';
import _404ErrorPage from './pages/_404ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: '/' , element: <Home/>},
      { path: '*' , element: <_404ErrorPage/>},







    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
