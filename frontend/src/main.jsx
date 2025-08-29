import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Login.jsx'
import Welcome from './Welcome.jsx'
import Home from './Home.jsx'
import Profile from './Profile.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Login", element: <Login/>},
  { path: "/Welcome", element: <Welcome/>},
  { path: "/Home", element: <Home/>},
  { path: "/Profile", element: <Profile/>},
  { path: "*", element: <NotFoundPage/>},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)