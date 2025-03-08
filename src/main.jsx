import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Home from './pages/Home/Home';
import AddMovies from './components/AddMovies/AddMovies';
import MyFavourites from './components/MyFavourites/MyFavourites';
import AllMovies from './components/AllMovies/AllMovies';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: '/',
        element: <AllMovies></AllMovies>,
        loader: () => fetch('http://localhost:5000/addmovie'),
      },
      {
        path: "/addmovie",
        element: <AddMovies></AddMovies>,
      },
      {
        path: "/myfavourites",
        element: <MyFavourites></MyFavourites>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
